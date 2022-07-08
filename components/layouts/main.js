import Head from 'next/head'
//import dynamic from 'next/dynamic'
import Navbar from './navbar'
import { Box, Container } from '@chakra-ui/react'





const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
     
        <title>Evan Meleady - Homepage</title>
      </Head>

      <Navbar path={router.asPath} />

      <Container maxW="container.md" pt={14}>
        

        {children}

        
      </Container>
    </Box>
  )
}

export default Main