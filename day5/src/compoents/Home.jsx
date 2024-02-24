import React from "react";
import {
  ChakraProvider,
  extendTheme,
  CSSReset,
  Flex,
  Box,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "./Card";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "body",
      },
    },
  },
});

const Home = () => {
  // Sample data for 10 different recharge plans
  const rechargePlans = [
    {
      id: 1,
      title: "Plan 1",
      description: "Description for Plan 1",
      price: "$10",
    },
    {
      id: 2,
      title: "Plan 2",
      description: "Description for Plan 2",
      price: "$20",
    },
    // Add more plans here...
  ];

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Flex direction="column" height="100vh">
        <Navbar />
        <Flex>
          <Sidebar />
          <Box flex="1" p="4">
            <Heading as="h2" mb="4">
              Value Packs
            </Heading>
            <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px">
              {rechargePlans.map((plan) => (
                <Card
                  key={plan.id}
                  title={plan.title}
                  description={plan.description}
                  price={plan.price}
                />
              ))}
            </SimpleGrid>
          </Box>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
};

export default Home;
