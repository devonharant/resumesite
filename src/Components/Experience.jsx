import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, List, ListItem, ListSubheader, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Experience() {
    return (
        <>
            <Accordion style={{border: "2px solid rgba(0,0,0,0.1)"}}>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography style={{fontWeight: 'bold'}}>Experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography textAlign="left">I have experience from the following occupations: </Typography>
                    <List >
                    <ListItem nested>
                            <List>
                                <ListSubheader style={{fontSize: 18, fontWeight: 'bold'}}>Booz Allen Hamilton - Software Engineer, Consultant</ListSubheader> 
                                <ListItem>January 2022 - Now</ListItem>
                                <ListItem>- Utilize Full-Stack tech and related languages to support the software development of projects across the firm</ListItem>
                            </List>
                        </ListItem>
                        <ListItem nested>
                            <List>
                                <ListSubheader style={{fontSize: 18, fontWeight: 'bold'}}>United States Marine Forces Reserve - Columbia, SC - LAR Marine/Gunner</ListSubheader> 
                                <ListItem>August 2017 - Now</ListItem>
                                <ListItem>- Operate and maintain the LAV25 and its relevant documentation</ListItem>
                                <ListItem>- Operate and maintain the turret system of the LAV25</ListItem>
                            </List>
                        </ListItem>
                        <ListItem nested>
                            <List>
                                <ListSubheader style={{fontSize: 18, fontWeight: 'bold'}}>The Home Depot - Mount Pleasant, SC - Paint Associate</ListSubheader>
                                <ListItem>June 2020 - August 2020</ListItem>
                                <ListItem>- Evaluate a customer's paint based needs and provide a corresponding product and color based on their needs</ListItem>
                                <ListItem>- Organize and restock the paint department across multiple aisles</ListItem>
                            </List>
                        </ListItem>
                        <ListItem nested>
                            <List>
                                <ListSubheader style={{fontSize: 18, fontWeight: 'bold'}}>Lowe's Hardware - Mount Pleasant, SC - Back-end Unloader</ListSubheader>
                                <ListItem>June 2019 - August 2019</ListItem>
                                <ListItem>- Organize and distribute thousands of pieces of hardware materials and stock from truck to floor</ListItem>
                                <ListItem>- Utilize relevant equipment in support of offloading said materials and stock</ListItem>
                            </List>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </>
    )
}