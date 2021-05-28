import React from "react";

import { BsFillStarFill } from "react-icons/bs";

import classes from "./LegendItemStar.module.css";

const LegendItemStar = (props) => {
  return (
    <React.Fragment>
      <div className={classes.div}>
        <p className={classes.p}>
          <BsFillStarFill />
        </p>
        <p className={classes.p}>{props.discription1}</p>
        <p className={classes.p}>{props.discription2}</p>
      </div>
    </React.Fragment>
  );
};

export default LegendItemStar;
