import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/layouts/work';
import P from '../../components/layouts/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title='store'>
            <Container>
                <Title>
                    Things2DoTogether <Badge>2022</Badge>
                </Title>
                <P>
                Responsive, SEO Optimized, Store built with Elementor & Wordpress. Fully functional, checkout, cart recovery, contact forms etc.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://things2dotogether.com'> things2dotogether.com <ExternalLinkIcon mx='2px' /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/MacOS/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Wordpress, Elementor, UI Design, Javascript, HTML, CSS</span>
                    </ListItem>

                </List>
                <WorkImage src='/images/works/T2DTFullHome.png' alt='T2DT' />
            </Container>
        </Layout>
    )
}

export default Work