import styled from "styled-components";
import { TbBeach } from "react-icons/tb";
import { GiCampingTent } from "react-icons/gi";

function Airbnb() {
  const iconArr = [
    { icon: <TbBeach />, value: "해변근처" },
    { icon: <GiCampingTent />, value: "캠핑장" },
    { icon: <GiCampingTent />, value: "캠핑장" },
    { icon: <GiCampingTent />, value: "캠핑장" },
  ];
  return (
    <>
      <IconWrap>
        {iconArr.map((item, index) => (
          <IconCard key={index}>
            <Icon>
              <a href="">{item.icon}</a>
            </Icon>
            <Value>{item.value}</Value>
          </IconCard>
        ))}
      </IconWrap>
    </>
  );
}

const IconWrap = styled.div`
  width: 1000px;
  height: 100px;
  margin-top: 200px;
  background-color: lightblue;
  display: flex;
`;
const IconCard = styled.div`
  width: 100px;
  height: 100px;
  svg {
    width: 100%;
    height: 100%;
    color: darkblue;
  }
  background-color: lightyellow;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
`;
const Value = styled.div`
  text-align: center;
  padding: 13px 0;
  font-size: 13px;
`;

export default Airbnb;
