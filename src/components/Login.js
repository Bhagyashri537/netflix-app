import React, { useRef, useState } from "react";
import Header from "./Header";
import background from "../utils/images/background.jpg";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errmsg, setErrmsg] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setSignInForm(!signInForm);
  };
  const handleLogin = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrmsg(message);
    if (message) return;

    //signup signin logic

    if (!signInForm) {
      //Signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic

     
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrmsg(errorCode + "-" + errorMessage)
        });
    }
  };

  return (
    <div className="h-screen w-screen">
      <Header />
      <div className="absolute ">
        <img src={background} alt="background" className="h-screen w-screen" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="p-12 bg-black absolute w-96 my-40 right-0 left-0 mx-auto rounded-xl bg-opacity-80"
      >
        <h2 className="text-white font-bold text-3xl p-2">
          {signInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!signInForm && (
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 my-4 bg-gray-800 w-full text-white rounded-xl"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="p-4 my-4 bg-gray-800 w-full text-white rounded-xl"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-800 w-full text-white rounded-xl"
        />
        <p className="text-red-700 font-semibold text-lg p-2">{errmsg}</p>
        <button
          className="p-4 my-6 w-full bg-red-600 rounded-xl "
          onClick={handleLogin}
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleForm}>
          {signInForm
            ? "New to Netflix? Sign Up Now"
            : "Alredy resistered?Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
