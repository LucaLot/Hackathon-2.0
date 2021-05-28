import React from "react";

import { BsFillStarFill } from "react-icons/bs";

import classes from "./Assessment.module.css";
import AssessmentItemList from "./AssessmentItemList";

const Assessment = (props) => {
  return (
    <React.Fragment>
      <div className={classes.wrap}>
        <div className={classes.div}>
          <p className={classes.p}>1</p>
          <p className={classes.p}>2</p>
          <p className={classes.p}>3</p>
          <a className={classes.a}>
            {" "}
            <BsFillStarFill />
          </a>
          <h3 className={classes.h3}>{props.title}</h3>
        </div>
        <AssessmentItemList list={props.list} />
      </div>
    </React.Fragment>
  );
};

export default Assessment;
