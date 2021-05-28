import React, { useState } from "react";

import classes from "./AssessmentItem.module.css";

const AssessmentItem = (props) => {
  const [radio, setRadio] = useState("");

  return (
    <React.Fragment>
      <div className={classes.div}>
        <input
          type="radio"
          checked={radio === "1"}
          value="1"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
          className={classes.p}
        />
        <input
          type="radio"
          checked={radio === "2"}
          value="2"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
          className={classes.p}
        />
        <input
          type="radio"
          checked={radio === "3"}
          value="3"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
          className={classes.p}
        />
        <input
          type="radio"
          checked={radio === "star"}
          value="star"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
          className={classes.a}
        />
        <p className={classes.h3}>{props.text}</p>
      </div>
    </React.Fragment>
  );
};

export default AssessmentItem;
