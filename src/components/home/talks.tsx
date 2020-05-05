import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { MinimalTalk, AllTalks } from "../../types";
import Link from "../link";

const BASE_PATH = process.env.__NEXT_ROUTER_BASEPATH || "";

export type TalksProps = {
  talks: AllTalks;
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    width: 260,
    height: 260,
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100,
    },
    "&:hover": {
      zIndex: 1,
    },
    "&:hover $imageBackdrop": {
      opacity: 0.7,
    },
    "&:hover $imageMarked": {
      opacity: 0,
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor",
    },
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "80%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "40%",
    },
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  live: {
    color: "red",
  },
}));

function perTalk(t: MinimalTalk, classes: ReturnType<typeof useStyles>) {
  return (
    <ButtonBase className={classes.imageWrapper} key={t.as}>
      <div
        className={classes.imageSrc}
        style={{
          backgroundImage: `url(${BASE_PATH}${t.image})`,
        }}
      />
      <div className={classes.imageBackdrop} />
      <Link href={t.href} as={t.as}>
        <div className={classes.imageButton}>
          <Typography
            variant="h6"
            color="inherit"
            className={classes.imageTitle}
          >
            {t.title}
            <div className={classes.imageMarked} />
          </Typography>
        </div>
      </Link>
    </ButtonBase>
  );
}

function add<K, V>(map: Map<K, V[]>, key: K, val: V) {
  const arr = map.get(key);
  if (arr) {
    arr.push(val);
  } else {
    map.set(key, [val]);
  }
}

function Talks({ talks }: TalksProps) {
  const NOW = Date.now();
  const classes = useStyles();
  const live: MinimalTalk[] = [];
  const scheduled: MinimalTalk[] = [];
  const past: Map<string, MinimalTalk[]> = new Map();

  if (typeof window === "undefined") {
    for (const t of talks) {
      const start = new Date(`${t.date}T${t.startTime}`);
      const year = start.getFullYear();
      const month = start.getMonth() + 1;
      add(past, month < 9 ? `${year - 1}/${year}` : `${year}/${year + 1}`, t);
    }
  } else {
    for (const t of talks) {
      const start = new Date(`${t.date}T${t.startTime}`);
      const end = new Date(`${t.date}T${t.endTime}`);
      if (+end < NOW) {
        const year = start.getFullYear();
        const month = start.getMonth() + 1;
        add(past, month < 9 ? `${year - 1}/${year}` : `${year}/${year + 1}`, t);
      } else if (NOW < +start) {
        scheduled.push(t);
      } else {
        live.push(t);
      }
    }
  }

  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" align="center">
        Eventos
      </Typography>
      {live.length > 0 && (
        <>
          <Typography variant="h6" align="left" className={classes.live}>
            LIVE
          </Typography>
          <div className={classes.images}>
            {live.map(t => perTalk(t, classes))}
          </div>
        </>
      )}
      {scheduled.length > 0 && (
        <>
          <Typography variant="h6" align="left">
            Marcadas
          </Typography>
          <div className={classes.images}>
            {scheduled.map(t => perTalk(t, classes))}
          </div>
        </>
      )}
      {Array.from(past).map(([year, talks]) => (
        <React.Fragment key={year}>
          <Typography variant="h6" align="left">
            {year}
          </Typography>
          <div className={classes.images}>
            {talks.map(t => perTalk(t, classes))}
          </div>
        </React.Fragment>
      ))}
    </Container>
  );
}

export default Talks;
