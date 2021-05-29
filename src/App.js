import { useContext } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Layout from "./components/layout/Layout";
import Legend from "./components/legend/Legend";
import AssessmentList from "./components/assessment/AssessmentList";
import AssessmentContext from "./store/assessment-context";
import RadarChart from "./components/radarChart/RadarChart";

function App() {
  const assessmentCtx = useContext(AssessmentContext);

  const scores = {
    physical: 100 * assessmentCtx.physicalScore / 30,
    psychological: 100 * assessmentCtx.psychologicalScore / 33,
    social: 100 * assessmentCtx.socialScore / 30,
    spiritual: 100 * assessmentCtx.spiritualScore / 27,
    professional: 100 * assessmentCtx.professionalScore / 30,
  };


  return (
    <Layout>
      <Introduction />
      <Legend />
      <AssessmentList />
      <RadarChart
        physical={scores.physical}
        psychological={scores.psychological}
        social={scores.social}
        spiritual={scores.spiritual}
        professional={scores.professional} />
      <button>Submit</button>
    </Layout>
  );
}

export default App;
