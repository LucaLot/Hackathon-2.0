import React from "react";
import AssessmentItem from "./AssessmentItem";

import classes from './AssessmentItemList.module.css';

const AssessmentItemList = (props) => {
  return (
    <React.Fragment>
      <div className={classes.div}>
        {props.list.map((question) => {
          return <AssessmentItem id={question.key} key={question.key} text={question.value}/>
        })}
      </div>
    </React.Fragment>
  );
};

export default AssessmentItemList;
