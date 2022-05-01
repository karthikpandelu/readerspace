import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
      <Typography sx={{ fontFamily: "fantasy", marginTop: 15 }} variant="h2">
          ReaderSpace
        </Typography>
        <Typography sx={{ fontFamily: "arial" }} variant="h5">
          A book sharing platform
        </Typography>
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View All Books</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
