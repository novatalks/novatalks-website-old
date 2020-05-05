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
            A NOVATalks é uma iniciativa estudantil, fundada em Abril de 2016 na
            FCT NOVA, com o objectivo de motivar toda a comunidade académica a
            pensar e expandir o seu conhecimento nas áreas da Ciência,
            Tecnologia, Inovação e Sustentabilidade, complementando disciplinas
            exploradas nos nossos currículos e introduzindo temas cada vez mais
            relevantes na sociedade.
          </Typography>
          <Typography variant="body1" className={classes.p}>
            Com a NOVATalks pretendemos levar-te a debater e reflectir para além
            do curso e partilhar com o mundo a tua visão do futuro, bem como
            dar-te a conhecer todo um universo de tecnologias que já existem e
            vão dar que falar.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
