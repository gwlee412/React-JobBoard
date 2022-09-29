import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

const PRIMARY_GREEN = "#39B54A";
const SECONDARY_NAVY = "#2B5468";

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
  width: "65%",
  margin: "50px"
}));

export const BoxContainer = styled(Box)(() => ({
  background: "#E8E8E8",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}));

export const LoginBox = styled(Box)(() => ({
  backgroundColor: "white",
  width: "33%",
  height: "45%"
}));
export const JobContainer = styled(Box)(() => ({
  backgroundColor: "#E8E8E8",
  display: "flex",
  paddingLeft: "10%",
  paddingRight: "10%",
  width: "100%",
  height: "100vh"
}));
