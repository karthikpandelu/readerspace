import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy", marginTop: 15 }} variant="h2">
          ReaderSpace
        </Typography>
        <Typography sx={{ fontFamily: "arial" }} variant="h5">
          A book sharing platform
        </Typography>
        <Typography sx={{ fontFamily: "arial", marginTop: 5 }} variant="p">
        The ReaderSpace is a book sharing platform where any user can Lend out, Sell or Give away the book for free. 
        </Typography>
        <Typography sx={{ fontFamily: "arial", marginTop: 1 }} variant="p">
        This app is useful for those who has habit of reading and likes to share their treasure of book collection with other and also it can be beneficial to the students. 
        </Typography>
      </Box>
    </div>
  );
};

export default About;
