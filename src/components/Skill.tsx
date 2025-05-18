import React from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  skillCategoryStyle,
  skillCategoryBoxStyle,
  skillBoxTopStyle,
  skillBoxBottomStyle,
  skillImgStyle,
  imgSize,
  skillAfterHover,
  hoverFontStyle,
} from "../styles/SkillStyle";

import { SkillType } from "../types/SkillType";

import toolDataJson from "../jsondata/developtool-data.json";
import frontendDataJson from "../jsondata/frontendskill-data.json";
import backendDataJson from "../jsondata/backendskill-data.json";
import databaseDataJson from "../jsondata/databaseskill-data.json";

const toolData: SkillType[] = toolDataJson;
const frontendData: SkillType[] = frontendDataJson;
const backendData: SkillType[] = backendDataJson;
const databaseData: SkillType[] = databaseDataJson;

const Skill: React.FC = () => {
  return (
    <Box
      id="skill"
      sx={{
        width: "100%", // 화면 전체 너비
        height: { xs: "130vh", lg: "100vh" },
        display: "flex",
        flexDirection: "column",
        marginTop: { xs: 6, lg: 0 },
        paddingBottom: 4,
        background: "#3E2723",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          margin: "12px",
          padding: "12px",
          height: "80px",
          fontFamily: "'Quicksand', sans-serif", // 구글 폰트
          fontSize: "4rem", // 보통 크기
          fontWeight: "bold", // 굵은 글씨
          color: "#F9F9F9", // 조금 더 부드러운 색
          textAlign: "center",
        }}
      >
        Skill
      </Typography>
      {/* 상단 영역 */}
      {/* Developer Tools영역 */}
      <Box
        sx={{
          ...skillCategoryBoxStyle,
          margin: 2,
        }}
      >
        {/* 상단 위 영역 */}
        <Box
          sx={{
            ...skillBoxTopStyle,
          }}
        >
          <Typography
            sx={{
              ...skillCategoryStyle,
            }}
          >
            Developer Tools
          </Typography>
        </Box>

        {/* 상단 아래 영역 */}
        <Box
          sx={{
            ...skillBoxBottomStyle,
            flex: 3, // 3 비율
            flexWrap: "wrap", // 줄바꿈을 허용
          }}
        >
          {/* Developer Tools영역 */}

          {toolData.map((item, index) => (
            <React.Fragment key={item.id}>
              {/* 이미지와 텍스트 */}
              <Box
                sx={{
                  ...skillImgStyle,
                }}
              >
                <img
                  src={`./images/${item.imgName}.png`}
                  alt={item.imgName}
                  style={{
                    ...imgSize,
                  }}
                />
                <Box
                  className="hover-text"
                  sx={{
                    ...skillAfterHover,
                  }}
                >
                  <Typography
                    sx={{
                      ...hoverFontStyle,
                      fontSize: item.firstTextFont, // 글자 크기
                    }}
                  >
                    {item.firstText}
                  </Typography>

                  {item.textCount >= 2 && (
                    <Typography
                      sx={{
                        ...hoverFontStyle,
                        fontSize: item.secondTextFont, // 글자 크기
                      }}
                    >
                      {item.secondText}
                    </Typography>
                  )}

                  {item.textCount === 3 && (
                    <Typography
                      sx={{
                        ...hoverFontStyle,
                        fontSize: item.thirdTextFont, // 글자 크기
                      }}
                    >
                      {item.thirdText}
                    </Typography>
                  )}
                </Box>
              </Box>

              {/* 줄바꿈 영역 추가 */}
              {(index + 1) % 4 === 0 && index !== toolData.length - 1 && (
                <Box
                  sx={{
                    height: "16px",
                    display: "block",
                    flex: "0 0 100%",
                    margin: "-10px",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>

      {/* Developer Tools영역 끝 */}

      {/* 하단 영역 */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" }, // 모바일: 세로, 데스크톱: 가로
          padding: 1,
        }}
      >
        {/* 하단 1 영역 */}
        {/* FrontEnd 영역 */}
        <Box
          sx={{
            ...skillCategoryBoxStyle,
            width: "100%", // 모바일에서 너비 100%
            margin: { xs: 0, lg: 1 },
            marginTop: { xs: 1, lg: 0 },
          }}
        >
          {/* 하단 1 위 영역 */}
          <Box
            sx={{
              ...skillBoxTopStyle,
            }}
          >
            <Typography
              sx={{
                ...skillCategoryStyle,
              }}
            >
              FrontEnd
            </Typography>
          </Box>

          {/* 하단 1 아래 영역 */}
          <Box
            sx={{
              ...skillBoxBottomStyle,
              flex: 3, // 3 비율
              flexWrap: "wrap",
            }}
          >
            {/* FrontEnd Tools영역 */}

            {frontendData.map((item, index) => (
              <React.Fragment key={item.id}>
                {/* 이미지와 텍스트 */}
                <Box
                  sx={{
                    ...skillImgStyle,
                  }}
                >
                  <img
                    src={`./images/${item.imgName}.png`}
                    alt={item.imgName}
                    style={{
                      ...imgSize,
                    }}
                  />
                  <Box
                    className="hover-text"
                    sx={{
                      ...skillAfterHover,
                    }}
                  >
                    <Typography
                      sx={{
                        ...hoverFontStyle,
                        fontSize: item.firstTextFont, // 글자 크기
                      }}
                    >
                      {item.firstText}
                    </Typography>

                    {item.textCount >= 2 && (
                      <Typography
                        sx={{
                          ...hoverFontStyle,
                          fontSize: item.secondTextFont, // 글자 크기
                        }}
                      >
                        {item.secondText}
                      </Typography>
                    )}

                    {item.textCount === 3 && (
                      <Typography
                        sx={{
                          ...hoverFontStyle,
                          fontSize: item.thirdTextFont, // 글자 크기
                        }}
                      >
                        {item.thirdText}
                      </Typography>
                    )}
                  </Box>
                </Box>

                {/* 줄바꿈 영역 추가 */}
                {(index + 1) % 4 === 0 && index !== frontendData.length - 1 && (
                  <Box
                    sx={{
                      height: "16px",
                      display: "block",
                      flex: "0 0 100%",
                      margin: "-10px",
                    }}
                  />
                )}
              </React.Fragment>
            ))}
          </Box>
        </Box>

        {/* FrontEnd Tools영역 끝 */}

        {/* FrontEnd 영역 끝 */}

        {/* 하단 2 영역 */}
        {/* BackEnd 영역 */}
        <Box
          sx={{
            ...skillCategoryBoxStyle,
            width: "100%", // 모바일에서 너비 100%
            margin: { xs: 0, lg: 1 },
            marginTop: { xs: 1, lg: 0 },
          }}
        >
          {/* 하단 2 위 영역 */}
          <Box
            sx={{
              ...skillBoxTopStyle,
            }}
          >
            <Typography
              sx={{
                ...skillCategoryStyle,
              }}
            >
              BackEnd
            </Typography>
          </Box>

          {/* 하단 2 아래 영역 */}
          <Box
            sx={{
              ...skillBoxBottomStyle,
              flex: 3, // 3 비율
            }}
          >
            {backendData.map((item, index) => (
              <Box
                sx={{
                  ...skillImgStyle,
                }}
              >
                <img
                  src={`./images/${item.imgName}.png`}
                  alt={item.imgName}
                  style={{
                    ...imgSize,
                  }}
                />
                <Box
                  className="hover-text"
                  sx={{
                    ...skillAfterHover,
                  }}
                >
                  <Typography
                    sx={{
                      ...hoverFontStyle,
                      fontSize: item.firstTextFont, // 글자 크기
                    }}
                  >
                    {item.firstText}
                  </Typography>

                  {item.textCount >= 2 && (
                    <Typography
                      sx={{
                        ...hoverFontStyle,
                        fontSize: item.secondTextFont, // 글자 크기
                      }}
                    >
                      {item.secondText}
                    </Typography>
                  )}

                  {item.textCount === 3 && (
                    <Typography
                      sx={{
                        ...hoverFontStyle,
                        fontSize: item.thirdTextFont, // 글자 크기
                      }}
                    >
                      {item.thirdText}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* BackEnd 영역 끝 */}

        {/* 하단 3 영역 */}
        {/* DataBase 영역 */}
        <Box
          sx={{
            ...skillCategoryBoxStyle,
            width: "100%", // 모바일에서 너비 100%
            margin: { xs: 0, lg: 1 },
            marginTop: { xs: 1, lg: 0 },
          }}
        >
          {/* 하단 3 위 영역 */}
          <Box
            sx={{
              ...skillBoxTopStyle,
            }}
          >
            <Typography
              sx={{
                ...skillCategoryStyle,
              }}
            >
              DataBase
            </Typography>
          </Box>

          {/* 하단 3 아래 영역 */}
          <Box
            sx={{
              ...skillBoxBottomStyle,
              flex: 3, // 3 비율
            }}
          >
            {databaseData.map((item, index) => (
              <Box
                sx={{
                  ...skillImgStyle,
                }}
              >
                <img
                  src={`./images/${item.imgName}.png`}
                  alt={item.imgName}
                  style={{
                    ...imgSize,
                  }}
                />
                <Box
                  className="hover-text"
                  sx={{
                    ...skillAfterHover,
                  }}
                >
                  <Typography
                    sx={{
                      ...hoverFontStyle,
                      fontSize: item.firstTextFont, // 글자 크기
                    }}
                  >
                    {item.firstText}
                  </Typography>

                  {item.textCount >= 2 && (
                    <Typography
                      sx={{
                        ...hoverFontStyle,
                        fontSize: item.secondTextFont, // 글자 크기
                      }}
                    >
                      {item.secondText}
                    </Typography>
                  )}

                  {item.textCount === 3 && (
                    <Typography
                      sx={{
                        ...hoverFontStyle,
                        fontSize: item.thirdTextFont, // 글자 크기
                      }}
                    >
                      {item.thirdText}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* DataBase 영역 끝 */}
      </Box>
    </Box>
  );
};

export default Skill;
