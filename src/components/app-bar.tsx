import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import Link from "./link";

const useStyles = makeStyles(theme => ({
  appBar: {
    color: theme.palette.common.white,
  },
  title: {
    fontSize: 24,
  },
  toolbar: {
    justifyContent: "space-between",
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 70,
    },
  },
  placeholder: {
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 70,
    },
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
}));

function AppAppBar() {
  const classes = useStyles();

  return (
    <div>
      <MuiAppBar
        // elevation={0}
        position="fixed"
        classes={{ root: classes.appBar }}
      >
        <MuiToolbar classes={{ root: classes.toolbar }}>
          <div>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/"
              as="/"
            >
              NOVATalks
            </Link>
          </div>
          <div>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/"
              as="/#sobre-nos"
            >
              Sobre nós
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/"
              as="/#equipa"
            >
              Equipa
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/"
              as="/#talks"
            >
              Talks
            </Link>
          </div>
        </MuiToolbar>
      </MuiAppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

export default AppAppBar;
