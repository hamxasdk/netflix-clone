import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import FavouriteButton from "./FavouriteButton";
interface MovieCardProps {
  data: Record<any, string>;
}
const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="group bg-zinc-900 col-span relative h-[12vw] ">
      <img
        className="
        cursor-pointer 
        object-cover
        transition
        duration
        shadow-xl
        rounded-md
        group-hover:opacity-90
        sm:group-hover:opacity-0
        delay-300
        w-full
        h-[12vw]
        "
        src={data.thumbnailUrl}
        alt="Thunmbnail"
      />
      <div
        className="opacity-0 absolute top-0 tranition duration-200 z-10 
        invisible sm:visible delay-300 w-full scale-0
         group-hover:scale-110 group-hover:-translate-y-[6vw] 
         group-hover:translate-x-[2vw]
         group-hover:opacity-100
         "
      >
        <img
          src={data.thumbnailUrl}
          alt="thumbnail"
          className="
            cursor-pointer
            object-cover
            transition
            duration
            shadow-xl
            rounded-t-md
            w-full
            h-[12vw]
            "
        />
        <div
          className="
Z-10
Obg-zinc-800
p-2
lg:p-4
absolute
w-full
transition
shadow-md
rounded-b-md "
        >
          <div className="flex flex-row items-center gap-3">
            <div
              className="
cursor-pointer
W-6
h-6
lg:w-10
lg:h-10
bg-white
rounded-full
flex
justify-center
items-center
transition
hover:bg-neutral-3001"
              onClick={() => {}}
            >
              <BsFillPlayFill size={30} />
             
            </div>
            <FavouriteButton movieId={data?.id}/>
          </div>
          <p className="text-green-400 font-semi-bold mt-4 ">
            New <span className="text-white ">2024</span>
          </p>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg: text-sm">
              {data.duration}
            </p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg: text-sm">{data.genre}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
