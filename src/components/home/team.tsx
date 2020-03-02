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
  image: {
    margin: "auto",
    borderRadius: "50%",
    width: 150,
    height: 150,
  },
  memberName: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  memberRole: {
    textTransform: "uppercase",
  },
}));

const members = [
  {
    name: "André Trindade",
    role: "Presidente",
    image: "/images/team/adt.png",
  },
  {
    name: "Manuel Ribeiro",
    role: "Co-fundador",
    image: "/images/team/manuel.png",
  },
  {
    name: "Beatriz Moreira",
    role: "Relações públicas",
    image: "/images/team/beatriz.jpg",
  },
  {
    name: "João Mota",
    role: "Web developer",
    image: "/images/team/jdm.jpg",
  },
  {
    name: "Marta Coelho",
    role: "Tesoureira",
    image: "/images/team/marta.png",
  },
  {
    name: "Guilherme Fonseca",
    role: "Membro",
    image: "/images/team/guilherme_fonseca.png",
  },
  {
    name: "Guilherme Rito",
    role: "Co-fundador e Senior Advisor",
    image: "/images/team/guilherme.jpg",
  },
  {
    name: "Joana Páris",
    role: "Senior Advisor",
    image: "/images/team/joana.jpg",
  },
] as const;

function Team() {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            A nossa equipa
          </Typography>
        </Grid>
        {members.map((m, i) => (
          <Grid item xs={12} md={3} key={i}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src={BASE_PATH + m.image}
                alt={m.name}
              />
              <Typography
                variant="h5"
                align="center"
                className={classes.memberName}
              >
                {m.name}
              </Typography>
              <Typography
                variant="h6"
                align="center"
                className={classes.memberRole}
              >
                {m.role}
              </Typography>
            </div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Team;
