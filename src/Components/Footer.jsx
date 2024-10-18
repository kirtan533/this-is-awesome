import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={48}
      px={16}
      py={[16, 8]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About US</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            The Best Crypto Trading App in India.
          </Text>
        </VStack>
        <VStack>
          <Avatar
            boxSize={"28"}
            mt={[4, 0]}
            src="https://img.freepik.com/premium-photo/stylish-man-flat-vector-profile-picture-ai-generated_606187-310.jpg"
          />
          <Text letterSpacing={1} textAlign={"center"} fontWeight={"bold"}>
            FOUNDER <br />
            KIRTAN PRAJAPATI
          </Text>
          <Text borderBottom={"2px solid"}>kirtanghodadara533@gmail.com</Text>
          <a href="https://github.com/kirtan533" target="_blank">
            <AiFillGithub size={55} alignItems={"center"} />
          </a>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
