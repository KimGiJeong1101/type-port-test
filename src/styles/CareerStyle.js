export const titleStyle = {
  fontWeight: "bold",
  marginBottom: "10px",
  color: "#f9f9f9",
  fontSize: { xs: "17px", lg: "23px" },
};

export const contentSummary = {
  fontSize: { xs: "14px", lg: "16px" },
};

export const imgBoxStyle = {
  display: "flex",
  background: "#f9f9f9",
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};

export const gridSectionStyle = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" }, // xs에서는 세로, sm 이상에서는 가로
  background: "#004D40",
  height: "auto",
};

export const gridOneStyle = {
  display: "flex",
  flex: 1,
  background: "#004D40",
  padding: "20px",
  minWidth: "250px",
  fontWeight: "bold",
  color: "#202020",
  textAlign: "center",
  justifyContent: "center",
};

export const gridThreeStyle = {
  flex: 3,
  padding: "20px",
  background: "#004D40",
  minWidth: "250px",
  fontWeight: "bold",
  color: "#f9f9f9",
  borderLeft: { xs: "none", lg: "solid 4px #f9f9f9" }, // xs에서는 borderLeft를 없애고, sm 이상에서는 3px 검은색 테두리
  borderTop: { xs: "solid 4px #f9f9f9", lg: "none" }, // xs에서는 borderTop을 3px 검은색으로, sm 이상에서는 없앰
};
