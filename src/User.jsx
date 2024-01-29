const UserList = (props) => {
  const { img, alt, name } = props.user;
  return (
    <>
      <img
        src={img}
        alt={alt}
        style={{ width: "100px", height: "100px", objectFit: "cover" }}
      />{" "}
      <strong>{name}</strong>
    </>
  );
};

export default UserList;
