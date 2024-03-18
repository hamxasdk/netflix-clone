import useMovieList from '@/hooks/useMovieList'
import React from 'react'
import {isEmpty} from "lodash"
interface MovieListProps{
    title:string
    data:Record<string, any>[]

}
const MovieList:React.FC<MovieListProps> = ({data,title}) => {
    if(isEmpty(data)){
        return null
    }
  return (
    <div
    className='px-4 md:px-12 mt-4 space-y-8'
    >
        <div>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
{title}
        </p>
        <div className='grid grid-cols-4 gap-2'>{data.map((movie)=>(
            <div key={movie.id}>Movie</div>
        ))}</div>
        </div>
        </div>
  )
}

export default MovieList