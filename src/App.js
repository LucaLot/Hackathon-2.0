import logo from "./logo.svg";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Layout from "./components/layout/Layout";
import Legend from "./components/legend/Legend";
import AssessmentList from "./components/assessment/AssessmentList";
import RadarChart from "./components/radarChart/RadarChart";

function App() {
  return (
    <Layout>
      <RadarChart physical={10} psychological={64} social={87} spiritual={0} professional={55} />
      <Introduction />
      <Legend />
      <AssessmentList />
    </Layout>
  );
}

export default App;
