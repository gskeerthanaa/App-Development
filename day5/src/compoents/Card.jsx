import React from "react";
import { Box, Text, Heading, Button } from "@chakra-ui/react";

const Card = ({ title, description, price }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p="4" boxShadow="lg">
      <Heading as="h3" size="md" mb="2">
        {title}
      </Heading>
      <Text fontSize="sm" color="gray.600" mb="2">
        {description}
      </Text>
      <Text fontWeight="bold" fontSize="lg" mb="4">
        {price}
      </Text>
      <Button colorScheme="teal">Buy Now</Button>
    </Box>
  );
};

export default Card;
