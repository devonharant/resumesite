import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Audiotrack,
  AutoStories,
  SportsScore,
  SportsSoccer,
  Yard,
} from "@mui/icons-material";
import DevAccordion from "./ui/DevAccordion";

const items = [
  {
    icon: (<Yard />), fact: 'I love plants and gardening'
  },
  {
icon: (<SportsScore />), fact: 'I am an avid Formula 1 fan, specifically McLaren'
  },
  {
icon:(<AutoStories />), fact: 'I love fantasy, especially the Lord of the Rings'
  },
  {
icon: (<Audiotrack />), fact: 'I am a dedicated Dead Head'
  },
  {
    icon: (<SportsSoccer />), fact: 'I look like Fábio Vieira'
  },
]

const buildListItems = () => {
  return items.map((item) => {
    return (<ListItem>
      <ListItemIcon sx={{ color: "#0F7A07" }}>
        {item.icon}
        <ListItemText sx={{ paddingLeft: "8px", color: "black" }}>
          {item.fact}
        </ListItemText>
      </ListItemIcon>
    </ListItem>)
  })
}

const details = () => {
  return (
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
          utilize JavaScript, React, SQL, GraphQL, and various related frameworks and
          languages in a refactor effort of the modernization of an old J2EE
          application. Some interesting facts about me:
          <List
            style={{ flexDirection: "column", height: "100%", width: "100%" }}
          >
            {buildListItems()}
          </List>
        </Typography>
      </Box>
  );
};


export default function AboutMe() {
  return (
    <DevAccordion content={details()} title="About Me"/>
  );
}
