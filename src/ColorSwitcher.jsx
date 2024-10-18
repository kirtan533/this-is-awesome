import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);
  return (
    <>
      <IconButton
        variant="ghost"
        color="current"
        pos={"fixed"}
        top={"4"}
        right={"4"}
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        zIndex={"overlay"}
        {...props}
      ></IconButton>
    </>
  );
};

export default ColorSwitcher;
