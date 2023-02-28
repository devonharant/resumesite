import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonIncrement from "./ButtonIncrement";
import BoxColor from "./BoxColor";

export default function Funnies(){
    return (
        <>
            <Accordion style={{border: "2px solid rgba(0,0,0,0.1)"}}>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography style={{fontWeight: 'bold'}}>Funnies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography textAlign="left" style={{paddingBottom: '5px'}}>
                    Funny time
                    </Typography>
                    <Box display="flex" flexDirection="row" justifyContent="space-between">
                        <ButtonIncrement/>
                        <BoxColor/>
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>for the love of all that is good, don't click me</a>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    )
}