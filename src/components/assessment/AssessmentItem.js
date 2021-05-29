import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { counterActions } from "../../store/index";

import classes from "./AssessmentItem.module.css";

const AssessmentItem = (props) => {

  const dispatch = useDispatch();

  const [radio, setRadio] = useState("");

  const onChangeOneHandler = (event) => {
    setRadio(event.target.value);

    if (props.id.includes("physical")) {
      dispatch(counterActions.physicalIncrement());
    }

    if (props.id.includes("psychological")) {
      dispatch(counterActions.psychologicalIncrement());
    }

    if (props.id.includes("social")) {
      dispatch(counterActions.socialIncrement());
    }

    if (props.id.includes("spiritual")) {
      dispatch(counterActions.spiritualIncrement());
    }

    if (props.id.includes("professional")) {
      dispatch(counterActions.professionalIncrement());
    }
  };

  const onChangeTwoHandler = (event) => {
    setRadio(event.target.value);
    if (props.id.includes("physical")) {
      dispatch(counterActions.physicalIncrease(parseInt(event.target.value)));
    }
    if (props.id.includes("psychological")) {
      dispatch(
        counterActions.psychologicalIncrease(parseInt(event.target.value))
      );
    }

    if (props.id.includes("social")) {
      dispatch(counterActions.socialIncrease(parseInt(event.target.value)));
    }
    if (props.id.includes("spiritual")) {
      dispatch(counterActions.spiritualIncrease(parseInt(event.target.value)));
    }

    if (props.id.includes("professional")) {
      dispatch(
        counterActions.professionalIncrease(parseInt(event.target.value))
      );
    }
  };

  const onChangeThreeHandler = (event) => {
    setRadio(event.target.value);
    if (props.id.includes("physical")) {
      dispatch(counterActions.physicalIncrease(parseInt(event.target.value)));
    }
    if (props.id.includes("psychological")) {
      dispatch(
        counterActions.psychologicalIncrease(parseInt(event.target.value))
      );
    }

    if (props.id.includes("social")) {
      dispatch(counterActions.socialIncrease(parseInt(event.target.value)));
    }
    if (props.id.includes("spiritual")) {
      dispatch(counterActions.spiritualIncrease(parseInt(event.target.value)));
    }

    if (props.id.includes("professional")) {
      dispatch(
        counterActions.professionalIncrease(parseInt(event.target.value))
      );
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
