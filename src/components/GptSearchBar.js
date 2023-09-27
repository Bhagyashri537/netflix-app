import React from "react";
import language from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
const languageKey = useSelector((store) => store.config.language)

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-8"
          placeholder={language[languageKey].searchPlaceholder}
        />
        <button className="bg-red-800 text-white col-span-4 m-4 rounded-lg">
         {language[languageKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
