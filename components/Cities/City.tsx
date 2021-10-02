import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export default function City() {
  return(
    <Box borderRadius='4px' overflow='hidden' >
      <Image src='/images/eur_roma.jpg' alt='Rome Flag' h='170px' w='100%'/>  
      <Flex p='6' align='center' justify='space-between' bg='white' border='1px' borderTop='0' borderColor='highlight.100' >
        <Flex direction='column'>
          <Heading fontSize='xl' fontWeight='500'>Roma</Heading>
          <Text mt='3' fontSize='md' color='gray.500' fontWeight='500'>Itália</Text>
        </Flex>
        <Image src='/images/italy_flag.jfif' alt='Italy Flag' h='30px' w='30px' borderRadius='50%' objectFit='cover'/>
      </Flex>
     </Box>
  )
}