import {
  Container,
  Box,
  Button,
  Heading,
  Image,
  useColorModeValue,
  List,
  ListItem,
  Link,
  Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/layouts/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/layouts/bio'
import Layout from '../components/layouts/article'
import { motion } from 'framer-motion'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoMail,
  IoLogoLinkedin
} from 'react-icons/io5'
//import { GridItem } from '../components/layouts/grid-item'
import { CgToolbox } from 'react-icons/cg'

const Page = () => (
  <Layout>
    <Container>
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1.3, 1.2, 1],
            rotate: [0, 10, -10, 10, 0],
            borderRadius: ['20%', '20%', '50%', '50%', '20%']
          }}
        >
          <Image
            maxWidth="370px"
            display="inline-block"
            src="/images/bluepc.png"
            alt="pcblue"
          />
        </motion.div>
      </Box>
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hello, I&apos;m a Front-End Web developer based in Europe!
        <br />
        <Icon as={CgToolbox} width={10} height={7} />
        <br />
        Javascript | HTML & CSS | React | Next.js
      </Box>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Evan Meleady
          </Heading>
          <p>
            Developing & Building Beautiful Websites | Creating Professional
            Graphic Designs | Marketing Your Business On The Web!
          </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/myself.jpeg"
            alt="Profile Image"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          I am freelance developer with a huge passion & interest in Front End
          Development. I enjoy problem solving and creating the best solutions
          for my clients. A Jack of All Trades in the freelancing space, most
          notably include; Website Development, Marketing, Graphic Design,
          Content Creation and SEO Optimization. My most used framework is
          Next.js, accompanied by HTML, CSS & Javascript. I am also an avid
          believer in the future of Cryptocurrency and have been involved in the
          space since 2017. With my spare time I am currently expanding my
          knowledge of Solidity and Rust programming languages. Currently based
          in Valencia, Spain and always open to finding new clients from around
          the world.{' '}
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Get In Touch
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/tefnutdev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoGithub} />}
              >
                @TefNutDev
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link
              href="https://www.linkedin.com/in/evan-meleady-95079423a/"
              target="_blank"
            >
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoLinkedin} />}
              >
                LinkedIn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="mailto: evanmeleady@gmail.com">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoMail} />}
              >
                evanmeleady@gmail.com
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://twitter.com/tefnutdev" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                @TefNutDev
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1996</BioYear>
          Born in Dublin, Ireland.
        </BioSection>
        <BioSection>
          <BioYear>2014</BioYear>
          Began studies in Computer Science & IT at NUI Galway, followed by
          Mobile, Multimedia & Web Development in NUI Maynooth
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Set up and Ran Cryptocurrency Trading & Mentor Group. Content
          Creation, Marketing, Learning Resource Creation and Community
          Management were key areas for our success. Peaking at 400+ subscribed
          members, 40k followers and a strong profit record. Unfortunately one
          of the partners witheld funds & isolated each of us from the company.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          Worked at Midair Ventilation LTD as Supervisor & Office Admin
          (Document Creation, Graphic Design, Safety Statements)
        </BioSection>
        <BioSection>
          <BioYear>2021 - Present</BioYear>
          Moved to Valencia, Spain with my partner. Fully committed to Freelance
          Web Development & providing quality serices to help all kinds of
          businesses grow!
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Interests
        </Heading>
        <Paragraph>
          Mixed Martial Arts, Puzzles, Football, Training, Traveling, Cooking,
          Cryptocurrency, Dogs & Golf.
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Page
