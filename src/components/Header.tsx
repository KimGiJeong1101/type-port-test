import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from "react";
import { Accordion, AccordionSummary } from "@mui/material";

const pages: string[] = ["About Me", "Skill", "Project", "Career"];

const Header: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleToggleAccordion = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsExpanded(false);
  };

  return (
    <AppBar position="fixed" sx={{ background: "black", opacity: "0.8" }}>
      <Container maxWidth="lg" sx={{ padding: 0 }}>
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scroll.scrollToTop({ duration: 800 });
            }}
            sx={{
              mr: 2,
              display: "flex",
              fontWeight: 600,
              letterSpacing: ".0rem",
              color: "inherit",
              textDecoration: "none",
              justifyContent: "flex-start",
            }}
          >
            KGJ's PortFolio
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleToggleAccordion}
              color="inherit"
            >
              <MenuIcon sx={{ fontSize: "42px", color: "white" }} />
            </IconButton>

            <Accordion
              expanded={isExpanded}
              sx={{
                margin: 0,
                padding: 0,
                position: "absolute",
                top: "100%",
                left: 0,
                width: "100%",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                background: "#111111",
              }}
            >
              <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ display: "none" }}
              />
              {pages.map((page) => (
                <Link
                  key={page}
                  to={page.toLowerCase()}
                  spy={true}
                  onClick={handleLinkClick}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  style={{
                    textAlign: "center",
                    cursor: "pointer",
                    color: "#eeeeee",
                  }}
                >
                  <Typography sx={{ padding: "10px 0" }}>{page}</Typography>
                  <hr
                    style={{
                      border: "0.5px solid #eeeeee",
                      width: "100%",
                      margin: "0 auto",
                    }}
                  />
                </Link>
              ))}
            </Accordion>
          </Box>
          <Box
            sx={{
              justifyContent: "flex-end",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Link
                key={page}
                to={page.toLowerCase()}
                spy={true}
                smooth={true}
                duration={800}
                offset={-80}
                style={{
                  margin: "0 10px",
                  color: "white",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                {page}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
