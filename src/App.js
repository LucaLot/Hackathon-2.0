import logo from "./logo.svg";
import "./App.css";
import Introduction from "./components/introduction/Introduction";
import Layout from "./components/layout/Layout";
import Legend from "./components/legend/Legend";
import AssessmentList from "./components/assessment/AssessmentList";

function App() {
  return (
      <Layout>
        <Introduction />
        <Legend />
        <AssessmentList />
      </Layout>
  );
}

export default App;
