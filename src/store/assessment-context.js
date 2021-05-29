import React, { useState } from "react";

const AssessmentContext = React.createContext({
  physicalScore: 0,
  setPhysicalScore: (value) => {},
  psychologicalScore: 0,
  setPsychologicalScore: (value) => {},
  socialScore: 0,
  setSocialScore: (value) => {},
  spiritualScore: 0,
  setSpiritualScore: (value) => {},
  professionalScore: 0,
  setProfessionalScore: (value) => {},
});

export const AssessmentContextProvider = (props) => {
  const [physicalScore, setPhysicalScore] = useState(0);
  const [psychologicalScore, setPsychologicalScore] = useState(0);
  const [socialScore, setSocialScore] = useState(0);
  const [spiritualScore, setSpiritualScore] = useState(0);
  const [professionalScore, setProfessionalScore] = useState(0);

  const setPhysicalScoreHandler = (value) => {
    setPhysicalScore(value);
  };

  const setPsychologicalScoreHandler = (value) => {
    setPsychologicalScore(value);
  };

  const setSocialScoreHandler = (value) => {
    setSocialScore(value);
  };

  const setSpiritualHandler = (value) => {
    setSpiritualScore(value);
  };

  const setProfessionalScoreHandler = (value) => {
    setProfessionalScore(value);
  }

  const contextValue = {
    physicalScore: physicalScore,
    setPhysicalScore: setPhysicalScoreHandler,
    psychologicalScore: psychologicalScore,
    setPsychologicalScore: setPsychologicalScoreHandler,
    socialScore: socialScore,
    setSocialScore: setSocialScoreHandler,
    spiritualScore: spiritualScore,
    setSpiritualScore: setSpiritualHandler,
    professionalScore: professionalScore,
    setProfessionalScore: setProfessionalScoreHandler,
  };

  return (
    <AssessmentContext.Provider value={contextValue}>
      {props.children}
    </AssessmentContext.Provider>
  );
};

export default AssessmentContext;
