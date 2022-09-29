import * as React from "react";

import Paper from "@mui/material/Paper";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
export default function CategoryMenu({
  categories,
  selectedCategory,
  setSelectedCategory
}) {
  return (
    <Box
      sx={{
        width: 320,
        maxWidth: "100%",
        background: "#E8E8E8"
      }}
    >
      {categories.map((category) => {
        return (
          <MenuList key={category}>
            <MenuItem
              onClick={() => setSelectedCategory(category)}
              sx={selectedCategory === category ? { color: "#39B54A" } : {}}
              disableGutters
            >
              <ListItemText>{category}</ListItemText>
            </MenuItem>
          </MenuList>
        );
      })}
    </Box>
  );
}
