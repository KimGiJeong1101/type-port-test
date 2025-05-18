import React from "react";
import { Box, Container, List, ListItem, Typography } from "@mui/material";
import {
  titleStyle,
  contentSummary,
  imgBoxStyle,
  gridSectionStyle,
  gridOneStyle,
  gridThreeStyle,
} from "../styles/CareerStyle";

const Career: React.FC = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Typography
        variant="h2"
        id="career"
        sx={{
          background: "#004D40",
          padding: "25px",
          fontFamily: "'Quicksand', sans-serif", // 구글 폰트
          fontSize: "4rem", // 보통 크기
          fontWeight: "bold", // 굵은 글씨
          color: "#F9F9F9", // 조금 더 부드러운 색
          textAlign: "center",
        }}
      >
        Career
      </Typography>

      <Box sx={{ padding: "10px", background: "#004D40" }}>
        <Box
          sx={{
            ...gridSectionStyle,
          }}
        >
          <Box
            sx={{
              ...gridOneStyle,
            }}
          >
            <Box
              sx={{
                ...imgBoxStyle,
              }}
            >
              <img
                src="./education.png"
                alt="교육"
                style={{
                  width: "65%", // 박스 크기에 맞게 이미지 폭 설정
                  height: "65%", // 박스 크기에 맞게 이미지 높이 설정
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              ...gridThreeStyle,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                ...titleStyle,
              }}
            >
              글로벌아이티인재개발원
            </Typography>
            <List
              sx={{
                color: "#FFE082",
                paddingLeft: "0px",
                paddingBottom: "0px",
              }}
            >
              <ListItem sx={{ paddingLeft: "0px", paddingBottom: "0px" }}>
                <Typography sx={{ ...contentSummary }} variant="body1">
                  <strong>
                    풀스택 프레임워크(자바, 스프링) 기반 데이터 융합 SW 개발자
                    과정 이수
                  </strong>
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px", paddingTop: "0px" }}>
                <Typography
                  sx={{ color: "#cccccc", paddingTop: "0px", fontSize: "13px" }}
                  variant="body1"
                >
                  2023.11 ~ 2024.05
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px" }}>
                <Typography sx={{ paddingLeft: "0px" }} variant="body1">
                  <ul
                    className="cusul"
                    style={{ paddingLeft: "17px", listStyleType: "square" }}
                  >
                    <li>
                      MVC패턴을 활용한 블로그 웹 어플리케이션 사이트 개발
                      (Servlet + JSP)
                    </li>
                    <li>
                      스프링을 활용한 뉴스기사 관리 웹 서비스 (Spring + JSP)
                    </li>
                    <li>
                      오픈소스를 활용한 반응형 웹 쇼핑몰 구현 (Spring Boot +
                      ReactJS)
                    </li>
                    <li>DB : Oracle, MySQL, MariaDB</li>
                    <li>
                      자바 백엔드 프로그래밍 : JAVA, Servlet/JSP, JDBC, Spring
                      FrameWork(Mybatis), Spring Boot(JPA)
                    </li>
                    <li>
                      Node.js 기반 백엔드 프로그래밍 : Express, REST API,
                      Next.js
                    </li>
                    <li>
                      프론트엔드 프로그래밍 : HTML, CSS, JavaScript, ES6, DOM,
                      JQuery, Ajax, JSON, BootStrap, React, TypeScript
                    </li>
                    <li>Devops : AWS, Linux, Docker</li>
                  </ul>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            ...gridSectionStyle,
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              ...gridOneStyle,
            }}
          >
            <Box
              sx={{
                ...imgBoxStyle,
              }}
            >
              <img
                src="./study.png"
                alt="스터디"
                style={{
                  width: "65%", // 박스 크기에 맞게 이미지 폭 설정
                  height: "65%", // 박스 크기에 맞게 이미지 높이 설정
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              ...gridThreeStyle,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                ...titleStyle,
              }}
            >
              인프런스터디
            </Typography>
            <List
              sx={{
                color: "#FFE082",
                paddingLeft: "0px",
                paddingBottom: "0px",
              }}
            >
              <ListItem sx={{ paddingLeft: "0px", paddingBottom: "0px" }}>
                <Typography sx={{ ...contentSummary }} variant="body1">
                  <strong>MERN스택 - 소모임 앱 레퍼런스 웹페이지 개발</strong>
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px", paddingTop: "0px" }}>
                <Typography
                  sx={{ color: "#cccccc", paddingTop: "0px", fontSize: "13px" }}
                  variant="body1"
                >
                  2024.08 ~ 2024.09
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px" }}>
                <Typography sx={{ paddingLeft: "0px" }} variant="body1">
                  <ul
                    className="cusul"
                    style={{ paddingLeft: "17px", listStyleType: "square" }}
                  >
                    <li>
                      React를 사용하여 컴포넌트 기반 개발을 통해 UI를
                      모듈화하고, 다양한 라이브러리를 활용하여 확장성과
                      커스터마이징이 용이한 개발 진행
                    </li>
                    <li>
                      Express를 이용해 Node.js 환경에서 미니멀한 웹 프레임워크를
                      적용하고, 유연한 미들웨어를 통해 기능 확장과 효율적인 개발
                      구현
                    </li>
                    <li>
                      MongoDB를 사용하여 NoSQL 데이터베이스의 JSON 유사한
                      스키마로 비정형 데이터를 효율적으로 처리하고, 확장성 있는
                      시스템 구축
                    </li>
                    <li>
                      카카오 API를 활용해 OAuth 2.0 기반으로 카카오 소셜 로그인
                      기능을 구현하여 사용자 인증을 간편하게 처리
                    </li>
                    <li>
                      JWT 토큰을 사용하여 회원가입과 로그인 기능을 안전하게
                      처리하고, 인증 및 인가 시스템을 구축
                    </li>
                    <li>
                      에디터 라이브러리를 사용하여 게시판과 갤러리 기능을
                      구현하고, 다양한 에디터 기능을 제공하여 사용자 편의성을
                      높임
                    </li>
                    <li>
                      Socket.io를 활용하여 WebSocket 기반의 실시간 채팅 기능을
                      구현하여 사용자 간의 즉각적인 소통 가능
                    </li>
                  </ul>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box
          sx={{
            ...gridSectionStyle,
            marginTop: "30px",
          }}
        >
          <Box
            sx={{
              ...gridOneStyle,
            }}
          >
            <Box
              sx={{
                ...imgBoxStyle,
              }}
            >
              <img
                src="./businessman.png"
                alt="경력"
                style={{
                  width: "65%", // 박스 크기에 맞게 이미지 폭 설정
                  height: "65%", // 박스 크기에 맞게 이미지 높이 설정
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              ...gridThreeStyle,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                ...titleStyle,
              }}
            >
              웰컴에프앤디 ICT본부 개발/업무망 분리 (상주)
            </Typography>
            <List
              sx={{
                color: "#FFE082",
                paddingLeft: "0px",
                paddingBottom: "0px",
              }}
            >
              <ListItem sx={{ paddingLeft: "0px", paddingBottom: "0px" }}>
                <Typography sx={{ ...contentSummary }} variant="body1">
                  <strong>
                    보안 이슈로 내부망을 업무용과 개발용으로 분리, 신규 PC 도입
                    후 망 분리 완료
                  </strong>
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px", paddingTop: "0px" }}>
                <Typography
                  sx={{ color: "#cccccc", paddingTop: "0px", fontSize: "13px" }}
                  variant="body1"
                >
                  2018.10 ~ 2018.12
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px" }}>
                <Typography sx={{ paddingLeft: "0px" }} variant="body1">
                  <ul
                    className="cusul"
                    style={{ paddingLeft: "17px", listStyleType: "square" }}
                  >
                    <li>
                      보안 솔루션 및 Windows OS의 호환성 점검 및 오류 해결
                    </li>
                    <li>
                      직원들이 필요로 하는 프로그램 및 소프트웨어 설치 및 설정
                    </li>
                    <li>
                      OS 이미지화 작업을 통해 사용자 PC의 포맷, 복원 및 세팅
                      진행
                    </li>
                    <li>
                      사용자들이 불편함 없이 사용할 수 있도록 지원하고 문제 해결
                    </li>
                    <li>
                      기본 네트워크 설정 후, 프로그램과 서버 간의 통신 점검 및
                      네트워크 점검
                    </li>
                    <li>
                      Active Directory 이행 및 중앙 관리 용이성을 위한 문제 대응
                    </li>
                  </ul>
                </Typography>
              </ListItem>
            </List>
            <hr></hr>

            <Typography
              variant="h5"
              sx={{
                ...titleStyle,
              }}
            >
              Windows10 Upgrade 및 소프트웨어 구축 (상주)
            </Typography>
            <List
              sx={{
                color: "#FFE082",
                paddingLeft: "0px",
                paddingBottom: "0px",
              }}
            >
              <ListItem sx={{ paddingLeft: "0px", paddingBottom: "0px" }}>
                <Typography sx={{ ...contentSummary }} variant="body1">
                  <strong>
                    Windows 7 지원 중단에 따라, 웰컴금융그룹 직원들의 PC를
                    Windows 10으로 업그레이드하고 소프트웨어 환경 구축
                  </strong>
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px", paddingTop: "0px" }}>
                <Typography
                  sx={{ color: "#cccccc", paddingTop: "0px", fontSize: "13px" }}
                  variant="body1"
                >
                  2019.10 ~ 2019.12
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px" }}>
                <Typography variant="body1" sx={{ paddingLeft: "0px" }}>
                  <ul
                    className="cusul"
                    style={{ paddingLeft: "17px", listStyleType: "square" }}
                  >
                    <li>
                      프로그램 호환성 점검 후, 새로운 Windows 10 이미지 생성
                    </li>
                    <li>
                      상황에 맞춰 PC 포맷 및 이미지를 적용한 하드디스크 교체
                    </li>
                    <li>
                      실제 작업자로서 사전 계획과 차이가 있거나 보완 사항 발생
                      시, 운영팀과 협의
                    </li>
                    <li>
                      기본 네트워크 설정 후, 프로그램과 서버 간의 통신 점검 및
                      네트워크 점검
                    </li>
                    <li>
                      OS 버전 변경에 따라 Windows 10 버전의 Active Directory
                      재이행 및 문제 대응
                    </li>
                  </ul>
                </Typography>
              </ListItem>
            </List>

            <hr></hr>
            <Typography
              variant="h5"
              sx={{
                ...titleStyle,
              }}
            >
              웰컴캐피탈 보안 이슈 대응을 위한 망 분리 (상주)
            </Typography>
            <List
              sx={{
                color: "#FFE082",
                paddingLeft: "0px",
                paddingBottom: "0px",
              }}
            >
              <ListItem sx={{ paddingLeft: "0px", paddingBottom: "0px" }}>
                <Typography sx={{ ...contentSummary }} variant="body1">
                  <strong>
                    웰컴캐피탈의 보안 이슈로 인해 기존 외부망·내부망 통합 PC를
                    망 분리하여, 신규 PC를 도입·세팅하고 기존 PC는 포맷 후
                    재설정
                  </strong>
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px", paddingTop: "0px" }}>
                <Typography
                  sx={{ color: "#cccccc", paddingTop: "0px", fontSize: "13px" }}
                  variant="body1"
                >
                  2021.10 ~ 2022.01
                </Typography>
              </ListItem>
              <ListItem sx={{ paddingLeft: "0px" }}>
                <Typography variant="body1" sx={{ paddingLeft: "0px" }}>
                  <ul
                    className="cusul"
                    style={{ paddingLeft: "17px", listStyleType: "square" }}
                  >
                    <li>망분리용 KVM 스위치 및 PC 설치, 관리 및 사용자 교육</li>
                    <li>
                      PC 설치 및 문제 대응을 위한 매뉴얼 작성, 관리 및 교육
                    </li>
                    <li>내/외부망 OS 이미지 각각 구성</li>
                    <li>신규 보안 솔루션의 호환성 점검, 설치 및 장애 대응</li>
                    <li>
                      기본 네트워크 설정 후, 프로그램과 서버 간의 통신 점검 및
                      네트워크 점검
                    </li>
                  </ul>
                </Typography>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Career;
