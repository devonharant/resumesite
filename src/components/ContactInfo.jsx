import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";
import DevAccordion from "./ui/DevAccordion";

export default function ContactInfo() {

  const content = () => {
    return (<Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      flexWrap="wrap"
    >
      Feel free to reach out to me via email or phone (preferably email)! I usually won't answer my phone on the first ring if I don't know the number, but please do leave a message!
      <Typography>
        Email: <a href="mailto:devharant@gmail.com">devharant@gmail.com</a>
      </Typography>
      <Typography>
        Phone: <a href="tel:(843) 343-5239">(843) 343-5239</a>
      </Typography>
      <a
        href={`${import.meta.env.BASE_URL}/documents/resume.pdf`}
        download="Devon Harant Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        My Resume
      </a>
    </Box>
  );
};

return <DevAccordion title="Contact Info" content={content()} />;
}
