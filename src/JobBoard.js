import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import { JobContainer } from "./StyledComponents";
import Typography from "@mui/material/Typography";
import CategoryMenu from "./CategoryMenu";
import { useState } from "react";
import SearchBar from "./SearchBar";
import JobList from "./JobList";

export default function JobBoard({ allJobs, setAllJobs }) {
  const [selectedCategory, setSelectedCategory] = useState("Front End Dev");
  const categories = ["Front End Dev", "Design", "E-Commerce"];

  return (
    <>
      <NavBar />
      <JobContainer>
        <Box sx={{ width: "20%", textAlign: "left" }}>
          <Typography variant="h4" gutterBottom sx={{ marginTop: "60px" }}>
            Find Work
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ marginTop: "30px", fontWeight: "700" }}
          >
            Categories
          </Typography>
          <CategoryMenu
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </Box>
        <Box sx={{ width: "60%" }}>
          <SearchBar />
          <JobList allJobs={allJobs} selectedCategory={selectedCategory} />
        </Box>
      </JobContainer>
    </>
  );
}
