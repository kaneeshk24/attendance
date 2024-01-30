import { ChakraProvider, CSSReset, Box, Heading } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box p={4}>
        <Heading>Hello Chakra UI!</Heading>
        {/* Add your TRPC components and logic here */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
