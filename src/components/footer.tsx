import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const BASE_PATH = process.env.__NEXT_ROUTER_BASEPATH || "";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
  },
  container: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
  },
  iconsWrapper: {
    height: 120,
  },
  icons: {
    display: "flex",
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.warning.dark,
    },
  },
  iconImg: {
    height: 30,
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0,
  },
  listItem: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
  },
  language: {
    marginTop: theme.spacing(1),
    width: 150,
  },
}));

export default function AppFooter() {
  const classes = useStyles();

  return (
    <Typography component="footer" className={classes.root}>
      <Container className={classes.container}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={4}
            >
              <Grid item className={classes.icons}>
                <a
                  href="https://www.facebook.com/novatalks.fct"
                  target="_blank"
                  rel="noopener"
                  className={classes.icon}
                >
                  <img
                    src={`${BASE_PATH}/images/facebook.svg`}
                    alt="Facebook"
                    className={classes.iconImg}
                  />
                </a>
              </Grid>
              <Grid item className={classes.icons}>
                <a
                  href="https://www.instagram.com/novatalks.fct"
                  target="_blank"
                  rel="noopener"
                  className={classes.icon}
                >
                  <img
                    src={`${BASE_PATH}/images/instagram.svg`}
                    alt="Facebook"
                    className={classes.iconImg}
                  />
                </a>
              </Grid>
              <Grid item className={classes.icons}>
                <a
                  href="https://www.linkedin.com/company/novatalks"
                  target="_blank"
                  rel="noopener"
                  className={classes.icon}
                >
                  <img
                    src={`${BASE_PATH}/images/linkedin.svg`}
                    alt="Facebook"
                    className={classes.iconImg}
                  />
                </a>
              </Grid>
              <Grid
                item
              >{`© NOVATalks | DI @ FCT NOVA ${new Date().getFullYear()}`}</Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
