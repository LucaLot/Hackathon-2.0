import { useContext } from "react";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Layout from "./components/layout/Layout";
import Legend from "./components/legend/Legend";
import AssessmentList from "./components/assessment/AssessmentList";
import AssessmentContext from "./store/assessment-context";
import RadarChart from "react-chartjs-2";

function App() {
  const assessmentCtx = useContext(AssessmentContext);

  const scores = {
    physical: assessmentCtx.physicalScore / 30,
    psychological: assessmentCtx.psychologicalScore / 33,
    social: assessmentCtx.socialScore / 30,
    spiritual: assessmentCtx.spiritualScore / 27,
    professional: assessmentCtx.professionalScore / 30,
  };


  return (
    <Layout>
      <Introduction />
      <Legend />
      <AssessmentList />
      <RadarChart props={scores} />
      <button>Submit</button>
    </Layout>
  );
}

export default App;
