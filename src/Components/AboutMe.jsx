import React from "react";
import header from '../header.jpeg';
import gamecock from '../usc.png';
import deadhead from '../syf.png';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AboutMe() {
    return (
        <>
            <Accordion style={{border: "2px solid rgba(0,0,0,0.1)"}}>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography style={{fontWeight: 'bold'}}>About Me</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" style={{paddingBottom: '20px'}}>
                        <img src={gamecock} alt="cocky" style={{height: 100}}/>
                        <img src={header} alt="head" style={{height: 100}}/>
                        <img src={deadhead} alt="syf" style={{height: 100}}/>
                    </Box>
                    <Typography textAlign="left">
                    I am currently a Software Engineer, Consultant at Booz Allen Hamilton. 
                    I graduated from the University of South Carolina with a BS in Computer Science. 
                    I am also a reservist in the Marine Corps as a Light Armored Vehicle Marine. 
                    As a software engineer at Booz Allen Hamilton, I am a full-stack engineer utilizing JavaScript, SQL, and various related frameworks and languages. 
                    As a Marine, I am responsible for operating and maintaining the turret system of the LAV25.
                    Some fun facts about me, I collect vinyl, Legos, and am an avid Dead Head!
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}