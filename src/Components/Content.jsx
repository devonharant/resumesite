import picture from '../mepicture.jpeg';
import Header from '../Components/Header';
import AboutMe from '../Components/AboutMe';
import Experience from '../Components/Experience';
import Projects from '../Components/Projects';
import { Box } from '@mui/material';
import Funnies from './Funnies';

export default function Content() {
    return(
    <>
        <Header/>
        <Box display="flex" flexDirection="row" style={{paddingLeft: '10px'}}>
            <Box display="flex">
                <img src={picture} alt="img" style={{height: 300, width: 300}}/>
            </Box>
            <Box display="flex" flexDirection="column" style={{paddingLeft: '10px', maxWidth: '80%'}}>
                <AboutMe/>
                <Experience/>
                <Projects/>
                <Funnies/>
            </Box>
        </Box>
    </>
    )
}