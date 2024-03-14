import axios from "axios";
import { useEffect, useState } from "react";

const MovieList = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=&targetDt=20240311"
      )
      .then((response) => {
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
