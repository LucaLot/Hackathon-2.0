import React from "react";

import classes from "./Introduction.module.css";

const Introduction = () => {
  return (
    <React.Fragment>
      <div className={classes.wrap}>
        <p className={classes.p}>
          Self-care activites are the things you do to maintain good health and
          improve well-being.
        </p>
        <p className={classes.p}>
          In this assessment you will think about frequently, or how well you
          are performing different self-care activities. The goal of this
          assessment is to help you learn about your self-care needs by spotting
          patterns and recognizing areas of your life that need more attention.{" "}
        </p>
        <p className={classes.p}>
          There are no right or wrong answers on this assessment. There may be
          activites that you have no interest in, and other activities may not
          be included. This list is not comprehensive, but serves as a starting
          point for thinking about your self-care needs.{" "}
        </p>
      </div>
    </React.Fragment>
  );
};

export default Introduction;
