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
  donation: {
    margin: theme.spacing(2),
    textAlign: "center",
  },
}));

const DONATION_HTML = `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick" />
<input type="hidden" name="hosted_button_id" value="9Z3Q3VDL9WL9C" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_PT/i/scr/pixel.gif" width="1" height="1" />
</form>`;

function HelpUs() {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Ajuda a NOVATalks
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.p}>
            A NOVATalks é uma associação estudantil sem fins lucrativos.
            Acreditamos que o conhecimento e a cultura devem estar disponíveis
            para todos. Além disso, o gasto em propinas todos os anos já é
            suficientemente pesado. Por isso não cobramos entrada ou
            participação em nenhum dos nossos eventos. Infelizmente, é bastante
            limitante realizar eventos sem um budget, por isso pedimos a tua
            ajuda para continuarmos com o nosso trabalho e a podermos tornar as
            nossas ideias realidade.
          </Typography>
          <div className={classes.donation}>
            <div dangerouslySetInnerHTML={{ __html: DONATION_HTML }}></div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HelpUs;
