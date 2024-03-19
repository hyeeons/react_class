import Boxoffice from "./MovieList";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const Movie = () => {
  const [movieNm, setMovieNm] = useState("");

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        const dataArray = response.data.boxOfficeResult.dailyBoxOfficeList;
        setMovieNm(dataArray[3].movieNm);
      })
      .catch((error) => console.error("오류발생", error));
  }, []);

  return (
    <MovieSt className>
      <div className="movie"></div>
      <div className="movieTit">{movieNm}</div>
    </MovieSt>
  );
};

const MovieSt = styled.div`
  margin: 100px 0;
  .movieTit {
    font-size: 25px;
  }
`;
export default Movie;
