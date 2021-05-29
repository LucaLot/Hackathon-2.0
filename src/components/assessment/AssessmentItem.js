import React, { useState, useContext } from "react";
import AssessmentContext from "../../store/assessment-context";

import classes from "./AssessmentItem.module.css";

const AssessmentItem = (props) => {
  const assessmentCtx = useContext(AssessmentContext);

  const [radio, setRadio] = useState("");

  const onChangeOneHandler = (event) => {
    setRadio(event.target.value);
    if (props.id.includes("physical")) {
      let value = assessmentCtx.physicalScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setPhysicalScore(value);
    }

    if (props.id.includes("psychological")) {
      let value = assessmentCtx.psychologicalScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setPsychologicalScore(value);
    }

    if (props.id.includes("social")) {
      let value = assessmentCtx.socialScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setSocialScore(value);
    }

    if (props.id.includes("spiritual")) {
      let value = assessmentCtx.spiritualScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setSpiritualScore(value);
    }

    if (props.id.includes("professional")) {
      let value = assessmentCtx.professionalScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setProfessionalScore(value);
    }
  };

  const onChangeTwoHandler = (event) => {
    setRadio(event.target.value);
    if (props.id.includes("physical")) {
      let value = assessmentCtx.physicalScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setPhysicalScore(value);
    }
    if (props.id.includes("psychological")) {
      let value = assessmentCtx.psychologicalScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setPsychologicalScore(value);
    }

    if (props.id.includes("social")) {
      let value = assessmentCtx.socialScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setSocialScore(value);
    }
    if (props.id.includes("spiritual")) {
      let value = assessmentCtx.spiritualScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setSpiritualScore(value);
    }

    if (props.id.includes("professional")) {
      let value = assessmentCtx.professionalScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setProfessionalScore(value);
    }
  };

  const onChangeThreeHandler = (event) => {
    setRadio(event.target.value);
    if (props.id.includes("physical")) {
      let value = assessmentCtx.physicalScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setPhysicalScore(value);
    }
    if (props.id.includes("psychological")) {
      let value = assessmentCtx.psychologicalScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setPsychologicalScore(value);
    }

    if (props.id.includes("social")) {
      let value = assessmentCtx.socialScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setSocialScore(value);
    }
    if (props.id.includes("spiritual")) {
      let value = assessmentCtx.spiritualScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setSpiritualScore(value);
    }
    if (props.id.includes("professional")) {
      let value = assessmentCtx.professionalScore;
      value = value + parseInt(event.target.value);
      assessmentCtx.setProfessionalScore(value);
    }
  };

  return (
    <React.Fragment>
      <div className={classes.div}>
        <input
          type="radio"
          checked={radio === "1"}
          value="1"
          onChange={onChangeOneHandler}
          className={classes.p}
        />
        <input
          type="radio"
          checked={radio === "2"}
          value="2"
          onChange={onChangeTwoHandler}
          className={classes.p}
        />
        <input
          type="radio"
          checked={radio === "3"}
          value="3"
          onChange={onChangeThreeHandler}
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
