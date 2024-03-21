import React from 'react'
import axios from 'axios'
import useCurrentUser from '@/hooks/useCurrentUser'
import useFavourites from '@/hooks/useFavourites'
import { AiOutlinePlus } from 'react-icons/ai'
interface FavouriteButtonProps{
    movieId:string,

}
const FavouriteButton:React.FC<FavouriteButtonProps> = ({movieId}) => {
  return (
    <div className='
    cursor-pointer
group/item
W-6
h-6
lg:w-10
lg:h-10
border-white
border-2
rounded-full
flex
justify-center
items-center
transition
hover:border-netural-300
    '>
<AiOutlinePlus className='text-white ' size={25}/>

    </div>
  )
}

export default FavouriteButton