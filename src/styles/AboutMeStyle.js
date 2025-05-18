export const iconTypoStyle = {
  display: "inline",
  marginRight: { xs: "3px", lg: "20px" },
  verticalAlign: "middle", // 수직 정렬
};

export const iconStyle = {
  fontSize: { xs: "21px", lg: "50px" }, // 모바일에서는 글자 크기 줄이기
  color: "#3B3B3B",
};

export const titleStyle = {
  display: "inline",
  fontFamily: "Gyeonggi_Title_Medium",
  fontWeight: "bold",
  fontSize: { xs: "18px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
  verticalAlign: "middle", // 수직 정렬
  color: "#3B3B3B",
};

export const contentStyle = {
  display: "inline",
  fontFamily: "omyu_pretty",
  fontSize: { xs: "16px", lg: "35px" }, // 모바일에서는 글자 크기 줄이기
  marginLeft: { xs: "4px", lg: "12px" },
  verticalAlign: "middle", // 수직 정렬
  color: "#3B3B3B",
  fontWeight: "bold",
};

export const aboutButtonStyle = {
  textTransform: "none",
  border: "2px solid black",
  fontSize: { xs: "13px", lg: "17px" },
  color: "white",
  background: "#202020",
  borderRadius: "22px",
  "&:hover": {
    backgroundColor: "#F8F8FF", // 호버 시 배경색
    color: "black", // 호버 시 텍스트 색상
    textTransform: "none", // 대문자 변환 방지
  },
};
