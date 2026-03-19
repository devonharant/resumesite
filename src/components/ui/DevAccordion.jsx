import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import React from "react";

const DevAccordion = ({content, title}) => {
    return (
        <Accordion className="custom-accordion">
            <AccordionSummary 
              expandIcon={<ExpandMore className="accordion-icon" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className="accordion-summary" 
            >
                <Typography variant="h6" className="accordion-title">
                    {title || ''}
                </Typography>
            </AccordionSummary>
            
            <AccordionDetails className="accordion-details">        
                {content}
            </AccordionDetails>
        </Accordion>
    );
}

export default DevAccordion;