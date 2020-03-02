import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  p: {
    margin: theme.spacing(2),
  },
}));

function About() {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Sobre nós
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.p}>
            A NOVATalks é uma iniciativa organizada por um grupo de estudantes
            de Engenharia Informática da FCT NOVA (Faculdade de Ciências e
            Tecnologia da Universidade Nova de Lisboa), que se realiza com o
            intuito de motivar toda a comunidade académica a pensar e expandir o
            seu conhecimento nas áreas da Tecnologia, Informática e Inovação.
          </Typography>
          <Typography variant="body1" className={classes.p}>
            Com a NOVATalks pretendemos levar-te a debater e reflectir sobre as
            NOVAs tecnologias e partilhar com o mundo a tua visão do futuro, bem
            como dar-te a conhecer todo um universo de tecnologias que já
            existem e vão dar que falar.
          </Typography>
          <Typography variant="body1" className={classes.p}>
            Não podes perder!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
