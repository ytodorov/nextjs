import { Container, Accordion, AccordionSummary, Typography, AccordionDetails } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router'
import MyArrowButtons from '../../../src/myArrowButtons';
import MyBreadcrumb from '../../../src/myBreadcrumb';
import MyMenu from '../../../src/myMenu';
import MyQuestionText from '../../../src/myQuestionText';
import jsonData from '../../../json/ai900.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Post = () => {
    const router = useRouter()
    const { question } = router.query

    return (
        <Container>
            {/* <MyMenu /> */}
            <MyBreadcrumb message="test 2"></MyBreadcrumb>
            <Link target='_blank' href='/microsoft/az-900/ques2' rel="noopener noreferrer" title='test title' >{jsonData.items[0].title}</Link>
            <MyArrowButtons />
            {/* <Accordion expanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>Question</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <Typography>
                        <MyQuestionText rawText={jsonData.items[0].title} />
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography>Answer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion disabled>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                >
                    <Typography>Disabled Accordion</Typography>
                </AccordionSummary>
            </Accordion> */}
        </Container>
    );
}

export default Post