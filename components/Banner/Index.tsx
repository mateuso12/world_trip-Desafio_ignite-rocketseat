import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w='100vw'
      minHeight='368.21px'
      bgImage='/images/Banner_background.jpg'
      borderBottom='36px solid'
      borderColor='light.900'
    >

      <HStack
        minWidth='1240px'
        mx='auto'
        justify='space-between'
        alignItems='center'
      >
        <Box
        maxWidth={524}
        >
          <Heading
            maxWidth={440}
            color='light.800'
            fontSize='36px'
            marginBottom='20px'
            fontWeight='medium'
          >
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text
          color='light.400'
          fontSize='18px'
          fontWeight='normal'
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Box
        position='relative'
        top='55px'
        >
        <Image src='/images/Airplane.svg' />
        </Box>
      </HStack>

    </Flex>
  )
}