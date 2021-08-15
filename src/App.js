//import logo from './logo.svg';
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Container,
  CssBaseline,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Cheese from "./Components/Cheese";

// styles should be in seperate component
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

function App() {
  // store cheese object form API
  const [cheeses, setCheeses] = useState([]);

  // Axios json request should be own component
  // concat and store cheese data their own objects
  useEffect(() => {
    axios.get("http://localhost:3001/cheeses").then((res) => {
      setCheeses(res.data);
    });
  }, []);

  // each part of the page should be their own components
  // - Menu
  // - Main text (hero unit)
  // - Cheeses grid
  // - Login input to change cheeses
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            PZ Cheeses
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              PZ Cheeses
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Some of the exquisite cheeses from our collection will have you
              coming back for more.
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cheeses.map((card) => (
              <Cheese key={card.id} card={card} />
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          PZ Cheeses
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Copyright Mitchell Elliott 2021
        </Typography>
      </footer>
      {/* End footer */}
    </div>
  );
}

export default App;
