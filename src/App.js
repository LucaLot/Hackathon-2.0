import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { showActions } from "./store/index";

import { Fragment, useContext, useState } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Layout from "./components/layout/Layout";
import Legend from "./components/legend/Legend";
import AssessmentList from "./components/assessment/AssessmentList";
import RadarChart from "./components/radarChart/RadarChart";
import Header from "./components/header/Header";

function App() {
  const [showChart, setShowChart] = useState(false);
  const [buttonText, setButtonText] = useState("Next");

  const dispatch = useDispatch();

  const physical = useSelector((state) => state.show.physical);
  const psychological = useSelector((state) => state.show.psychological);
  const social = useSelector((state) => state.show.social);
  const spiritual = useSelector((state) => state.show.spiritual);
  const professional = useSelector((state) => state.show.professional);

  const physicalCounter = useSelector((state) => state.counter.physicalCounter);
  const psychologicalCounter = useSelector(
    (state) => state.counter.psychologicalCounter
  );
  const socialCounter = useSelector((state) => state.counter.socialCounter);
  const spiritualCounter = useSelector(
    (state) => state.counter.spiritualCounter
  );
  const professionalCounter = useSelector(
    (state) => state.counter.professionalCounter
  );

  const scores = {
    physical: (100 * physicalCounter) / 30,
    psychological: (100 * psychologicalCounter) / 33,
    social: (100 * socialCounter) / 30,
    spiritual: (100 * spiritualCounter) / 27,
    professional: (100 * professionalCounter) / 30,
  };

  const onClickHandler = () => {
    if (physical === true) {
      dispatch(showActions.psychologicalShow());
      dispatch(showActions.physicalHide());
    }

    if (psychological === true) {
      dispatch(showActions.socialShow());
      dispatch(showActions.psychologicalHide());
    }

    if (social === true) {
      dispatch(showActions.spiritualShow());
      dispatch(showActions.socialHide());
    }

<<<<<<< HEAD
    if (spiritual === true) {
=======
    if (assessmentCtx.spiritualShow === true) {
>>>>>>> graem
      setButtonText("Submit");
      dispatch(showActions.professionalShow());
      dispatch(showActions.spiritualHide());
    }

    if (professional === true) {
      // console.log("physical " + physicalCounter);
      // console.log("psychological " + psychologicalCounter);
      // console.log("social " + socialCounter);
      // console.log("spiritual " + spiritualCounter);
      // console.log("professional " + professionalCounter);
      setShowChart(true);
      dispatch(showActions.professionalHide());
    }
  };

  return (
    <Fragment>
      <Header />
      <Layout>
        <Introduction />
        <Legend />
        <AssessmentList />
        {!showChart && <button onClick={onClickHandler}>{buttonText}</button>}
        {showChart && (
          <RadarChart
            physical={scores.physical}
            psychological={scores.psychological}
            social={scores.social}
            spiritual={scores.spiritual}
            professional={scores.professional}
          />
        )}
      </Layout>
    </Fragment>

  );
}

export default App;
