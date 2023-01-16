import { Image,Box, Container, Heading, Stack, Img, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import i1 from '../assets/1.jpg';
import  i2 from '../assets/2.jpg';
import  i3 from '../assets/3.jpg';
import i4 from  '../assets/4.jpg';
import  i5 from '../assets/5.png';


const Home=()=>{
    return(
        <Box>
            <MyCarousel />

            <Container minH={'100vh'} maxW={'container.xl'} p="16">
                <Heading textTransform={'uppercase'}
                py='2'
                w={'fit-content'}
                borderBottom={'2px solid'}
                margin={"auto"}>Services</Heading>
                
            
            <Stack
            
            h="full"
            p={"4"}
            alignItems={"center"}
            direction={['column','row']}  >
                <Image src={i5} filter={'hue-rotate(-130deg)'} h={['40','400']} m='auto' ></Image>

            
            <Text textAlign={'center'} letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']} >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, quibusdam distinctio dolorum corporis, suscipit voluptatibus
                 velit error incidunt in perferendis consequuntur adipisci hic magnam ducimus dicta, exercitationem beatae itaque reprehenderit!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia ipsa amet minus nam sunt, laudantium possimus
                 quasi, optio nostrum iste nulla cupiditate nesciunt, hic nisi voluptate numquam laboriosam commodi iure.
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ea odit magnam qui, facilis rerum laudantium, alias amet cum, suscipit veritatis. 
                 Quae perspiciatis ad quis repellendus reiciendis sit animi numquam.
            </Text>

            </Stack>
            </Container>
        </Box>
    );
}

export default Home;


const MyCarousel=()=>{
    return (
        // for slider crousel
        <Carousel autoPlay infiniteLoop interval={1000} showStatus={false}
        showThumbs={false} showArrows={false}>
            <Box w='full' h='100vh'>
                <Image src= {i1}></Image>
                
            </Box>

            <Box w='full' h='100vh'>
                <Image src= {i2}></Image>
                
            </Box>

            <Box w='full' h='100vh'>
                <Image src= {i3}></Image>
                
            </Box>

            <Box w='full' h='100vh'>
                <Image src= {i4}></Image>
                
            </Box>


            
            

          





        </Carousel>
    );
}