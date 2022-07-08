import { Container, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
///import { WorkGridItem } from '../components/layouts/grid-item'
///import thumbRE from '../public/images/reT.png'
import Image from 'next/image'

const Graphics = () => (
  <Layout title="graphics">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Custom Documents & Samples 
      </Heading>
      <Section delay={0.14}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <Section>
          <a href="../assets/LOCGuide.pdf" download="LOC_Guide">
              <Image src='/images/locT.png' alt='' width='745px' height='540px' className="py-2 px-2 m-auto rounded-full shadow-lg shadown-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"/>
          </a>
          <Text textAlign={'center'}>62 Page Technical & Fundamental Analysis Guide from 2017/8</Text>
          </Section>
          <Section>
          <a href="../assets/TAexamples.pdf" download="TA_Examples">
              <Image src='/images/TASamples.png' alt='' width='745px' height='540px' className="py-2 px-2 m-auto rounded-full shadow-lg shadown-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"/>
              
          </a>
          <Text textAlign={'center'}>Technical Analysis Collection of Old TA</Text>
          </Section>
          <Section>
          <a href="../assets/BELOBP.pdf" download="Business_Plan">
              <Image src='/images/beloT.png' alt='' width='745px' height='540px' className="py-2 px-2 m-auto rounded-full shadow-lg shadown-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"/>
          </a>
          <Text textAlign={'center'}>Business Plan Creation for Activewear Company</Text>
          </Section>
        </SimpleGrid>
      </Section>
      <Heading as='h4' fontSize={20} mb={4}>
        Custom Logos & Graphics
      </Heading>
      <Section delay={0.23}>
        <SimpleGrid columns={[1,2,2]} gap={6}>
          <Image src='/images/glow.png' alt='/' width='500' height='350' />
          <Image src='/images/HASHBROS.png' alt='/' width='500' height='350' />
          <Image src='/images/5rnjs.png' alt='/' width='500' height='350' />
          <Image src='/images/5rwp.png' alt='/' width='500' height='350' />
          <Image src='/images/Horus.png' alt='/' width='1000' height='350' />
          <Image src='/images/dfblogo.png' alt='/' width='500' height='350' />
          <Image src='/images/hrsl.png' alt='/' width='500' height='350' />
          <Image src='/images/evanlogo.png' alt='/' width='500' height='350' />
        </SimpleGrid>
      </Section>

    </Container>
  </Layout>
)

export default Graphics
