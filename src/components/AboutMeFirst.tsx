import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";

const AboutMeFirst: React.FC = () => {
  return (
    <motion.div
      style={{
        background: "black",
        color: "black",
        textAlign: "center",
        fontSize: "clamp(30px, 5vw, 50px)",
        marginTop: "50px",
      }}
      initial={{ opacity: 0 }} // 초기 상태: 보이지 않음
      animate={{ opacity: 1 }} // 애니메이션 끝 상태: 보이게
      transition={{ duration: 3 }} // 애니메이션 지속 시간: 2초
    >
      <Box
        sx={{
          height: { xs: "95vh", sm: "90vh" }, // 부모 요소에 맞는 높이
          display: "flex",
          flexDirection: "column", // 수직 정렬
          justifyContent: "center",
          alignItems: "center",
          paddingTop: { xs: "20px", sm: "35px" },
          backgroundColor: "#f9f9f9", // 병합된 영역 배경색
        }}
      >
        <Box
          sx={{
            background: "black",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{ color: "#f9f9f9", fontSize: { xs: "25px", lg: "55px" } }}
            >
              안녕하세요.
            </Typography>
            <Typography
              sx={{ color: "#f9f9f9", fontSize: { xs: "30px", lg: "85px" } }}
            >
              신입개발자 김기정입니다.
            </Typography>
            <Typography
              sx={{
                color: "#f9f9f9",
                marginTop: { xs: "30px", lg: "35px" },
                fontSize: { xs: "14px", lg: "30px" },
              }}
            >
              꾸준히 배우고 도전하며, 함께 성장하는 개발자가 되어,
            </Typography>
            <Typography
              sx={{ color: "#f9f9f9", fontSize: { xs: "14px", lg: "30px" } }}
            >
              작은 성취를 모아 큰 변화를 만들어내고 싶습니다.
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

export default AboutMeFirst;
