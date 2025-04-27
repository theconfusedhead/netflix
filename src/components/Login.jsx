import Header from "./Header";
import { bgImg } from "../utils/utils";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm((currentState) => !currentState);
  };
  return (
    <div>
      <Header />
      <div
        className={`h-screen bg-cover bg-center`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <form className="absolute w-3/12 bg-gray-950/75  p-12 top-2/6 -translate-y-[20%] left-3/6 -translate-x-[50%] rounded-lg text-white bg-opacity-50">
          <h1 className="text-white text-2xl font-bold my-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="my-2 p-4 border  w-full"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="my-2 p-4 border  w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="my-2 p-4  border w-full"
          />
          <button className="my-4 p-4 bg-red-700 w-full rounded-lg">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="my-4 p-4 cursor-pointer"
            onClick={toggleSignInForm}
            role="button"
          >
            {isSignInForm
              ? "new to Netflix? Sign Up NOW!"
              : "Already a member? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
