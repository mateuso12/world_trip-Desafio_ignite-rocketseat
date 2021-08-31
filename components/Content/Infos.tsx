import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Text } from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

export default function Infos() {
  return (
    <Flex 
      align='center'
      justify='space-between'
    >
      <Flex direction='column' justify='center' align={['flex-start','flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} color='highlight.100' fontWeight='500'>50</Heading>
        <Text fontWeight='600' fontSize={['md', 'xl']} color="dark.400">países</Text>
      </Flex>
      
      <Flex direction='column' justify='center' align={['flex-start','flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} color='highlight.100' fontWeight='500'>60</Heading>
        <Text fontWeight='600' fontSize={['md', 'xl']} color="dark.400">línguas</Text>
      </Flex>
      
      <Flex direction='column' justify='center' align={['flex-start','flex-start', 'center']}>
        <Heading fontSize={['2xl', '5xl']} color='highlight.100' fontWeight='500'>27</Heading>
        <Text fontWeight='600' fontSize={['md', 'xl']} color="dark.400">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon cursor='pointer' as={RiInformationLine} ml='1' color='dark.200' w={['10px', '16px']} h={['10px', '16px']}/>
              </span>
            </PopoverTrigger>
            <PopoverContent bg='dark.400' color='light.800'>
              <PopoverArrow bg='dark.400'/>
              <PopoverCloseButton/>
              <PopoverBody fontWidth='400' fontSize='lg'>
                Paris, Europa, Chile, Canadá, China
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>

    </Flex>
  )
}