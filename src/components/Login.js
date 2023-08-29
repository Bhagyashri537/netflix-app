import React, { useState } from "react";
import Header from "./Header";
import background from "../utils/background.jpg";

const Login = () => {

    const [signInForm, setSignInForm] = useState(true)

    const toggleForm = () => {
         setSignInForm(!signInForm)
    }
  return (
    <div className="">
      <Header />
      <div className="absolute">
        <img src={background} alt="background" className="" />
      </div>
      <form className="p-12 bg-black absolute w-96 my-40 right-0 left-0 mx-auto rounded-xl bg-opacity-80">
        <h2 className="text-white font-bold text-3xl p-2">{signInForm ? "Sign In" : "Sign Up"}</h2>
        {!signInForm &&  <input
          type="text"
          placeholder="Your Name"
          className="p-4 my-4 bg-gray-800 w-full rounded-xl"
        /> }
        <input
          type="text"
          placeholder="Email address"
          className="p-4 my-4 bg-gray-800 w-full rounded-xl"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 bg-gray-800 w-full rounded-xl"
        />
        <button className="p-4 my-6 w-full bg-red-600 rounded-xl ">{signInForm ? "Sign In" : "Sign Up"}</button>
        <p className="text-white cursor-pointer" onClick={toggleForm}>{signInForm ? "New to Netflix? Sign Up Now" : "Alredy resistered?Sign In Now"}</p>
      </form>
    </div>
  );
};

export default Login;
