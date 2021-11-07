import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Caracteristica from "../components/Caracteristicas";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Flex direction="column">
        <Header />
        <Banner/>
        <Caracteristica/>
      </Flex>
    </>
  );
}
