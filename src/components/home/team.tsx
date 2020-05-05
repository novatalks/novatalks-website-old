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

type Member = {
  name: string;
  role: string;
  image: string;
};

const members = [
  {
    name: "André Trindade",
    role: "Presidente",
    image: "/images/team/adt.png",
  },
  {
    name: "Manuel Ribeiro",
    role: "Vice-presidente e Co-fundador",
    image: "/images/team/manuel.png",
  },
  {
    name: "Beatriz Moreira",
    role: "Vice-presidente",
    image: "/images/team/beatriz.jpg",
  },
  {
    name: "Marta Coelho",
    role: "Tesoureira",
    image: "/images/team/marta.png",
  },
  {
    name: "João Mota",
    role: "Web developer",
    image: "/images/team/jdm.jpg",
  },
  {
    name: "Guilherme Fonseca",
    role: "Colaborador",
    image: "/images/team/guilherme_fonseca.png",
  },
  {
    name: "Ana Rita",
    role: "Colaboradora",
    image: "/images/team/ana_rita.jpg",
  },
  {
    name: "Guilherme Pacheco",
    role: "Colaborador",
    image: "/images/team/guilherme_pacheco.jpg",
  },
  {
    name: "Margarida Vida",
    role: "Colaboradora",
    image: "/images/team/margarida_vida.png",
  },
  {
    name: "Tomás Silva",
    role: "Colaborador",
    image: "/images/team/tomas_silva.jpg",
  },
  {
    name: "João Pedro Sousa",
    role: "Colaborador",
    image: "/images/team/joao_pedro_sousa.jpg",
  },
] as const;

const seniorAdvisors = [
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

  function eachPerson(m: Member) {
    return (
      <Grid item xs={12} md={3} key={m.name}>
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
    );
  }

  return (
    <Container className={classes.root} component="section">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            A nossa equipa
          </Typography>
        </Grid>
        <Grid item container spacing={5} justify="center">
          {members.map(eachPerson)}
        </Grid>
        <Grid item container spacing={5} justify="center">
          {seniorAdvisors.map(eachPerson)}
        </Grid>
      </Grid>
    </Container>
  );
}

export default Team;
