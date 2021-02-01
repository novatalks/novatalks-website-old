import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const BASE_PATH = process.env.__NEXT_ROUTER_BASEPATH || "";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    display: "flex",
    position: "relative",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 2),
  },
  link: {
    background: "transparent",
    borderRadius: "10%",
    width: 150,
    height: 150,
    "&:hover": {
      "& *": {
        opacity: 0.8,
        transition: theme.transitions.create("opacity"),
      },
    },
  },
  image: {
    borderRadius: "10%",
    objectFit: "contain",
    width: 150,
    height: 150,
  },
  partnerName: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

type Partner = {
  name: string;
  image: string;
  link: string;
};

const partners = [
  {
    name: "Network Me",
    image: "/images/partners/network_me.png",
    link: "https://www.networkme.pt",
  },
  {
    name: "edp",
    image: "/images/partners/edp.png",
    link: "https://www.edp.com/pt-pt",
  },
] as const;

function Partners() {
  const classes = useStyles();

  function eachPartner(p: Partner) {
    return (
      <Grid item xs={12} md={3} key={p.name}>
        <div className={classes.item}>
          <a
            href={p.link}
            target="_blank"
            rel={p.name}
            className={classes.link}
          >
            <img
              className={classes.image}
              src={BASE_PATH + p.image}
              alt={p.name}
            />
          </a>
          <Typography
            variant="h5"
            align="center"
            className={classes.partnerName}
          >
            {p.name}
          </Typography>
        </div>
      </Grid>
    );
  }

  return (
    <Container className={classes.root} component="section">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Os Nossos Parceiros
          </Typography>
        </Grid>
        <Grid item container spacing={5} justify="center">
          {partners.map(eachPartner)}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Partners;
