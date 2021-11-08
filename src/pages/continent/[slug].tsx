import { Flex } from "@chakra-ui/react";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";

export default function Continent() {
  return (
    <Flex direction="column">
      <title>Europa</title>
      <Header />
      <ContinentBanner />
    </Flex>
  );
}
