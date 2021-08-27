import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'


function Header() {
    return (
        <Flex align='center' justify='space-between' borderBottom='2px solid black' boxShadow="xl" bg='#333'>
            <Image src="https://media-exp1.licdn.com/dms/image/C4E0BAQG4TVYYasY1oA/company-logo_200_200/0/1539053140310?e=1638403200&v=beta&t=-1T6vNe9AhfFJdWCh2ehXYB2qIxO_PQMhwlVAX3NdSI" borderRadius='full' boxSize="100px" p="2"
                objectFit="contain" alt="Kalvo logo" />
            <Heading size='lg' color='#EBEBEB'> Kalvi Fun Learning</Heading>
            <Box />
        </Flex>
    )
}

export default Header