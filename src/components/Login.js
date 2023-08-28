import Header from "./Header";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(
      isSignInForm ? "" : name.current.value,
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    // Sign In/ Sign Up when the form is validate
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm); // toggle feature true/false
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center relative">
      <Header />
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-[350px] p-12 bg-black text-white rounded-lg relative z-10"
      >
        <h1 className="font-semibold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 placeholder-gray-400"
          />
        )}
        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 placeholder-gray-400"
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 placeholder-gray-400"
        />
        <p className="text-red-500 font-semibold text-lg py-1">
          {errorMessage}
        </p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg font-bold"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer font-semibold"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
