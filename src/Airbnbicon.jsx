// sort
import styled from "styled-components";
import { TbBeach } from "react-icons/tb";
import { GiCampingTent } from "react-icons/gi";
import { useState } from "react";

function Airbnb() {
  const iconArr = [
    { icon: <TbBeach />, value: "해변근처" },
    { icon: <GiCampingTent />, value: "캠핑장" },
    { icon: <GiCampingTent />, value: "캠핑장" },
    { icon: <GiCampingTent />, value: "캠핑장" },
  ];
  const [sel, Setsel] = useState(0);
  return (
    <>
      <IconWrap>
        <ul>
          {iconArr.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                Setsel(index);
              }}
              className={sel === index ? "active" : ""}
            >
              {item.icon}
              {item.value}
            </li>
          ))}
        </ul>
      </IconWrap>
    </>
  );
}
//   <IconCard key={index}>
//     <Icon>
//       <a href="">{item.icon}</a>
//     </Icon>
//     <Value>{item.value}</Value>
//   </IconCard>

//스타일
const IconWrap = styled.div`
  margin-bottom: 100px;
  ul {
    list-style: none;
    display: flex;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 100px;
    height: 75px;
    color: #777;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  svg {
    font-size: 30px;
  }
  .active {
    border-bottom: 2px solid #000;
  }
`;

// const IconWrap = styled.div`
//   width: 1000px;
//   height: 100px;
//   margin-top: 200px;
//   background-color: lightblue;
//   display: flex;
// `;
// const IconCard = styled.li`
//   width: 100px;
//   height: 100px;
//   svg {
//     width: 100%;
//     height: 100%;
//     color: darkblue;
//   }
//   background-color: lightyellow;
// `;

// const Icon = styled.div`
//   width: 50px;
//   height: 50px;
// `;
// const Value = styled.div`
//   text-align: center;
//   padding: 13px 0;
//   font-size: 13px;
// `;

export default Airbnb;
