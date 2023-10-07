import React from "react";
import netflixlogo from "../utils/images/Netflix_Logo_PMS (1).png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { toggleSearchGptView } from "../utils/gptSlice";
import { supported_lang } from "../utils/config";
import { changeLang } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showgptSerch = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in,

        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser);
        navigate("/");
      }
    });
    //unsubsribing while unmounting or removing header
    return () => unsubscribe();
  }, []);

  const handlegptSearch = () => {
    dispatch(toggleSearchGptView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between" >
      <img src={netflixlogo} alt="logo" className="w-44" />
      {user ? (
        <div className="py-2 flex">
          {showgptSerch && <select className="p-2 text-white bg-gray-700 m-2 rounded-md" onChange={handleLangChange} >
            {supported_lang.map((language) => (
              <option key={language.identifier} value={language.identifier}>
                {language.name}
              </option>
            ))}
          </select>}
          <button
            className="p-2 text-white bg-gray-700 m-2 rounded-md"
            onClick={handlegptSearch}
          >
            {" "}
            {showgptSerch ? "HomePage" : "GPT search"}
          </button>
          <button
            onClick={handleSignOut}
            className="p-2 w-32 bg-red-700 text-white rounded-md"
          >
            Sign out
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
