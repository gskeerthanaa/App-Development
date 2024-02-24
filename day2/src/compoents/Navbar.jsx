import React from "react";
import {
  Flex,
  Box,
  Spacer,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <Flex bg="teal" p="4" align="center">
      <Box color="white" fontWeight="bold">
        Logo
      </Box>
      <Spacer />
      <Box>
        <Button
          bg="black"
          color="white"
          _hover={{ bg: "white", color: "black" }}
          mr={4}
        >
          Prepaids
        </Button>
        <Button
          bg="black"
          color="white"
          _hover={{ bg: "white", color: "black" }}
          mr={4}
        >
          Postpaids
        </Button>
        <Button
          bg="black"
          color="white"
          _hover={{ bg: "white", color: "black" }}
          mr={4}
        >
          Profile
        </Button>
      </Box>
      <Box>
        <InputGroup>
          <Input bg="black" placeholder="Search..." color="white" />
          <InputRightElement>
            <SearchIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>
      </Box>
    </Flex>
  );
};

export default Navbar;
