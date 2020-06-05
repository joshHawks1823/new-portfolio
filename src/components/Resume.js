import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Typography, Box } from "@material-ui/core";
import Navbar from "./Navbar";
import newResume from "../imgs/Joshua's Resume-7-1.png";

const Resume = () => {
  const mystyle = {
    paddingTop: "10px",
    maxWidth: "60%",
    marginTop: "5%",
  };

  // const centerImage = {
  //   marginAu: "",
  // };
  return (
    <>
      <Navbar />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        alignContent="center"
      >
        <img style={mystyle} src={newResume} alt="Resume" />
      </Box>
    </>
  );
};

export default Resume;
