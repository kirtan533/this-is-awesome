import { Alert, AlertIcon } from "@chakra-ui/react";

const Error = ({ message }) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={4}
      left={"50%"}
      transform={"translateX(-50%)"}
      justifyContent={["center", "flex-start"]}
      w={"container.xl"}
    >
      <AlertIcon />
      {message}
    </Alert>
  );
};

export default Error;
