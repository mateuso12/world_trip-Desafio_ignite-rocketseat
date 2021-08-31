  
import { Flex, Grid, GridItem } from "@chakra-ui/layout";
import { Box, Center, Divider } from "@chakra-ui/react";
import Type from "./Type";

export default function TravelTypes() {
  return (
    <>
    <Grid
      templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
      w="100%"
      justify="space-between"
      align="center"
      mt={["10","32"]}
      mx="auto"
      maxW="1160px"
      flexWrap="wrap"
      gap={[1,5]}
    >
      
    <GridItem>
      <Type icon="cocktail" text="vida noturna" />
    </GridItem>
    <GridItem>
      <Type icon="surf" text="praia" />
    </GridItem>
    <GridItem>
      <Type icon="building" text="moderno" />
    </GridItem>
    <GridItem>
      <Type icon="museum" text="clássico" />
      </GridItem>
    <GridItem colSpan={[2, 2, 2, 1]}>
      <Type icon="earth" text="e mais..." />
      </GridItem>
    </Grid>

    <Box w={["60px","90px"]} mx="auto" h="2px" bg="gray.700" my={["9","20"]} />
    </>
  )
}