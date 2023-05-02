import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Continets from "./Continets";

const Navbar = () => {
  return (
    <Box
      pb={4}
      p={2}
      bg="linear-gradient(to right, #F6E05E, #F67280)"
      display="flex"
      justifyContent="space-between"
    >
      <Link to={"/"}>
        <Heading size="lg">Countries of the World</Heading>
      </Link>
      <Continets />
    </Box>
  );
};

export default Navbar;
