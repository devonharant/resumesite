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
        <Box display="flex" flexDirection="row" flexWrap="wrap">
            <Box display="flex" flexWrap="inherit">
                <img src={picture} alt="img" style={{paddingLeft: '10px', maxHeight: '300px'}}/>
            </Box>
            <Box display="flex" flexDirection="column" style={{paddingLeft: '10px', width: '80%'}} flexWrap="inherit">
                <AboutMe/>
                <Experience/>
                <Projects/>
                <Funnies/>
            </Box>
        </Box>
    </>
    )
}