const Comment = () => {
  return (
    <div className="comment">
      <img
        src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />{" "}
      <strong>봄이</strong>
      <p>봄이 온다. 나가고 싶다. 고양고양.. 나는 고양... 냐옹</p>
      <time>2024.03.17</time>
    </div>
  );
};

export default Comment;
