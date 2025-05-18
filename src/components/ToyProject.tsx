import React from "react";
import { Box, Container, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import {
  OndemandVideo as VideoIcon,
  OpenInNew as OpenInNewIcon,
} from "@mui/icons-material";
import "../App.css";
import {
  toyAfterHover,
  titleStyle,
  imgStyle,
  iconBoxStyle,
  titleFontStyle,
  subtitleStyle,
  dateStyle,
  hrStyle,
  detailStyle,
  ulStyle,
  skillBoxStyle,
  skillTitleStyle,
  urlTitleStyle,
  skillDisplayStyle,
  skillValueStyle,
  anchorStyle,
} from "../styles/ProjectStyles";

import { ProjectType, ProjectProps } from "../types/ProjectType";
import toyProjeDataJson from "../jsondata/toyproject-data.json";

const toyProjeData: ProjectType[] = toyProjeDataJson;

const ToyProject: React.FC<ProjectProps> = ({ toyprojectId, isVisible }) => {
  // 공통 스타일을 객체로 정의
  const toyBoxStyle = {
    border: "solid white 2px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "200px",
    height: { xs: "80vh", lg: "70vh" },
    width: "100%",
    boxSizing: "border-box",
    opacity: isVisible ? 1 : 0,
    transition: "opacity 2s ease-in-out",
    borderRadius: "130px",
    overflow: "hidden",
    padding: 0,
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)",
    position: "relative", // 부모 Box에 relative 추가
    "&:hover": {
      background: "#FFFEFC", // 호버 시 박스의 배경색을 green으로 변경
    },
    "&:hover .hover-text": {
      opacity: 1, // 호버 시 텍스트가 보이도록 설정
    },
    "&:hover img": {
      opacity: 0.1, // 호버 시 이미지를 반투명하게 처리
    },
  };

  return (
    <Container disableGutters maxWidth="lg">
      {toyProjeData.map(
        (item, index) =>
          toyprojectId === item.id && (
            <Box
              sx={{
                ...toyBoxStyle,
              }}
            >
              <img
                src={`./images/${item.imgName}.png`}
                alt={item.imgName}
                style={{
                  ...imgStyle,
                }}
              />

              <Box
                className="hover-text"
                sx={{
                  ...toyAfterHover,
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                {/* 프로젝트 제목 및 아이콘 */}
                <Typography
                  sx={{
                    ...titleStyle,
                  }}
                >
                  {item.title}
                </Typography>

                {/* 프로젝트 간략 설명 */}
                <Typography
                  sx={{
                    ...titleFontStyle,
                  }}
                >
                  {item.subtitle}
                </Typography>

                {/* 프로젝트 기간 */}
                <Typography
                  sx={{
                    ...dateStyle,
                  }}
                >
                  {item.date}
                </Typography>

                {/* 경계선 */}
                <Box
                  sx={{
                    ...hrStyle,
                  }}
                />

                {/* 프로젝트 상세 설명 */}
                <Typography
                  sx={{
                    ...detailStyle,
                  }}
                >
                  <Typography
                    sx={{
                      ...subtitleStyle,
                    }}
                  >
                    {item.description}
                  </Typography>{" "}
                  <Box
                    component="ul"
                    sx={{
                      ...ulStyle,
                    }}
                  >
                    {item.details?.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </Box>
                </Typography>

                {/* 경계선 */}
                <Box
                  sx={{
                    ...hrStyle,
                  }}
                />

                {/* 기술 스택 및 URL */}
                <Box
                  sx={{
                    ...skillBoxStyle,
                  }}
                >
                  <Typography
                    sx={{
                      ...skillTitleStyle,
                    }}
                  >
                    기술{" "}
                    <Box
                      sx={{
                        ...skillDisplayStyle,
                      }}
                    >
                      {item.technologies?.map((technologie, index) => (
                        <Box
                          key={index}
                          sx={{
                            ...skillValueStyle,
                          }}
                        >
                          {technologie}
                        </Box>
                      ))}
                    </Box>
                  </Typography>

                  <Typography
                    sx={{
                      ...skillTitleStyle,
                      ...urlTitleStyle,
                    }}
                  >
                    URL
                    {item.giturls ? (
                      <a
                        href={item.giturls}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          ...anchorStyle,
                        }}
                      >
                        <Box
                          sx={{
                            ...iconBoxStyle,
                          }}
                        >
                          <GitHubIcon
                            sx={{ fontSize: { xs: 23, lg: 28 } }}
                          ></GitHubIcon>
                        </Box>
                      </a>
                    ) : null}
                    {item.videourls ? (
                      <a
                        href={item.videourls}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          ...anchorStyle,
                        }}
                      >
                        <Box
                          sx={{
                            ...iconBoxStyle,
                          }}
                        >
                          <VideoIcon
                            sx={{ fontSize: { xs: 23, lg: 28 } }}
                          ></VideoIcon>
                        </Box>
                      </a>
                    ) : null}
                    {item.pageurls ? (
                      <a
                        href={item.pageurls}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          ...anchorStyle,
                        }}
                      >
                        <Box
                          sx={{
                            ...iconBoxStyle,
                          }}
                        >
                          <OpenInNewIcon
                            sx={{ fontSize: { xs: 23, lg: 28 } }}
                          ></OpenInNewIcon>
                        </Box>
                      </a>
                    ) : null}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )
      )}
    </Container>
  );
};

export default ToyProject;
