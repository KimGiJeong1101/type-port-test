import React, { useState } from "react";
import TeamProject from "./TeamProject";
import ToyProject from "./ToyProject";
import { Box, Button, Grid, Typography } from "@mui/material";
import { frameBoxStyle, projectButtonStyle } from "../styles/ProjectStyles";

type ProjectCategory = "toy" | "team" | "";

const projectIndex: number[] = [1, 2, 3, 4, 5, 6]; // 프로젝트 틀을 늘리고 싶으면 이곳에 배열 추가

const ProjectFrame: React.FC = () => {
  const [projectType, setProjectType] = useState<ProjectCategory>(""); // "toy" or "team"
  const [isVisible, setIsVisible] = useState<boolean>(false); // 애니메이션 상태 관리

  const handleToyClick = () => {
    setProjectType("toy");
    setIsVisible(false); // 애니메이션을 시작하려면 먼저 false로 설정
    setTimeout(() => setIsVisible(true), 300); // 애니메이션 시작 (0.1초 후)
  };

  const handleTeamClick = () => {
    setProjectType("team");
    setIsVisible(false); // 애니메이션을 시작하려면 먼저 false로 설정
    setTimeout(() => setIsVisible(true), 300); // 애니메이션 시작 (0.1초 후)
  };

  return (
    <>
      <Box
        id="project"
        sx={{
          background: "#FFF8E1",
          display: "flex",
          justifyContent: "center", // 가로 중앙 정렬
          alignItems: "center", // 세로 중앙 정렬
        }}
      >
        <Typography
          variant="h2"
          sx={{
            margin: "12px",
            padding: "12px",
            height: "50px",
            fontFamily: "'Quicksand', sans-serif", // 구글 폰트
            fontSize: "4rem", // 보통 크기
            fontWeight: "bold", // 굵은 글씨
            color: "#202020", // 조금 더 부드러운 색
            textAlign: "center",
          }}
        >
          Project
        </Typography>
      </Box>
      <Box
        sx={{
          background: "#FFF8E1",
          display: "flex",
          justifyContent: "center", // 가로 중앙 정렬
          alignItems: "center", // 세로 중앙 정렬
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <Button
            sx={{
              ...projectButtonStyle,
              backgroundImage: "linear-gradient(to right, gray,white)",
            }}
            variant="outlined"
            onClick={handleTeamClick}
            style={{ marginRight: "4rem" }}
          >
            Team
          </Button>
          <Button
            sx={{
              ...projectButtonStyle,
              backgroundImage: "linear-gradient(to right, white,gray)",
            }}
            variant="outlined"
            onClick={handleToyClick}
          >
            Toy
          </Button>
        </div>
      </Box>

      <Grid
        container
        spacing={2} // 각 Box 사이의 간격
        sx={{
          background: "#FFF8E1",
          paddingTop: 2,
          height: { xs: "520vh", lg: "235vh" },
        }}
      >
        {projectIndex.map((project, index) => (
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                ...frameBoxStyle,
              }}
            >
              {projectType === "toy" && (
                <ToyProject
                  toyprojectId={project}
                  isVisible={isVisible} // 애니메이션 상태 전달
                />
              )}
              {projectType === "team" && (
                <TeamProject
                  teamprojectId={project}
                  isVisible={isVisible} // 애니메이션 상태 전달
                />
              )}
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ProjectFrame;
