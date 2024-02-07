import { faBars, faHouse, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";

const Sort2 = () => {
  const [isToggled, setIsToggled] = useState(false);
  //   const Togglemenu = () => {
  //     return setIsToggled(!isToggled);
  //   };
  // onlick에서 Togglemenu 불러와도 ok
  return (
    <>
      <MenuList is={isToggled}>
        {/* 중괄호 속에 있는 isToggled는 위의 useState에서의 상태값 isToggled임 */}
        <button
          onClick={() => {
            setIsToggled(!isToggled);
          }}
        >
          <FontAwesomeIcon icon={isToggled ? faXmark : faBars} />
          <span className="blind">전체메뉴 보기</span>
        </button>
        <ul>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Music</li>
          <li>고객지원</li>
        </ul>
      </MenuList>
    </>
  );
};

const MenuList = styled.div`
  ul {
    background: lightpink;
    list-style: none;
    max-width: 100px;
    height: 150px;
    padding: 20px;
    display: ${(props) => (props.is ? "block" : "none")};
    //   return을 포함한 {}지울 수 있음
  }
`;

export default Sort2;
