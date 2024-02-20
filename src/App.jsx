import { useState, useEffect } from "react";
import listIcon from "./assets/images/icon-list.svg";
import successIcon from "./assets/images/icon-success.svg";
import illustrationDesktop from "./assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "./assets/images/illustration-sign-up-mobile.svg";

export default function App() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(email));
  }, [email]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (isValid) {
      setIsSuccess(true);
    }
  };

  const handleDismiss = () => {
    setEmail("");
    setIsValid(true);
    setIsSubmitted(false);
    setIsSuccess(false);
  };

  if (isSuccess) {
    return (
      <main className="flex max-w-[375px] flex-col items-start gap-8 rounded-[2.25rem] bg-white p-6 text-[#242742] md:me-6 md:ms-6 md:max-w-[31rem] md:p-16">
        <img src={successIcon} alt="Success" />
        <h1 className="text-[2.5rem] font-bold leading-10 md:text-[3.5rem] md:leading-[3.5rem]">
          Thanks for subscribing!
        </h1>
        <p>
          A confirmation email has been sent to <strong>{email}</strong>. Please
          open it and click the button inside to confirm your subscription
        </p>
        <button
          onClick={handleDismiss}
          className="w-full rounded-lg bg-[#242742] p-4 font-bold text-white">
          Dismiss message
        </button>
      </main>
    );
  }

  return (
    <main className="flex max-w-[375px] flex-col-reverse rounded-[2.25rem] bg-white text-[#242742] md:me-6 md:ms-6 md:max-w-[58rem] md:flex-row md:items-center">
      <div className="flex flex-col gap-6 p-10 md:p-12">
        <h1 className="text-[2.5rem] font-bold leading-10 md:text-[3rem]">
          Stay updated!
        </h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul className="flex flex-col gap-3">
          <li className="flex items-start gap-4">
            <img src={listIcon} alt="Checkmark icon" />
            <p>Product discovery and building what matters</p>
          </li>
          <li className="flex items-start gap-4">
            <img src={listIcon} alt="Checkmark icon" />
            <p>Measuring to ensure updates are a success</p>
          </li>
          <li className="flex items-start gap-4">
            <img src={listIcon} alt="Checkmark icon" />
            <p>And much more!</p>
          </li>
        </ul>
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex justify-between">
            <label htmlFor="email" className="text-xs font-bold leading-5">
              Email address
            </label>
            {!isValid && isSubmitted && (
              <span className="text-[0.75rem] text-red-500">
                Valid email required
              </span>
            )}
          </div>
          <input
            type="email"
            placeholder="email@company.com"
            id="email"
            autoComplete="off"
            value={email}
            onChange={handleEmailChange}
            className={`mb-6 w-full rounded-lg border py-4 pl-6 placeholder:opacity-50 ${isValid || !isSubmitted ? "focus:border-[#242742]" : "border-red-500 bg-red-100"} focus:outline-none`}
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-[#242742] p-4 font-bold text-white">
            Subscribe to monthly newsletter
          </button>
        </form>
      </div>
      <picture>
        <source media="(min-width: 768px)" srcSet={illustrationDesktop} />
        <img
          src={illustrationMobile}
          alt="Sign up illustration"
          className="md:py-10 md:pr-10"
        />
      </picture>
    </main>
  );
}
