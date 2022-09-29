import { BoxContainer, PrimaryButton, LoginBox } from "./StyledComponents";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
export default function Login({ loggedIn, setLoggedIn }) {
  return (
    <BoxContainer>
      <LoginBox>
        <Typography sx={{ margin: "25px" }} variant="h5" gutterBottom>
          Log in
        </Typography>
        <TextField
          sx={{ width: "65%" }}
          id="email"
          label="Username or Email"
          variant="outlined"
        />
        <TextField
          sx={{ width: "65%", marginTop: "20px" }}
          id="password"
          label="Password"
          variant="outlined"
        />
        <PrimaryButton
          onClick={() => {
            setLoggedIn(true);
          }}
          variant="contained"
        >
          Login
        </PrimaryButton>
      </LoginBox>
    </BoxContainer>
  );
}
