import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Experience() {
  return (
    <Accordion className="custom-accordion">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon className="accordion-icon" />}
        aria-controls="experience-content"
        id="experience-header"
      >
        <Typography variant="h6" className="accordion-title">
          Experience
        </Typography>
      </AccordionSummary>

      <AccordionDetails className="accordion-details">
        <List>
          <ListItem
            sx={{ flexDirection: "column", alignItems: "flex-start", mb: 3 }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#0F7A07", fontWeight: "bold" }}
            >
              Booz Allen Hamilton - Full Stack Software Engineer
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              January 2022 - Present
            </Typography>
            <Typography variant="body2">
              - Member of a team led Agile refactor of a legacy J2EE application
              into a modern React SPA, improving application performance and
              maintainability.
            </Typography>
            <br />
            <Typography variant="body2">
              - Refactored several areas of a web application, reducing
              technical debt and improving performance, readability, and user
              experience.
            </Typography>
            <br />
            <Typography variant="body2">
              - Led refactors of reporting tools building custom APIs to produce
              PDF reports across the environment, improving application
              performance.
            </Typography>
            <br />
            <Typography variant="body2">
              - Helped implement and maintain CI/CD pipelines using GitHub,
              GitHub actions, and GitLab, reducing deployment efforts and
              increasing release reliability.
            </Typography>
          </ListItem>

          <ListItem
            sx={{ flexDirection: "column", alignItems: "flex-start", mb: 3 }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#0F7A07", fontWeight: "bold" }}
            >
              United States Marine Forces Reserve - LAR Marine/Gunner
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              August 2017 - September 2023
            </Typography>
            <Typography variant="body2">
              - Operate and maintain the LAV25 and its relevant documentation
            </Typography>
            <br />
            <Typography variant="body2">
              - Operate and maintain the turret system of the LAV25
            </Typography>
          </ListItem>

          <ListItem
            sx={{ flexDirection: "column", alignItems: "flex-start", mb: 3 }}
          >
            <Typography
              variant="subtitle1"
              sx={{ color: "#0F7A07", fontWeight: "bold" }}
            >
              The Home Depot - Paint Associate
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              June 2020 - August 2020
            </Typography>
            <Typography variant="body2">
              - Evaluate a customer's paint based needs and provide a
              corresponding product
            </Typography>
            <br />
            <Typography variant="body2">
              - Organize and restock the paint department across multiple aisles
            </Typography>
          </ListItem>

          <ListItem sx={{ flexDirection: "column", alignItems: "flex-start" }}>
            <Typography
              variant="subtitle1"
              sx={{ color: "#0F7A07", fontWeight: "bold" }}
            >
              Lowe's Hardware - Back-end Unloader
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "text.secondary", mb: 1 }}
            >
              June 2019 - August 2019
            </Typography>
            <Typography variant="body2">
              - Organize and distribute thousands of pieces of hardware
              materials
            </Typography>
            <br />
            <Typography variant="body2">
              - Utilize relevant equipment in support of offloading materials
            </Typography>
          </ListItem>
        </List>
      </AccordionDetails>
    </Accordion>
  );
}
