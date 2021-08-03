import { Box, Divider, Heading, HStack, Image, Wrap, WrapItem } from "@chakra-ui/react";

  
export function TravelTypes() {
  return(
    <>
    <HStack
    w='1160px'
    h='145px'
    justify='space-between'
    mx='auto'
    mt='60px'
    >
      <Image src='/images/Nightlife.svg' />
      <Image src='/images/Beach.svg' />
      <Image src='/images/Modern.svg' />
      <Image src='/images/Classic.svg' />
      <Image src='/images/More.svg' />
    </HStack>

    <Box
      mx='auto'
      align='center'
      justify='center'
      mt='80px'
    >
    <Divider 
    height='2px'
    w='90px'
    borderColor='#000'
    />
    </Box>

    <Box
      maxWidth='839px'
      height='101px'
      mx='auto'
      mt='80px'
    >
      <Heading
        color='dark.900'
        fontSize='36px'
        fontWeight='medium'
        align='center'
      >
        Vamos nessa? <WrapItem> Então escolha seu continente </WrapItem>
      </Heading>
    </Box>

    </>
  )
}