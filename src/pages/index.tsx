import { Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Caracteristicas from "../components/Caracteristicas";
import Separador from "../components/Separador";

export default function Home() {
  return (
    <>
      <Flex direction="column">
        <Header />
        <Banner/>
        <Caracteristicas/>
        <Separador/>

        <Heading>
          
        </Heading>
      </Flex>
    </>
  );
}
