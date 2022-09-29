import * as React from "react";
import InputBase from "@mui/material/InputBase";

import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";

const Search = styled("div")(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  textAlign: "left"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    textAlign: "left",
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));

export default function SearchBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Search
        sx={{
          marginTop: "60px",
          background: "white",
          width: "100%",
          marginBottom: "40px"
        }}
      >
        <StyledInputBase
          placeholder="Search"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <Box
        sx={{
          marginTop: "60px",
          backgroundColor: "#39B54A",
          display: "flex",
          alignItems: "center",
          width: "30px",
          justifyContent: "center",
          marginBottom: "40px"
        }}
      >
        <img src="https://assets.codepen.io/6060109/search-icon-white.png " />
      </Box>
    </Box>
  );
}
