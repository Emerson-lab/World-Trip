import { Flex, Heading } from "@chakra-ui/react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Caracteristicas from "../components/Caracteristicas";
import Separador from "../components/Separador";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Flex direction="column">
        <title>WorldTrip</title>
        <Header />
        <Banner />
        <Caracteristicas />
        <Separador />

        <Heading
          textAlign="center"
          fontWeight="500"
          mb={["5", "14"]}
          fontSize={["lg", "3xl", "4xl"]}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Heading>

        <Slider />
      </Flex>
    </>
  );
}
