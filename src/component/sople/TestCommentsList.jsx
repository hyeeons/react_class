import TestComments from "./TestComments";

const TestCommentBox = () => {
  return (
    <div>
      <TestComments name="이현정" text={"안녕하세요"} />
      <TestComments name="이지나" text={"리액트 배우고 있어요"} />
      <TestComments name="냥냥이" text={"집가고싶나요?"} />
      <TestComments name="멍멍이" text={"멍!!멍멍!!"} />
    </div>
  );
};

export default TestCommentBox;
