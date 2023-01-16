import { Box, Heading, HStack, Stack, VStack,Button, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSend} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p='6' color={"white"}>
        <Stack direction={['column','row']}>
            <VStack alignItems={'stretch'} px='2' w="full">
                <Heading size={"md"} textAlign="center"> Subsribe to get update</Heading>
            

            <HStack borderBottom={"2px solid white"} py="2">
                <Input placeholder='enter email'
                        border={'none'}
                        borderRadius={'none'}
                        outline={'none'}
                        focusBorderColor='none'
                />
                <Button p="0" colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                    <AiOutlineSend />
                </Button>
            </HStack>

            </VStack>
            <VStack w='full' borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
                <Heading textTransform={'uppercase'}
                textAlign={'center'}> Video Hub</Heading>
                <Text>All Right Received</Text>

            </VStack>



            
            <VStack w='full'>
                <Heading size={'md'} textTransform={"uppercase"}> social Media</Heading>
                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <Link target={'blank'} to={"/"}>Youtube</Link>
                    </Button>

                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <Link to={"/"} target={'blank'}>Instagram</Link>
                    </Button>

                    <Button variant={'link'} colorScheme={'whiteAlpha'}>
                        <Link to={"/"} target={'blank'}>Linkedin</Link>
                    </Button>


            </VStack>

        </Stack>

    </Box>
  )
}
