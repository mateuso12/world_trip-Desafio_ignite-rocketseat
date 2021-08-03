import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react'

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"

import SwiperCore, {
  Navigation, Pagination
} from 'swiper/core';
import { Flex, Image } from "@chakra-ui/react";



export function Swiper() {
  SwiperCore.use([Navigation, Pagination]);


  return (
    <>
  <Flex
  maxHeight='450px'
  maxWidth='1240px'
  justify='center'
  >
  <SwiperContainer
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    pagination={{
    "clickable":true
    }}
    navigation={true}
  >
        <SwiperSlide><Image position='relative'  src='/images/ads_alagoas.jpg' objectFit='cover' bottom='300px'/></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </SwiperContainer>
  </Flex>
    </>
  )
}