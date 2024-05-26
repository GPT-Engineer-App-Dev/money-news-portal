import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="#004E7C" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="container.xl" mx="auto" px={4}>
          <Heading as="h1" size="lg">Financial Times</Heading>
          <HStack spacing={8}>
            <Link href="#home" color="white">Home</Link>
            <Link href="#news" color="white">News</Link>
            <Link href="#features" color="white">Features</Link>
            <Link href="#contact" color="white">Contact</Link>
          </HStack>
        </Flex>
      </Box>

      {/* Main Headline Section */}
      <Box as="section" bg="#F3F3F3" py={16} px={4} textAlign="center">
        <Heading as="h2" size="2xl" mb={4}>Breaking News: Market Hits Record Highs</Heading>
        <Text fontSize="lg">Stay updated with the latest financial news and trends from around the world.</Text>
      </Box>

      {/* Featured Articles Section */}
      <Box as="section" py={16} px={4}>
        <Heading as="h3" size="xl" mb={8} textAlign="center">Featured Articles</Heading>
        <Flex wrap="wrap" justify="space-around">
          <Box bg="#FFFFFF" p={6} m={4} boxShadow="md" borderRadius="md" maxW="sm">
            <Heading as="h4" size="md" mb={4}>Article 1</Heading>
            <Text>Summary of the first featured article. This is a brief overview of the content.</Text>
          </Box>
          <Box bg="#FFFFFF" p={6} m={4} boxShadow="md" borderRadius="md" maxW="sm">
            <Heading as="h4" size="md" mb={4}>Article 2</Heading>
            <Text>Summary of the second featured article. This is a brief overview of the content.</Text>
          </Box>
          <Box bg="#FFFFFF" p={6} m={4} boxShadow="md" borderRadius="md" maxW="sm">
            <Heading as="h4" size="md" mb={4}>Article 3</Heading>
            <Text>Summary of the third featured article. This is a brief overview of the content.</Text>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="#004E7C" color="white" py={8} px={4}>
        <VStack spacing={4} textAlign="center">
          <Text>&copy; 2023 Financial Times. All rights reserved.</Text>
          <HStack spacing={8}>
            <Link href="#privacy" color="white">Privacy Policy</Link>
            <Link href="#terms" color="white">Terms of Service</Link>
            <Link href="#contact" color="white">Contact Us</Link>
          </HStack>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;