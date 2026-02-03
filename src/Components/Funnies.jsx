import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ButtonIncrement from "./ButtonIncrement";
import BoxColor from "./BoxColor";

export default function Funnies() {
  return (
    <>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="accordion-icon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="accordion-title">
            Funnies
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-details">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <ButtonIncrement />
            <BoxColor />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              for the love of all that is good, don't click me
            </a>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  );
}
