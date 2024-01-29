import styled from "styled-components";

import UserList from "./User";

const Comment = (props) => {
  const { user, text, date } = props.data;
  //   console.log(`props:${props}`);
  //   console.log(`props.data:${props.data}`);
  return (
    <div className="comment">
      <UserList user={user} />
      <p>{text}</p>
      <time>{date}</time>
    </div>
  );
};

export default Comment;

{
  /* <p>봄이 온다. 나가고 싶다. 고양고양.. 나는 고양... 냐옹</p> */
}
{
  /* <time>2024.03.17</time> */
}
