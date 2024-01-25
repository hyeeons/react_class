import styled from "styled-components";

const Article = (props) => {
  const { tit, desc } = props;
  return (
    <Art>
      <h2>{tit}</h2>
      <p>{desc}</p>
    </Art>
  );
};

const Art = styled.article`
  height: 400px;
  background-color: lightyellow;
`;

export default Article;
