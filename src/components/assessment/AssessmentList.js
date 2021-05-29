import React from "react";
import Assessment from "./Assessment";

import { useSelector } from "react-redux";

import classes from "./AssessmentList.module.css";

const physicalList = [
  { key: "physical1", value: "Eat healthy foods" },
  { key: "physical2", value: "Take care of personal hygiene" },
  { key: "physical3", value: "Exercise" },
  {
    key: "physical4",
    value: "Wear cloths that help me feel good about myself",
  },
  { key: "physical5", value: "Eat regularly" },
  {
    key: "physical6",
    value:
      "Participate in fun activites (e.g. walking, swimmin, dancing, sports)",
  },
  { key: "physical7", value: "Get enough sleep" },
  {
    key: "physical8",
    value:
      "Go to preventative medical appointments (e.g. checkups, teeth cleanigs)",
  },
  { key: "physical9", value: "Rest when sick" },
  { key: "physical10", value: "Overall physical self-care" },
];

const psychologicalList = [
  {
    key: "psychological1",
    value: "Take time off from work, school and other obligations",
  },
  { key: "psychological2", value: "Participate in hobbies" },
  {
    key: "psychological3",
    value: "Get away from distractions (e.g. phone, email)",
  },
  {
    key: "psychological4",
    value: "Learn new things, un related to work or school",
  },
  {
    key: "psychological5",
    value:
      "Express my feelings in a health way (e.g. talking, creating art, journaling)",
  },
  {
    key: "psychological6",
    value: "Recognize my own strengths and achievements",
  },
  { key: "psychological7", value: "Go on vacations or day-trips" },
  {
    key: "psychological8",
    value:
      "Do something comforting (e.g. re-watch a favorite movie, take a long bath)",
  },
  { key: "psychological9", value: "Find reasons to laugh" },
  { key: "psychological10", value: "Talk about my problems" },
  {
    key: "psychological11",
    value: "Overall psychological and emotional self-care",
  },
];

const socialList = [
  { key: "social1", value: "Spend time with people who I like" },
  {
    key: "social2",
    value: "Call or write to friends and family who are far away",
  },
  { key: "social3", value: "Have stimulating conversations" },
  { key: "social4", value: "Meet new people" },
  {
    key: "social5",
    value: "Spend time alone with my romantic partner",
  },
  { key: "social6", value: "Ask others for help, when needed" },
  { key: "social7", value: "Do enjoyable activities with other people" },
  {
    key: "social8",
    value: "Have intimate time with my romantic partner",
  },
  { key: "social9", value: "Keep in touch with old friends" },
  { key: "social10", value: "Overall social self-care" },
];

const spiritualList = [
  { key: "spiritual1", value: "Spend time in nature" },
  { key: "spiritual2", value: "Meditate" },
  { key: "spiritual3", value: "Pray" },
  {
    key: "spiritual4",
    value: "Recognize the things that give meaning to my life",
  },
  {
    key: "spiritual5",
    value: "Act in accordance with my morals and values",
  },
  { key: "spiritual6", value: "Set aside time for thought and reflection" },
  {
    key: "spiritual7",
    value: "Participate in a cause that is important to me",
  },
  {
    key: "spiritual8",
    value:
      "Appreciate art that is impactful to me (e.g. music, film, literature)",
  },
  { key: "spiritual9", value: "Overall spiritual self-care" },
];

const professionalList = [
  { key: "professional1", value: "Improve my professional skills" },
  { key: "professional2", value: "Say “no” to excessive new responsibilities" },
  {
    key: "professional3",
    value: "Take on projects that are interesting or rewarding",
  },
  { key: "professional4", value: "Learn new things related to my profession" },
  {
    key: "professional5",
    value: "Make time to talk and build relationships with colleagues",
  },
  { key: "professional6", value: "Take breaks during work" },
  {
    key: "professional7",
    value: "Maintain balance between my professional and personal life",
  },
  {
    key: "professional8",
    value: "Keep a comfortable workspace that allows me to be successful",
  },
  {
    key: "professional9",
    value: "Advocate for fair pay, benefits, and other needs",
  },
  { key: "professional10", value: "Overall professional self-care" },
];

const AssessmentList = () => {

  const physical = useSelector((state) => state.show.physical);
  const psychological = useSelector((state) => state.show.psychological);
  const social = useSelector((state) => state.show.social);
  const spiritual = useSelector((state) => state.show.spiritual);
  const professional = useSelector((state) => state.show.professional);

  return (
    <React.Fragment>
      <div className={classes.div}>
        {physical && (
          <Assessment title="Physical Self-Care" list={physicalList} />
        )}
        {psychological && (
          <Assessment
            title="Psychological / Emotional Self-Care"
            list={psychologicalList}
          />
        )}
        {social && (
          <Assessment title="Social Self-Care" list={socialList} />
        )}
        {spiritual && (
          <Assessment title="Spiritual Self-Care" list={spiritualList} />
        )}
        {professional && (
          <Assessment title="Professional Self-Care" list={professionalList} />
        )}
      </div>
    </React.Fragment>
  );
};

export default AssessmentList;
