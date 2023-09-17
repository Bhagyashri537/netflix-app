import React from 'react'
import { img_cdn_url } from '../utils/config'

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <div className='w-40 pr-4'>
        <img alt="/" src={img_cdn_url + posterPath} />
      </div>
    </div>
  )
}

export default MovieCard