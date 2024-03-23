import React, { useState } from "react";
import { Box, VStack, HStack, Heading, Text, Image, Button, Grid, useColorModeValue, useBreakpointValue, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Vibrant Sneakers",
    price: "$129.99",
    image: "https://images.unsplash.com/photo-1644001992668-3b9ed080533a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwY29sb3JmdWwlMjBzbmVha2Vyc3xlbnwwfHx8fDE3MTExODE3MzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Stylish Hoodie",
    price: "$79.99",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHlsaXNoJTIwY29sb3JmdWwlMjBob29kaWV8ZW58MHx8fHwxNzExMTgxNzM1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Trendy Backpack",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmVuZHklMjBjb2xvcmZ1bCUyMGJhY2twYWNrfGVufDB8fHx8MTcxMTE4MTczNXww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Funky Sunglasses",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmdW5reSUyMGNvbG9yZnVsJTIwc3VuZ2xhc3Nlc3xlbnwwfHx8fDE3MTExODE3MzZ8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const TitleSection = () => {
  const bgGradient = useColorModeValue("linear(to-r, purple.400, pink.500)", "linear(to-r, purple.600, pink.700)");

  return (
    <Box bgGradient={bgGradient} py={20} textAlign="center" color="white" mb={10}>
      <Heading size="2xl" mb={4}>
        Welcome to Vibrant Shop
      </Heading>
      <Text fontSize="xl">Discover our amazing collection of products!</Text>
    </Box>
  );
};

const ProductWidget = ({ product }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Box borderWidth={1} borderRadius="lg" overflow="hidden" p={4} textAlign="center" position="relative">
      <Image src={product.image} alt={product.name} mb={4} />
      <Heading size="md" mb={2}>
        {product.name}
      </Heading>
      <Text fontWeight="bold" mb={4}>
        {product.price}
      </Text>
      <Button leftIcon={<FaShoppingCart />} colorScheme="purple" variant="solid" size="sm" mb={2}>
        Add to Cart
      </Button>
      <IconButton aria-label="Favorite" icon={<FaHeart />} colorScheme={isFavorite ? "red" : "gray"} variant="ghost" size="sm" position="absolute" top={2} right={2} onClick={toggleFavorite} />
    </Box>
  );
};

const Index = () => {
  const columns = useBreakpointValue({ base: 1, md: 2, lg: 4 });

  return (
    <VStack spacing={8}>
      <TitleSection />
      <Flex w="100%" px={4} alignItems="center">
        <Heading size="lg">Featured Products</Heading>
        <Spacer />
        <IconButton aria-label="Search" icon={<FaSearch />} colorScheme="purple" variant="ghost" size="sm" />
      </Flex>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={6} px={4}>
        {products.map((product) => (
          <ProductWidget key={product.id} product={product} />
        ))}
      </Grid>
    </VStack>
  );
};

export default Index;
