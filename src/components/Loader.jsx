import React from "react";
import { Spinner, Center, Box } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box w="100%">
      <Center>
        <Spinner size="xl" />
      </Center>
    </Box>
  );
};

export default Loader;
