import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    VStack,
    HStack,
  } from '@chakra-ui/react'
  import {Link} from 'react-router-dom';
  import {BiMenuAltLeft} from 'react-icons/bi';

const Header=()=>{  

    const {isOpen,onOpen,onClose}=useDisclosure()

    return( <>
    <Button
    position={'fixed'}
    top={"2"}
    left={"4"}
    colorScheme="purple"
    p={"0"}
    w={"10"}
    h={"10"}
    borderRadius={"full"}
    onClick={onOpen}
    >
    <BiMenuAltLeft  size={"20px"}/>
    </Button>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader> Easy Coding</DrawerHeader>
            <DrawerBody>
                <VStack w={'full'} >
                <Button w={'full '} onClick={onClose} variant={'ghost'} colorScheme='purple'> <Link to={'java'}> Java </Link></Button>
                <Button w={'full '} onClick={onClose} variant={'ghost'} colorScheme='purple'> <Link to={'springboot'}>Spring Boot </Link></Button>
                <Button w={'full '} onClick={onClose} variant={'ghost'} colorScheme='purple'> <Link to={'angular'}>Angular </Link></Button>
                <Button w={'full '} onClick={onClose} variant={'ghost'} colorScheme='purple'> <Link to={'swing'}>Swing </Link></Button>
                <Button w={'full '} onClick={onClose} variant={'ghost'} colorScheme='purple'> <Link to={'awt'}>AWT </Link></Button>
                <Button w={'full '} onClick={onClose} variant={'ghost'} colorScheme='purple'> <Link to={'servlet'}>Servlet </Link></Button>
                <Button w={'full '} onClick={onClose} variant={'ghost'} colorScheme='purple'>  <Link to={'jsp'}>JSP </Link> </Button>
                <Button w={'full '} onClick={onClose} variant={'ghost'} colorScheme='purple'> <Link to={'bootstrap'}> Bootsrap </Link></Button>
                <Button w={'full '} onClick={onClose} variant={'ghost'} colorScheme='purple'>  <Link to={'react'}>React </Link></Button>
                </VStack>

                <HStack pos={"absolute"} bottom={'18'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
                    <Button onClick={onClose} colorScheme={'purple'} >
                        <Link >Log In</Link>
                    </Button>

                    <Button onClick={onClose} colorScheme={'purple'} variant={'outline'} >
                        <Link >Sign Up</Link>
                    </Button>
                </HStack>

            </DrawerBody>

        
        </DrawerContent>
    </Drawer>
    
    </>
)}
export default Header;