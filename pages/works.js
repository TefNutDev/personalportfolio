import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/layouts/grid-item";
import Section from '../components/section';
import thumbRE from '../public/images/reT.png';
import thumbdfb from '../public/images/dfbsT.png';
import thumbweather from '../public/images/weatherT.png';
import thumbhorus from '../public/images/hrsT.png';
import Layout from "../components/layouts/article";

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id='realestate' title='Real Estate Web App' thumbnail={thumbRE}>
                        A Real Estate Rent & Sales App built with Next.js. Responsive on all devices.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='building' title='Home Renovation Landing Page' thumbnail={thumbdfb}>
                        Responsive, SEO Optimized, Landing Page for Small Construction Company.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='weather' title='City Weather App' thumbnail={thumbweather}>
                        Simple UI Weather App. Input any City around the World and see what the weather is like!
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='landing' title='Cryptocurrency DEX Landing Page' thumbnail={thumbhorus}>
                        Modern UI for start-up Cryptocurrency project. Responsive, SEO Optimized.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works
