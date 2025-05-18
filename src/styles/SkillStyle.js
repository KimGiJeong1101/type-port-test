export const skillCategoryStyle = {
  background: "#3C3C3C",
  boxShadow: "1px 2px 8px 2px rgba(255, 255, 255, 0.4)", // 더 두꺼운 흰색 그림자
  border: "solid 1px #3C3C3C",
  color: "white",
  padding: "15px",
  borderRadius: "15px",
  fontSize: "18px",
  fontWeight: "bold",
  margin: 1,
  fontFamily: "HakgyoansimDunggeunmisoTTF-B",
};

export const skillCategoryBoxStyle = {
  flex: 1,
  backgroundColor: "#3E2723",
  display: "flex",
  flexDirection: "column", // 위 아래로 나누기
  justifyContent: "center",
  alignItems: "center",
};

export const skillBoxTopStyle = {
  flex: 1, // 1 비율
  width: "100%",
  backgroundColor: "#222222", // 하단 1 위 영역 배경색
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "35px 35px 0px 0px",
  borderTop: "solid 4px #FFFAF0",
  borderLeft: "solid 4px #FFFAF0",
  borderRight: "solid 4px #FFFAF0",
};

export const skillBoxBottomStyle = {
  width: "100%",
  backgroundColor: "#222222", // 하단 1 아래 영역 배경색
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "0px 0px 35px 35px",
  borderBottom: "solid 4px #FFFAF0",
  borderLeft: "solid 4px #FFFAF0",
  borderRight: "solid 4px #FFFAF0",
};

export const skillImgStyle = {
  height: { xs: 65, lg: 100 }, // 모바일에서는 글자 크기 줄이기
  width: { xs: 65, lg: 100 }, // 모바일에서는 글자 크기 줄이기
  background: "black",
  position: "relative", // 부모 요소에 상대적인 위치 지정
  borderRadius: "18px",
  boxShadow: "0px 4px 12px 2px rgba(255, 255, 255, 0.6)", // 더 두꺼운 흰색 그림자
  margin: { xs: "9px", lg: "20px" },
  display: "flex",
  justifyContent: "center", // 가로 방향 가운데 정렬
  alignItems: "center", // 세로 방향 가운데 정렬

  "&:hover": {
    background: "black", // 호버 시 박스의 배경색을 green으로 변경
  },
  "&:hover .hover-text": {
    opacity: 1, // 호버 시 텍스트가 보이도록 설정
  },
  "&:hover img": {
    opacity: 0.2, // 호버 시 이미지를 반투명하게 처리
  },
};

export const imgSize = {
  width: "80%",
  height: "80%",
  transition: "opacity 0.3s",
};

export const skillAfterHover = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  opacity: 0, // 기본적으로 텍스트는 보이지 않음
  transition: "opacity 0.3s", // 부드럽게 전환되도록 설정
  padding: "5px", // 텍스트에 여백 추가
};
export const hoverFontStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontWeight: "bold", // 글자 굵기
  fontFamily: "yg-jalnan",
};
