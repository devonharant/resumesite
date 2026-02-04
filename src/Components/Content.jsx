import picture from "../images/me.jpg";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Funnies from "./Funnies";
import { Box, Typography, Container } from "@mui/material";

export default function Content() {
  return (
    <Container maxWidth="lg">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          sx={{
            textAlign: "center",
            paddingBottom: "3rem",
            color: "#FFFFFF",
            fontWeight: "bold",
          }}
          variant="h3"
        >
          Devon Harant
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="flex-start"
          gap={4}
          sx={{ width: "100%" }}
        >
          <Box
            sx={{
              border: "4px solid #FFFFFF",
              borderRadius: "8px",
              overflow: "hidden",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={picture}
              alt="Devon Harant"
              style={{ display: "block", maxHeight: "400px", width: "auto" }}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            sx={{
              width: { xs: "100%", md: "60%" },
              gap: 2,
            }}
          >
            <AboutMe />
            <Experience />
            <Projects />
            <Funnies />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
