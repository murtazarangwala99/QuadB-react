import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  const { show } = { ...data };
  const { image, name, language, genres, rating } = { ...show };

  return (
    <div className="flex flex-col justify-center items-center w-[250px] p-4 border-2 rounded-lg shadow-lg hover:bg-green-100 ">
      <div>
        <img
          src={
            image?.medium ||
            "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
          }
          alt="movie-image"
          className="w-[200px] h-[250px]"
        />
      </div>
      <div className="py-3 px-1 self-start">
        <h2 className="font-bold text-xl">{name}</h2>
        <p>{language}</p>
        <p>{genres.join(", ")}</p>
        {rating.average && <p>{rating.average}/10</p>}
        <Link to={"/movie/" + data?.show?.id}>
          <button className="px-3 py-2 m-2 bg-slate-200 hover:bg-slate-400 rounded-lg">
            Click Here for more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
