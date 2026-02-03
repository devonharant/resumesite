import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  List,
  ListItem,
  ListSubheader,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Projects() {
  const projectURL = "https://github.com/SCCapstone/Koger";
  const mart380URL = "https://github.com/devonharant/MART380FinalProject";

  return (
    <Accordion className="custom-accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="accordion-icon" />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h6" className="accordion-title">
          Projects
        </Typography>
      </AccordionSummary>

      <AccordionDetails className="accordion-details">
        <List>
          <ListItem
            sx={{ flexDirection: "column", alignItems: "flex-start", mb: 2 }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#0F7A07", fontWeight: "bold" }}
            >
              Personal Project - Breaded (WIP)
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Using ReactNative, ExpoGo, Docker, node, and express, I built a
              mobile app that leverages a LLM hosted on a personal Raspberry Pi
              that provides budgeting insights and financial guidance in a chat
              window. In the future, this app will contain course work and goal
              tracking for users' financial goals.
            </Typography>
          </ListItem>

          <ListItem
            sx={{ flexDirection: "column", alignItems: "flex-start", mb: 2 }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#0F7A07", fontWeight: "bold" }}
            >
              Capstone Project - Koger Center for the Arts Mobile App
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Using JavaScript, TypeScript, Ionic, and Angular, a team and I
              built a mobile seat finding app for a local theater venue.
            </Typography>
            <a
              href={projectURL}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#0F7A07", marginTop: "8px" }}
            >
              View on GitHub
            </a>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#0F7A07", fontWeight: "bold" }}
            >
              MART380 Final Project
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Using Unity and C#, I built a video game from scratch in a class
              called 'The New Media Art' in 2021.
            </Typography>
            <a
              href={mart380URL}
              target="_blank"
              rel="noreferrer"
              style={{ color: "#0F7A07", marginTop: "8px" }}
            >
              View on GitHub
            </a>
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
