import React from "react";

import { BsFillStarFill } from "react-icons/bs";

import classes from "./Assessment.module.css";

const Assessment = (props) => {
  return (
    <React.Fragment>
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
      <div className={classes.div}>
        <input type="radio" className={classes.p} />
        <input type="radio" className={classes.p} />
        <input type="radio" className={classes.p} />
        <input type="radio" className={classes.a} />
        <p className={classes.h3}>test</p>
      </div>
      {props.list.map((question) => {
        console.log(question);
      })}
    </React.Fragment>
  );
};

export default Assessment;
