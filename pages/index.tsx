import { Flex } from '@chakra-ui/react';
import { Banner } from '../components/Banner/Index';
import { Header } from '../components/Header/Index';
import { Swiper } from '../components/Swiper/Index';
import { TravelTypes } from '../components/Travel-types/Index';

export default function Home() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />
      <Banner />
      <TravelTypes />
      <Swiper /> 
    </Flex>
  )
}
