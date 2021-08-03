import { Box, Flex, Image, Link } from "@chakra-ui/react";

export function Header() {
  return(
    <Flex
    as='header'
    w='100vw'
    minHeight="100px"
    mx='auto'
    align='center'
    alignItems='center'
    justify='center'
    >
      
       <Image src='/images/Logo.svg' bgSize='sm'/>

    </Flex>
  )
}