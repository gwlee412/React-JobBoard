import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function JobBoard({ allJobs, selectedCategory }) {
  const filteredJobs = allJobs.filter((job) => {
    return job.category === selectedCategory;
  });

  return (
    <>
      {filteredJobs.map((jobs) => {
        return (
          <Box key={jobs.id}>
            <Box sx={{ background: "white", textAlign: "left", padding: "5%" }}>
              <Link
                to={`/job/${jobs.id}`}
                style={{ color: "black", textDecoration: "none" }}
              >
                <Typography variant="h6" gutterBottom>
                  {jobs.title}
                </Typography>
              </Link>
              <Typography variant="subtitle1" gutterBottom>
                Hourly: ${jobs.hourlyUSD}
              </Typography>
              <Typography variant="subtitle2" gutterBottom>
                Posted {jobs.postedTime}
              </Typography>
              <Typography variant="body1" gutterBottom>
                <img src="https://assets.codepen.io/6060109/location-icon.png" />
                {jobs.remote ? "Remote" : ""}, {jobs.location}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {jobs.description}
              </Typography>
            </Box>
            <Divider />
          </Box>
        );
      })}
    </>
  );
}
