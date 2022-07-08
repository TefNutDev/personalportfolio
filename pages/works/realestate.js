import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/layouts/work';
import P from '../../components/layouts/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title='realestate'>
            <Container>
                <Title>
                    Expat Rentals <Badge>2022</Badge>
                </Title>
                <P>
                A Real Estate Rent & Sales App built with Next.js. Responsive on all devices.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://realestateapp-lilac.vercel.app'> Expat Rentals Site <ExternalLinkIcon mx='2px' /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/MacOS/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Node.js, Next.js, TailwindCSS, React, Javascript, HTML, CSS, Axios API</span>
                    </ListItem>

                </List>
                <WorkImage src='/images/works/refullsite.png' alt='realestateimg' />
            </Container>
        </Layout>
    )
}

export default Work