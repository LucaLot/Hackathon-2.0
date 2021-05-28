import React from "react";

import classes from "./AssessmentItem.module.css";

const AssessmentItem = (props) => {
  return (
    <React.Fragment>
      <div className={classes.div}>
          <input type="radio" className={classes.p} />
          <input type="radio" className={classes.p} />
          <input type="radio" className={classes.p} />
          <input type="radio" className={classes.a} />
        <p className={classes.h3}>{props.text}</p>
      </div>
    </React.Fragment>
  );
};

export default AssessmentItem;
