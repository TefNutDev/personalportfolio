import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/layouts/work';
import P from '../../components/layouts/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title='building'>
            <Container>
                <Title>
                    DF Building Services <Badge>2022</Badge>
                </Title>
                <P>
                Responsive, SEO Optimized, Landing Page for Small Construction Company.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://dfbuildingservices.vercel.app'> dfbuildingservices.vercel.app <ExternalLinkIcon mx='2px' /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/MacOS/iOS/Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Node.js, Next.js, TailwindCSS, React, Javascript, HTML, CSS</span>
                    </ListItem>

                </List>
                <WorkImage src='/images/works/dfbfullsite.png' alt='DFB' />
            </Container>
        </Layout>
    )
}

export default Work