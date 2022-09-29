import NavBar from "./NavBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { JobContainer } from "./StyledComponents";
import { useParams } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";

export default function JobDetail({ allJobs }) {
  let { id } = useParams();
  const selectedJob = allJobs.find((job) => {
    return job.id === Number(id);
  });
  return (
    <>
      <NavBar />
      <JobContainer>
        <Box sx={{ width: "50%", textAlign: "left" }}>
          <Typography
            sx={{ fontWeight: "700", marginTop: "60px", marginBottom: "30px" }}
            variant="h5"
            gutterBottom
          >
            {selectedJob.title}
          </Typography>
          <Divider sx={{ marginBottom: "30px" }} />
          <Typography
            sx={{ color: "#39B54A" }}
            variant="subtitle1"
            gutterBottom
          >
            {selectedJob.category}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Posted {selectedJob.postedTime}
          </Typography>
          <Typography
            sx={{ marginBottom: "30px" }}
            variant="subtitle1"
            gutterBottom
          >
            <img src="https://assets.codepen.io/6060109/location-icon.png" />
            {selectedJob.remote ? "Remote" : ""}, {selectedJob.location}
          </Typography>
          <Divider sx={{ marginBottom: "30px" }} />
          <Typography
            sx={{ marginBottom: "30px" }}
            variant="body2"
            gutterBottom
          >
            {selectedJob.description}
          </Typography>
          <Divider />
        </Box>

        <Box
          sx={{
            background: "white",
            height: "500px",
            width: "25%",
            marginTop: "60px",
            marginLeft: "80px"
          }}
        >
          <Button
            sx={{
              backgroundColor: "#39B54A",
              width: "80%",
              borderRadius: "20px",
              marginTop: "20px",
              marginBottom: "20px"
            }}
            variant="contained"
          >
            Submit a Proposal
          </Button>
          <Button
            sx={{
              color: "#39B54A",
              width: "80%",
              borderRadius: "20px",
              borderColor: "#39B54A",
              marginBottom: "30px"
            }}
            variant="outlined"
          >
            ♡ Save Job
          </Button>
          <Divider />
          <Box sx={{ textAlign: "left", padding: "10%" }}>
            <Typography variant="subtitle1" gutterBottom>
              About the client
            </Typography>
            <Typography
              sx={{ marginTop: "20px", marginBottom: "20px" }}
              variant="body1"
              gutterBottom
            >
              ✅ {selectedJob.paymentVerified ? "Payment verified" : ""}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <img src="https://assets.codepen.io/6060109/location-icon.png" />
              {selectedJob.location}
            </Typography>
          </Box>
        </Box>
      </JobContainer>
    </>
  );
}
