import React from "react";
import Head from "next/head";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { TalkAndHtml } from "../types";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
}));

export default ({
  data: {
    title,
    date,
    startTime,
    endTime,
    location,
    speakers,
    requisites,
    more,
  },
  html,
}: TalkAndHtml) => {
  const classes = useStyles();

  return (
    <Container className={classes.root} component="section">
      <Head>
        <title>NOVATalks | {title}</title>
      </Head>
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {date}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {startTime} - {endTime}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {location}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Oradores
      </Typography>
      <Typography variant="body1" component="div">
        <ul>
          {speakers.map((s, i) => (
            <li key={i}>
              <strong>{s.name}</strong>
              <div>{s.company}</div>
              {!!s.url && (
                <div>
                  <Link
                    href={s.url}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    color="secondary"
                  >
                    {s.url}
                  </Link>
                </div>
              )}
            </li>
          ))}
        </ul>
      </Typography>
      {requisites ? (
        <Typography variant="h6" gutterBottom>
          Requisitos
        </Typography>
      ) : null}
      <Typography variant="body1" component="div">
        <ul>
          {requisites?.map((r, i) => (
            <li key={i}>
              {r.url ? (
                <Link
                  href={r.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  color="secondary"
                >
                  {r.title}
                </Link>
              ) : (
                r.title
              )}
            </li>
          ))}
        </ul>
      </Typography>
      {more ? (
        <Typography variant="h6" gutterBottom>
          Recursos
        </Typography>
      ) : null}
      <Typography variant="body1" component="div">
        <ul>
          {more?.map((m, i) => (
            <li key={i}>
              <Link
                href={m.url}
                target="_blank"
                rel="nofollow noopener noreferrer"
                color="secondary"
              >
                {m.title}
              </Link>
            </li>
          ))}
        </ul>
      </Typography>
      <Typography variant="body1" component="div">
        <div dangerouslySetInnerHTML={{ __html: html }}></div>
      </Typography>
    </Container>
  );
};
