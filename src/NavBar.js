import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { styled, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "auto"
  }
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch"
    }
  }
}));

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#2B5468" }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: "10%",
            paddingRight: "10%"
          }}
        >
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box>
            <Link
              to={"/jobs/"}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Button color="inherit">Find a Job</Button>
            </Link>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <Button color="inherit">Login</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
