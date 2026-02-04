import React from "react";
import {
  List,
  ListItem,
  Typography,
  Box
} from "@mui/material";
import DevAccordion from "./ui/DevAccordion";

const experiences = [
  {
    job: 'Booz Allen Hamilton - Full Stack Software Engineer',
    dates: 'January 2022 - Present',
    achievements: [
      `- Member of a team led Agile refactor of a legacy J2EE application
      into a modern React SPA, improving application performance and
      maintainability.`,
      `- Refactored several areas of a web application, reducing
      technical debt and improving performance, readability, and user
      experience.`,
      `- Led refactors of reporting tools building custom APIs to produce
      PDF reports across the environment, improving application
      performance.`,
      `- Helped implement and maintain CI/CD pipelines using GitHub,
      GitHub actions, and GitLab, reducing deployment efforts and
      increasing release reliability.`
    ]
  },
  {
    job: 'United States Marine Forces Reserve - LAR Marine/Gunner',
    dates: 'August 2017 - September 2023',
    achievements: [
      `- Operate and maintain the LAV25 and its relevant documentation`,
      `- Operate and maintain the turret system of the LAV25`
    ]
  },
  {
    job: 'The Home Depot - Paint Associate',
    dates: 'June 2020 - August 2020',
    achievements: [
      `- Evaluate a customer's paint based needs and provide a
      corresponding product`,
      `- Organize and restock the paint department across multiple aisles`,
    ]
  },
  {
    job: `Lowe's Hardware - Back-end Unloader`,
    dates: 'June 2019 - August 2019',
    achievements: [
      `- Organize and distribute thousands of pieces of hardware
      materials`,
      `- Utilize relevant equipment in support of offloading materials`,
    ]
  }
];

const buildAchievments = (achievments, expIndex) => {
 return achievments.map((achievement, achIndex) => (
<Box key={`ach-${expIndex}-${achIndex}`} sx={{ mb: 1 }}>
                <Typography variant="body2">
                  {achievement}
                </Typography>
              </Box>
 ))
}

const buildExperiences = () => {
  return experiences.map((experience, expIndex) => (
    <ListItem
      key={`experience-${expIndex}`}
      sx={{ 
        flexDirection: "column", 
        alignItems: "flex-start", 
        mb: 3 
      }}
    >
      <Typography
        variant="subtitle1"
        sx={{ color: "#0F7A07", fontWeight: "bold" }}
      >
        {experience.job}
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: "text.secondary", mb: 1 }}
      >
        {experience.dates}
      </Typography>

      {buildAchievments(experience.achievements, expIndex)}
    </ListItem>
  ))
}

export default function Experience() {
  const renderListContent = () => {
    return (
      <List>
        {buildExperiences()}
      </List>
    );
  };

  return (
    <DevAccordion 
      title="Experience" 
      content={renderListContent()} 
    />
  );
}