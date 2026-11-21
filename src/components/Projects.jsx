import React from "react";
import {
  Typography,
  List,
  ListItem,
} from "@mui/material";
import DevAccordion from "./ui/DevAccordion";

export default function Projects() {
  const projectURLs = [
    "https://github.com/SCCapstone/Koger",
    "https://github.com/devonharant/MART380FinalProject",
  ];

  const projects = [
    {
      name: "Personal Project - Minecraft Server Launcher",
      description:
        "I love Minecraft and got tired of using my old methods to run my servers. So, using Electron, Vite, and React, I built a desktop app that allows you to launch and manage a Minecraft server/servers effortlessly.",
      link: "https://github.com/devonharant/resumesite/releases/download/v1.0.0/minecraft-server-launcher.exe",
      linkLabel: "Download Windows Installer (.exe), I PROMISE this is safe to download and run",
    },
    {
      name: "Personal Project - Breaded (WIP)",
      description: `Using ReactNative, ExpoGo, Docker, node, and express, I built a
      mobile app that leverages a LLM hosted on a personal Raspberry Pi
      that provides budgeting insights and financial guidance in a chat
      window. In the future, this app will contain course work and goal
      tracking for users' financial goals.`,
    },
    {
      name: "Capstone Project - Koger Center for the Arts Mobile App",
      description: `Using JavaScript, TypeScript, Ionic, and Angular, a team and I built a mobile seat finding app for a local theater venue.`,
      link: projectURLs[0],
      linkLabel: "View on GitHub",
    },
    {
      name: "University Project - MART380 Final Project",
      description: `Using Unity and C#, I built a video game from scratch in a class called 'The New Media Art' in 2021.`,
      link: projectURLs[1],
      linkLabel: "View on GitHub",
    },
  ];

  const buildListItems = () => {
    return projects.map((project) => (
      <ListItem
        key={project.name}
        sx={{ flexDirection: "column", alignItems: "flex-start", mb: 2 }}
      >
        <Typography
          variant="subtitle1"
          sx={{ color: "#0F7A07", fontWeight: "bold" }}
        >
          {project.name}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {project.description}
        </Typography>
        {project.link && (
          <a
            href={project.link}
            download={project.isDownload ? "minecraft-server-launcher.exe" : undefined}
            target={project.isDownload ? undefined : "_blank"}
            rel={project.isDownload ? undefined : "noreferrer"}
            style={{ color: "#0F7A07", marginTop: "8px" }}
          >
            {project.linkLabel || "View on GitHub"}
          </a>
        )}
      </ListItem>
    ));
  };

  const content = () => {
    return <List>{buildListItems()}</List>;
  };

  return <DevAccordion title="Projects" content={content()} />;
}