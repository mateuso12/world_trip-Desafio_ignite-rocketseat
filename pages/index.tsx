import { Box, Flex, Heading, WrapItem } from '@chakra-ui/react';
import { Banner } from '../components/Banner/Index';
import { Header } from '../components/Header/Index';
import SwiperComponent from '../components/Swiper/Index';
import  TravelTypes  from '../components/Travel-types/Index'
export default function Home() {
  return (
    <Flex direction='column' h='100%'>
      <Header />
      <Banner />
      <TravelTypes />
    
      <Heading
      textAlign="center"
      fontWeight="500"
      mb={["5","14"]}
      fontSize={["lg",
      "3xl",
      "4xl"]}
    >
    Vamos nessa?<br/>Então escolha seu continente
    </Heading>
    
      <SwiperComponent />
    </Flex>
  )
}
