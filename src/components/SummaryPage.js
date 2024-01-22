import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { DataContext } from "../App";

const SummaryPage = () => {
  const movieData = useContext(DataContext);
  // console.log(movieData);
  const movieId = useParams();

  const filteredData = movieData.filter((e) => e.show.id === movieId.movieId);
  const { show } = { ...filteredData[0] };
  const { name, image, rating, summary } = { ...show };

  return (
    <div className="mx-10 my-8">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h2 className="font-extrabold text-3xl">{name}</h2>
        <img
          src={
            image?.original ||
            "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
          }
          alt="Movie-Poster"
          className="w-[300px]"
        />
        {rating?.average && <h3 className="font-semibold">{rating?.average} / 10</h3>}
        {/* <p className="w-6/12 text-justify ">{summary}</p> */}
        <div className="w-6/12 text-justify " dangerouslySetInnerHTML={{ __html: summary }} />

        {/* Redirect to a Form */}
        <Link to={"/booking/" + movieId.movieId}>
          <button className="px-3 py-2 m-2 bg-slate-200 hover:bg-slate-400 rounded-lg">
            Book a Ticket
          </button>
        </Link>
        {/* <Form /> */}
      </div>
    </div>
  );
};

export default SummaryPage;

/* 
The second screen should have a button to book a movie ticket 
which will open a form with the movie name already present and a few relevant details.
(Reload should not happen)
(Use local/session storage for storing user details)

*/
