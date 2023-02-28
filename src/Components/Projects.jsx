import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, Typography, List, ListItem, ListSubheader, } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Projects(){
    const projectURL = 'https://github.com/SCCapstone/Koger';
    const mart380URL = 'https://github.com/devonharant/MART380FinalProject';

    return(
        <>
            <Accordion style={{border: "2px solid rgba(0,0,0,0.1)", width: '95%'}}>
                    <AccordionSummary 
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography style={{fontWeight: 'bold'}}>Projects</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                    <Typography textAlign="left">Projects I have worked on: </Typography>
                    <List >
                        <ListItem nested>
                            <List>
                                <ListSubheader style={{fontSize: 18}}>Capstone Project - Koger Center for the Arts Mobile App</ListSubheader> 
                                <ListItem>- Using JavaScript, TypeScript, Ionic, and Angular, a team and I built a mobile seat finding app 
                                    for a local theater venue on the University of South Carolina's campus that guides users to their seat when they give the app their ticket/seating information. 
                                </ListItem>
                                <ListItem>
                                    -<a href={projectURL}> Project link</a>
                                </ListItem>
                            </List>
                        </ListItem>
                        <ListItem nested>
                            <List>
                                <ListSubheader style={{fontSize: 18}}>MART380 Final Project</ListSubheader>
                                <ListItem>- In the Spring of 2021, I took a class called 'The New Media Art' which tasked us with a semester-long project to make a 2D scrolling video game from scratch. 
                                    This project was made using Unity 2019.4.18f1 as well as the free DOTween assets/plugins downloaded from the Unity In-Engine store. 
                                </ListItem>
                                <ListItem>
                                    -<a href={mart380URL}> Project link</a>
                                </ListItem>
                            </List>
                        </ListItem>
                    </List>
                    </AccordionDetails>
            </Accordion>
        </>
    )
}