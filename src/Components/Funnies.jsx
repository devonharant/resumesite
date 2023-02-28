import React from "react";
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ButtonIncrement from "./ButtonIncrement";
import BoxColor from "./BoxColor";

export default function Funnies(){
    return (
        <>
            <Accordion style={{border: "2px solid rgba(0,0,0,0.1)", width: '95%'}}>
                <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography style={{fontWeight: 'bold'}}>Funnies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
                        <ButtonIncrement/>
                        <BoxColor/>
                        <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>for the love of all that is good, don't click me</a>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    )
}