import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Container } from "@mui/material";
import AboutMeFirst from "./AboutMeFirst";
import AboutMeLast from "./AboutMeLast";

const AboutMe: React.FC = () => {
  const [showLast, setShowLast] = useState<boolean>(false); // AboutMeLast 컴포넌트의 표시 여부 관리

  // AboutMeFirst가 애니메이션 후 AboutMeLast를 표시하도록 설정
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLast(true); // 6초 후 AboutMeLast 표시
    }, 3500); // AboutMeFirst의 애니메이션 종료 후

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container disableGutters maxWidth={false}>
      <Box
        id="about me"
        sx={{
          background: "#f9f9f9",
          height: "100vh",
          position: "relative",
        }}
      >
        {/* AboutMeFirst 컴포넌트 애니메이션 */}
        <motion.div
          style={{
            position: "absolute", // 두 컴포넌트가 겹치지 않도록 설정
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          initial={{ opacity: 1 }}
          animate={{ opacity: showLast ? 0 : 1 }} // showLast가 true일 때 AboutMeFirst가 사라짐
          transition={{ duration: 3 }}
        >
          <AboutMeFirst />
        </motion.div>

        {/* AboutMeLast가 애니메이션으로 나타남 */}
        {showLast && (
          <motion.div
            style={{
              position: "absolute", // AboutMeLast가 같은 자리에 위치하도록 설정
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <AboutMeLast />
          </motion.div>
        )}
      </Box>
    </Container>
  );
};

export default AboutMe;
