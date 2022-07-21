import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { WorkGridItem } from "../components/layouts/grid-item";
import Section from '../components/section';
import thumbRE from '../public/images/reT.png';
import thumbdfb from '../public/images/dfbsT.png';
import thumbweather from '../public/images/weatherT.png';
import thumbhorus from '../public/images/hrsT.png';
import thumbT2D from '../public/images/T2DTLogo.png'
import Layout from "../components/layouts/article";
import thumbTHC from "../public/images/thcThumb.png"

const Works = () => {
    return (
        <Layout>
        <Container>
            <Heading as='h3' fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
            <Section>
                    <WorkGridItem id='thclanding' title='Cannabis Club Landing Page' thumbnail={thumbTHC}>
                        A Cannabis Social Club Landing Page built with Next.js & React Responsive on all devices. SEO Optimized, lazy loading images, contact feature, age verification.
                    </WorkGridItem>
                </Section>
            <Section>
                    <WorkGridItem id='wordpressStore' title='WordPress Mystery Box Store' thumbnail={thumbT2D}>
                        Wordpress Mystery Box Store selling Arts & Crafts and other hobby loving packages.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id='realestate' title='Real Estate Web App' thumbnail={thumbRE}>
                        A Real Estate Rent & Sales App built with Next.js & React. Responsive on all devices.
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
