import React, { useState } from "react";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Collapse,
  IconButton,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Cheese = (props) => {
  console.log(props.card.title);
  const classes = useStyles();

  // calculator drop down on card component
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [inputWeight, setInputWeight] = useState(0);

  const handleInput = (event) => {
    setInputWeight(event.target.value);
  };

  return (
    <Grid item key={props.card.id} xs={12} sm={6} md={4}>
      <Card className={classes}>
        <CardMedia
          className={classes.cardMedia}
          image={props.card.image}
          title={props.card.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.card.title}
          </Typography>
          <Typography>{props.card.description}</Typography>
          <Typography variant="h6">Price per Kg ${props.card.price}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            Calculate Price
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>Calculate the price for your order</Typography>
            <Typography color="primary">
              ${props.card.price} kg x
              <input value={inputWeight} onChange={handleInput} />={" "}
              {props.card.price * inputWeight}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Cheese;
