import React from "react";
import header from "../images/ega.png";
import gamecock from "../images/usc.png";
import deadhead from "../images/grateful-dead-steal-your-face.jpeg";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Audiotrack,
  AutoStories,
  SportsScore,
  SportsSoccer,
  Yard,
} from "@mui/icons-material";

const details = () => {
  return (
    <AccordionDetails className="accordion-details">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        <Typography textAlign="left">
          I am currently a Full Stack Software Engineer at Booz Allen Hamilton.
          I graduated from the University of South Carolina with a BS in
          Computer Science. As a software engineer at Booz Allen Hamilton, I
          utilize JavaScript, SQL, GraphQL, and various related frameworks and
          languages in a refactor effort of the modernization of an old J2EE
          application. Some interesting facts about me:
          <List
            style={{ flexDirection: "column", height: "100%", width: "100%" }}
          >
            <ListItem>
              <ListItemIcon sx={{ color: "#0F7A07" }}>
                <Yard />
                <ListItemText sx={{ paddingLeft: "8px", color: "black" }}>
                  I love plants and gardening
                </ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "#0F7A07" }}>
                <SportsScore />
                <ListItemText sx={{ paddingLeft: "8px", color: "black" }}>
                  I'm an avid Formula 1 (specifically McLaren) fan
                </ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "#0F7A07" }}>
                <AutoStories />
                <ListItemText sx={{ paddingLeft: "8px", color: "black" }}>
                  I love the Lord of the Rings and fantasy
                </ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "#0F7A07" }}>
                <Audiotrack />
                <ListItemText sx={{ paddingLeft: "8px", color: "black" }}>
                  I'm a dedicated Dead-Head
                </ListItemText>
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={{ color: "#0F7A07" }}>
                <SportsSoccer />
                <ListItemText sx={{ paddingLeft: "8px", color: "black" }}>
                  I look like Fábio Vieira
                </ListItemText>
              </ListItemIcon>
            </ListItem>
          </List>
        </Typography>
      </Box>
    </AccordionDetails>
  );
};

export default function AboutMe() {
  return (
    <>
      <Accordion className="custom-accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className="accordion-icon" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6" className="accordion-title">
            About Me
          </Typography>
        </AccordionSummary>
        {details()}
      </Accordion>
    </>
  );
}
