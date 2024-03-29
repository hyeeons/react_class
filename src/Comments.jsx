import Comment from "./Comment";

const Comments = () => {
  const usersArr = [
    {
      name: "봄이",
      img: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "봄이 프사",
    },
    {
      name: "여름이",
      img: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8JUVBJUIzJUEwJUVDJTk2JTkxJUVDJTlEJUI0fGVufDB8fDB8fHww",
      alt: "여름이 프사",
    },
    {
      name: "가을이",
      img: "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCVFQSVCMyVBMCVFQyU5NiU5MSVFQyU5RCVCNHxlbnwwfHwwfHx8MA%3D%3D",
      alt: "가을이 프사",
    },
  ];
  const commentArr = [
    {
      user: usersArr[0],
      text: "봄이 온다. 나가고 싶다. 고양고양.. 나는 고양... 냐옹",
      date: "2024.03.17",
    },
    {
      user: usersArr[1],
      text: "여름이 온다. 야구를 본다. 아이 좋아라! 나는 야구좋아하는 냐옹이",
      date: "2024.06.17",
    },
    {
      user: usersArr[2],
      text: "가을이다옹",
      date: "2024.010.17",
    },
  ];
  return (
    <>
      {commentArr.map((item, index) => (
        <Comment key={index} data={item} />
      ))}
    </>
  );
};

export default Comments;
