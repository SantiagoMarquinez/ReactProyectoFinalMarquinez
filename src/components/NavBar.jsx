import React from 'react';
import CartWidget from './CartWidget';
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image, Circle, Text } from '@chakra-ui/react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>

            <Flex className='navBar'>
                <Link to={'/'}>
                    <Box ml={8} mt={2} mb={2} >
                        <Image
                            borderRadius='full'
                            boxSize='45px'
                            src="./src/assets/images/logocuervo.png" alt="logocuervo"
                        />
                        <h6>Inicio</h6>
                    </Box>
                </Link>
                <Spacer />
                <Box mt={5} >
                    <Menu>
                        <MenuButton>
                            <Text fontSize='2xl'>
                                Categorias
                            </Text>
                        </MenuButton>
                        <div className='categorias'>
                            <MenuList backgroundColor='#ffffff'>
                                <MenuItem ><NavLink to='categoria/camisetas'> Camisetas</NavLink></MenuItem>
                                <MenuItem ><NavLink to='categoria/camperas'>Camperas</NavLink></MenuItem>
                                <MenuItem ><NavLink to='categoria/shorts'>Shorts</NavLink></MenuItem>
                                <MenuItem ><NavLink to='categoria/buzos'>Buzos</NavLink></MenuItem>
                            </MenuList>
                        </div>
                    </Menu>
                </Box>
                <Spacer />
                <Circle size='45px' bg='black' color='white' mr={8} mt={2}>
                    <CartWidget />
                </Circle>
            </Flex>


        </div>
    )
}

export default NavBar