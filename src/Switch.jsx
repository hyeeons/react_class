import { Box, Center, Image } from "@chakra-ui/react";
import switchOn from "../src/assets/images/switch-on.svg";
import switchOff from "../src/assets/images/switch-off.svg";
import switchImg from "../src/assets/images/switch@2x.png";
import { useState } from "react";

const Switch = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isToggled2, setIsToggled2] = useState(false);
  return (
    <>
      <h1>스위치를 눌러 주세요</h1>

      <Image
        onClick={() => {
          setIsToggled(!isToggled);
        }}
        src={isToggled ? switchOn : switchOff}
        alt="switch"
        w={200}
        cursor={"pointer"}
        transition={"all 0.3s ease-in-out"}
      />
      <Box fontSize={24}> {isToggled ? "켜짐" : "꺼짐"}</Box>
      <Box
        w={400}
        h={200}
        onClick={() => {
          setIsToggled2(!isToggled2);
        }}
        cursor={"pointer"}
        bg={`url(${switchImg}) no-repeat 0 ${isToggled2 ? 0 : "-280px"} `}
      />
    </>
  );
};

export default Switch;
