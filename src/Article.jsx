import styled from "styled-components";
import { AiFillGift } from "react-icons/ai";

const Article = (props) => {
  const { tit, desc } = props;
  return (
    <Art>
      <h2>{tit}</h2>
      <p>{desc}</p>
      <AiFillGift />
    </Art>
  );
};

const Art = styled.article`
  margin-top: 500px;
  height: 400px;
  background-color: lightyellow;
`;

export default Article;
