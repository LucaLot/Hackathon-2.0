import { useContext, useState } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Layout from "./components/layout/Layout";
import Legend from "./components/legend/Legend";
import AssessmentList from "./components/assessment/AssessmentList";
import AssessmentContext from "./store/assessment-context";
import RadarChart from "./components/radarChart/RadarChart";

function App() {
  const [showChart, setShowChart] = useState(false);
  const [buttonText, setButtonText] = useState("Next");

  const assessmentCtx = useContext(AssessmentContext);

  const scores = {
    physical: (100 * assessmentCtx.physicalScore) / 30,
    psychological: (100 * assessmentCtx.psychologicalScore) / 33,
    social: (100 * assessmentCtx.socialScore) / 30,
    spiritual: (100 * assessmentCtx.spiritualScore) / 27,
    professional: (100 * assessmentCtx.professionalScore) / 30,
  };

  const onClickHandler = () => {
    if (assessmentCtx.physicalShow === true) {
      assessmentCtx.setPsychologicalShow(true);
      assessmentCtx.setPhysicalShow(false);
    }

    if (assessmentCtx.psychologicalShow === true) {
      assessmentCtx.setSocialShow(true);
      assessmentCtx.setPsychologicalShow(false);
    }

    if (assessmentCtx.socialShow === true) {
      assessmentCtx.setSpiritualShow(true);
      assessmentCtx.setSocialShow(false);
    }
    
    if (assessmentCtx.spiritualShow === true) {
      setButtonText("Submit");
      assessmentCtx.setProfessionalShow(true);
      assessmentCtx.setSpiritualShow(false);
    }

    if (assessmentCtx.professionalShow === true) {
      setShowChart(true);
      assessmentCtx.setProfessionalShow(false);
    }

  };

  return (
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
  );
}

export default App;
