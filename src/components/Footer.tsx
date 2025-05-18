import React from "react";
import { Box, Button, Container } from "@mui/material";
import { animateScroll as scroll } from "react-scroll";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const Footer: React.FC = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Box
        sx={{
          height: "80px",
          display: "flex", // Flexbox 사용
          justifyContent: "center", // 가로 중앙 정렬
          alignItems: "center", // 세로 중앙 정렬
        }}
      >
        <Button
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            scroll.scrollToTop({ duration: 800 }); // 800ms에 걸쳐 스크롤
          }}
          href="#"
        >
          <ArrowCircleUpIcon sx={{ fontSize: "42px", color: "#696969" }} />
        </Button>
      </Box>
    </Container>
  );
};

export default Footer;
