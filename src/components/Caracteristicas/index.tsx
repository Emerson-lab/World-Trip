import { Grid, GridItem } from "@chakra-ui/react";
import Caracteristicas from "./Caracteristica";

export default function Caracteristica() {
  return (
    <>
      <Grid
        templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5,1fr)"]}
        w="100%"
        justifyContent="space-between"
        align="center"
        mt={["10", "32"]}
        mx="auto"
        maxWidth="1160px"
        gap={[1, 5]}
      >
        <GridItem>
          <Caracteristicas icon="cocktail" text="Vida noturna" />
        </GridItem>
        <GridItem>
          <Caracteristicas icon="surf" text="Praia" />
        </GridItem>
        <GridItem>
          <Caracteristicas icon="building" text="Moderno" />
        </GridItem>
        <GridItem>
          <Caracteristicas icon="museum" text="clássico" />
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
          <Caracteristicas icon="earth" text="e mais..." />
        </GridItem>
      </Grid>
    </>
  );
}
