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

  physicalShow: true,
  setPhysicalShow: (value) => {},
  psychologicalShow: 0,
  setPsychologicalShow: (value) => {},
  socialShow: 0,
  setSocialShow: (value) => {},
  spiritualShow: 0,
  setSpiritualShow: (value) => {},
  professionalShow: 0,
  setProfessionalShow: (value) => {},
});

export const AssessmentContextProvider = (props) => {
  const [physicalScore, setPhysicalScore] = useState(0);
  const [psychologicalScore, setPsychologicalScore] = useState(0);
  const [socialScore, setSocialScore] = useState(0);
  const [spiritualScore, setSpiritualScore] = useState(0);
  const [professionalScore, setProfessionalScore] = useState(0);

  const [physicalShow, setPhysicalShow] = useState(true);
  const [psychologicalShow, setPsychologicalShow] = useState(false);
  const [socialShow, setSocialShow] = useState(false);
  const [spiritualShow, setSpiritualShow] = useState(false);
  const [professionalShow, setProfessionalShow] = useState(false);

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
  };

  const setPhysicalShowHandler = (value) => {
    setPhysicalShow(value);
  };

  const setPsychologicalShowHandler = (value) => {
    setPsychologicalShow(value);
  };

  const setSocialShowHandler = (value) => {
    setSocialShow(value);
  };

  const setSpiritualShowHandler = (value) => {
    setSpiritualShow(value);
  };

  const setProfessionalShowHandler = (value) => {
    setProfessionalShow(value);
  };

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

    physicalShow: physicalShow,
    setPhysicalShow: setPhysicalShowHandler,
    psychologicalShow: psychologicalShow,
    setPsychologicalShow: setPsychologicalShowHandler,
    socialShow: socialShow,
    setSocialShow: setSocialShowHandler,
    spiritualShow: spiritualShow,
    setSpiritualShow: setSpiritualShowHandler,
    professionalShow: professionalShow,
    setProfessionalShow: setProfessionalShowHandler,
  };

  return (
    <AssessmentContext.Provider value={contextValue}>
      {props.children}
    </AssessmentContext.Provider>
  );
};

export default AssessmentContext;
