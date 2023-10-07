import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import background from "../utils/images/background.jpg";

const GptSearch = () => {
  return (
    <div>
       <div className="fixed -z-10 ">
        <img src={background} alt="background" className="h-screen w-screen" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  )
}

export default GptSearch