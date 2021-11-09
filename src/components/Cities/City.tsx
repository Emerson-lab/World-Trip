import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

export default function City() {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src="/foto-londres.png" h="170px" w="100%" />
      <Flex
        p="6"
        align="center"
        justify="space-between"
        bg="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">
            Londres
          </Heading>
          <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
            Reino Unido
          </Text>
        </Flex>
        <Image src="/bandeira-reino-unido.png" w="30px"/>
      </Flex>
    </Box>
  );
}
