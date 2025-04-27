import Header from "./Header";
import { bgImg } from "../utils/utils";
import { useRef, useState } from "react";
import { checkValidateData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);

  const nameRef = useRef(undefined);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm((currentState) => !currentState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = checkValidateData(
      nameRef.current?.value,
      emailRef.current.value,
      passwordRef.current.value
    );

    setError(message);

    // Sign In && Sign Up
    if (message) return; // some error is here don't go ahead.

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user, "user");
          updateProfile(auth.currentUser, {
            displayName: nameRef.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/32161677?v=4",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));

              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              console.log(error);
              setError(error.message);
            });
          // dispatch(addUser(JSON.stringify(user)));
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // dispatch(addUser(JSON.stringify(user)));
          // ...
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };

  return (
    <div>
      <Header />
      <div
        className={`h-screen bg-cover bg-center`}
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <form
          onSubmit={handleSubmit}
          className="absolute w-4/12 bg-gray-950/75  p-12 top-2/6 -translate-y-[20%] left-3/6 -translate-x-[50%] rounded-lg text-white bg-opacity-50"
        >
          <h1 className="text-white text-2xl font-bold my-3">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              ref={nameRef}
              className="my-2 p-4 border bg-slate-700/60 w-full"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="my-2 p-4 bg-slate-700/60 border  w-full"
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            className="my-2 p-4  bg-slate-700/60 border w-full"
            ref={passwordRef}
          />
          <button
            type="submit"
            className="my-4 p-4 bg-red-700 w-full rounded-lg cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-red-500 font-bold text-lg py-2">{error}</p>

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
