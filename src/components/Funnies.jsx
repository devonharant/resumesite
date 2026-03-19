import React from "react";
import {
  Box,
} from "@mui/material";
import ButtonIncrement from "./ButtonIncrement";
import BoxColor from "./BoxColor";
import DevAccordion from "./ui/DevAccordion";

export default function Funnies() {

  const content = () => {
    return (<Box
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
    </Box>)
  }

  return (
      <DevAccordion title="Fun Stuff" content={content()}/>
  );
}
