import React, { useContext } from "react";
import { DataContext } from "../App";
import MovieCard from "./MovieCard";

const Home = () => {
  const movieData = useContext(DataContext);

  return (
    <div>
      <div className="flex flex-wrap justify-between m-10 gap-8">
        {movieData.map((movie) => (
          <MovieCard key={movie?.show?.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
