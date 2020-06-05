import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import Typed from "react-typed";
import avatar from "../imgs/myAvatar.png";
import { Height } from "@material-ui/icons";

// CSS Styles

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar
          className={classes.avatar}
          src={avatar}
          alt="Josh Hawkins Avatar"
        />
      </Grid>
      <Typography className={classes.title} src={avatar} variant="h4">
        <Typed strings={["Josh Hawkins"]} typeSpeed={40} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} src={avatar} variant="h4">
        <Typed
          strings={["Web Development", "PERN Stack", "MEAN Stack"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
      </Typography>
    </Box>
  );
}

export default Header;
