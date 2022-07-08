import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from '../../components/layouts/work';
import P from '../../components/layouts/paragraph';
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title='weather'>
            <Container>
                <Title>
                    Weather API APP <Badge>2022</Badge>
                </Title>
                <P>
                Simple UI Weather App. Input any City around the World and see what the weather is like!
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://weatherapp-nine-chi.vercel.app'> Weather APP <ExternalLinkIcon mx='2px' /></Link>
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
                <WorkImage src='/images/works/weather1.png' alt='weather1' />
                <WorkImage src='/images/works/weather2.png' alt='weather2' />
            </Container>
        </Layout>
    )
}

export default Work