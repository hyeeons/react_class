const Event = () => {
  const handleClick = (event) => {
    // alert("축하합니다! 버튼이 클릭되었습니다");
    console.log(event); // event 속성
    console.log(event.target); // <button>버튼</button>
    console.log(event.type); // click
  };

  const handleMouseOver = (event) => {
    event.target.style.cssText =
      "background-color:lightcoral; color:white; font-weight:800; width:600px; height:50px ";
  };

  const handleChange = (event) => {
    document.querySelector(".text-value").innerText = event.target.value;
  };
  return (
    <>
      <h1>이벤트</h1>
      <h2>클릭 이벤트</h2>
      <button onClick={handleClick}>버튼</button>
      <h2>마우스 오버 이벤트</h2>
      <div onMouseOver={handleMouseOver}>마우스 오버하면 배경색 변화</div>
      <h2>입력 이벤트</h2>
      <input
        onChange={handleChange}
        type="text"
        placeholder="placeholder입니다"
      />
      <div className="text-value"></div>
    </>
  );
};

export default Event;
