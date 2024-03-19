import axios from "axios";
import { useEffect, useState } from "react";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios.get("").then((response) => {
      const dataArray = response.data.boxOfficeResult.dailyBoxOfficeList;
      const movieName = dataArray.map((movie) => movie.movieNm);
      setMovieList(movieName);
    });
  }, []);

  return (
    <div>
      {movieList.map((movieNm, index) => (
        <h3 key={index}>{movieNm}</h3>
      ))}
      <h3></h3>
    </div>
  );
};

export default MovieList;
