import { Flex } from "@chakra-ui/react";

interface CaracteristicasProps {
  icon: string;
  text: string;
}

export default function Caracteristicas({ icon, text }: CaracteristicasProps) {
  return (
    <>
      <Flex
        direction={["row", "column"]}
        align="center"
        justify="center"
      ></Flex>
    </>
  );
}
