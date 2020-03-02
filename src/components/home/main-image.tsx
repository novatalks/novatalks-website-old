import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const BASE_PATH = process.env.__NEXT_ROUTER_BASEPATH || "";
const backgroundImage = BASE_PATH + "/images/home-background.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      height: "80vh",
      minHeight: 500,
      maxHeight: 1300,
    },
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.5,
    zIndex: -1,
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2,
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9", // Average color of the background image.
    backgroundPosition: "center",
  },
  arrowDown: {
    position: "absolute",
    bottom: theme.spacing(4),
  },
}));

function MainImage() {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <div className={classes.backdrop} />
      <div className={classes.background} />
      <img
        className={classes.arrowDown}
        src={`${BASE_PATH}/images/arrow-down.png`}
        height="16"
        width="12"
        alt="arrow down"
      />
    </Container>
  );
}

export default MainImage;
