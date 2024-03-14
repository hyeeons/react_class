import styled from "styled-components";

const Viewer = ({ count }) => {
  return (
    <ViewSt>
      <div className="view">{count}</div>
    </ViewSt>
    // 3)
  );
};

const ViewSt = styled.div`
  width: 600px;
  height: 60px;
  background-color: lightgreen;
  margin-bottom: 30px;
  border-radius: 20px;
  .view {
    width: 100%;
    height: 30px;
    text-align: center;
    padding: 1% 0;
    font-size: 30px;
  }
`;

export default Viewer;
