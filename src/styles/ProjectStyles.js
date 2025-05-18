// ProjectFrame 스타일

export const frameBoxStyle = {
  background: "#F9F9F9",
  height: { xs: "80vh", lg: "70vh" },
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
  borderRadius: "130px",
  margin: 1,
};

export const projectButtonStyle = {
  marginBottom: "0px",
  marginTop: "40px",
  borderRadius: "30px", // 둥근 모서리
  padding: "8px 30px", // 버튼 크기 조정 (더 커짐)
  border: "2px solid black", // 테두리 색상
  color: "#F9F9F9", // 텍스트 색상
  textTransform: "none", // 대문자 변환 방지
  fontSize: "1.2rem", // 글자 크기 키우기
  "&:hover": {
    backgroundColor: "white", // 호버 시 배경색
    color: "#202020", // 호버 시 텍스트 색상
    textTransform: "none", // 대문자 변환 방지
  },
};

// Project 스타일

export const teamAfterHover = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column", // 세로 정렬
  opacity: 0,
  transition: "opacity 2s ease-in-out",
  background: "rgba(255, 254, 252, 0.9)", // 살짝 투명한 배경
  borderRadius: "130px",
  padding: "40px", // 여백 추가
  boxSizing: "border-box",
};

export const toyAfterHover = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column", // 세로 정렬
  justifyContent: "flex-start",
  alignItems: "flex-start",
  opacity: 0,
  transition: "opacity 2s ease-in-out",
  background: "rgba(255, 254, 252, 0.9)", // 살짝 투명한 배경
  borderRadius: "130px",
  padding: "40px", // 여백 추가
  boxSizing: "border-box",
};

export const titleStyle = {
  fontSize: { xs: 20, lg: 42 },
  fontWeight: "bold",
  color: "#333",
  display: "flex",
  alignItems: "center", // 텍스트와 아이콘 수평 정렬
  marginLeft: "3px",
};

export const imgStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "130px", // 부모와 동일한 반경 적용
};

export const iconBoxStyle = {
  width: "20px",
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#202020",
  fontSize: "12px",
  margin: "5px",
};

export const titleFontStyle = {
  background: "#2C3E50",
  borderRadius: "15px",
  padding: "5px 10px 5px 10px",
  marginBottom: "5px",
  fontSize: { xs: 11, lg: 16 },
  color: "#f9f9f9",
};

export const subtitleStyle = {
  fontWeight: "bold",
  fontSize: { xs: 12, lg: 17 },
  margin: "0px",
  padding: "0px",
};

export const dateStyle = {
  fontSize: { xs: 12, lg: 14 },
  color: "#777",
  marginLeft: "5px",
};

export const hrStyle = {
  width: "100%",
  height: "2px",
  backgroundColor: "#ddd",
  margin: "20px 0",
};

export const detailStyle = {
  padding: "0px",
  margin: "0px",
  color: "#333",
  lineHeight: 1.5,
};

export const ulStyle = {
  padding: "0px 0px 0px 15px",
  fontSize: { xs: "11px", lg: "15px" },
};

export const skillBoxStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
};

export const skillTitleStyle = {
  fontSize: { xs: 12, lg: 18 },
  color: "#555",
};

export const urlTitleStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

export const skillDisplayStyle = {
  display: "inline-flex",
  gap: "3px",
  flexWrap: "wrap", // 여러 개가 줄바꿈 없이 나올 수 있게 설정
};

export const skillValueStyle = {
  padding: "5px 10px",
  border: "1px solid #444444", // 테두리 색상
  borderRadius: "20px", // 둥근 테두리
  fontSize: { xs: 10, lg: 12 },
  color: "#555555",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export const anchorStyle = {
  color: "#0073e6",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "5px",
};

export const projectLoading = {
  width: "100%",
  height: "100%",
  borderRadius: "130px",
  textAlign: "center",
};
