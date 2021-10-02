import { Box, Flex, Heading, HStack, Image, Text } from "@chakra-ui/react";

export function Banner() {
  return (
    <Flex
      w='100%'
      h={["163px", "250px", "250px", "335px"]}
      bgImage='/images/Banner_background.jpg' 
      bgPosition={["100% 20%","100% 20%","100% 30%"]}
      bgRepeat='no-repeat'
      bgSize='cover'
    >

      <Flex
        w="100%"
        mx='auto'
        justify={['center', 'space-between']}
        align='center'
        px={["6","12","15","20","300px"]}
      >
        <div>
        <Heading
            color='light.800'
            fontSize={["xl", "2xl", "2xl", "2xl", "4xl"]}
            fontWeight='medium'
          >
            5 Continentes,<br /> infinitas possibilidades.
          </Heading>
          <Text
          color='light.400'
          mt="5" 
          fontSize={["0.8rem","xl"]} 
          maxW={["100%", "100%", "100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </div>
          

        
        <Image src='/images/Airplane.svg' 
        w={["300px","300px","300px","430px"]} 
        display={['none','none','block']}
        transform="translateY(48px)"
        ml="8"
        alt='Airplane'
        />
        
      </Flex>

    </Flex>
  )
}