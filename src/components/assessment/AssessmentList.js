import React from "react";
import Assessment from "./Assessment";

import classes from './AssessmentList.module.css';

const physicalList = [
  { key: 1, value: "Eat healthy foods" },
  { key: 2, value: "Take care of personal hygiene" },
  { key: 3, value: "Exercise" },
  { key: 4, value: "Wear cloths that help me feel good about myself" },
  { key: 5, value: "Eat regularly" },
  {
    key: 6,
    value:
      "Participate in fun activites (e.g. walking, swimmin, dancing, sports)",
  },
  { key: 7, value: "Get enough sleep" },
  {
    key: 8,
    value:
      "Go to preventative medical appointments (e.g. checkups, teeth cleanigs)",
  },
  { key: 9, value: "Rest when sick" },
  { key: 10, value: "Overall physical self-care" },
];

const psychologicalList = [
  { key: 1, value: "Take time off from work, school and other obligations" },
  { key: 2, value: "Participate in hobbies" },
  { key: 3, value: "Get away from distractions (e.g. phone, email)" },
  { key: 4, value: "Learn new things, un related to work or school" },
  {
    key: 5,
    value:
      "Express my feelings in a health way (e.g. talking, creating art, journaling)",
  },
  { key: 6, value: "Recognize my own strengths and achievements" },
  { key: 7, value: "Go on vacations or day-trips" },
  {
    key: 8,
    value:
      "Do something comforting (e.g. re-watch a favorite movie, take a long bath)",
  },
  { key: 9, value: "Find reasons to laugh" },
  { key: 10, value: "Talk about my problems" },
  { key: 11, value: "Overall psychological and emotional self-care" },
];

const socialList = [
  { key: 1, value: "Spend time with people who I like" },
  { key: 2, value: "Call or write to friends and family who are far away" },
  { key: 3, value: "Have stimulating conversations" },
  { key: 4, value: "Meet new people" },
  {
    key: 5,
    value: "Spend time alone with my romantic partner",
  },
  { key: 6, value: "Ask others for help, when needed" },
  { key: 7, value: "Do enjoyable activities with other people" },
  {
    key: 8,
    value: "Have intimate time with my romantic partner",
  },
  { key: 9, value: "Keep in touch with old friends" },
  { key: 10, value: "Overall social self-care" },
];

const spiritualList = [
  { key: 1, value: "Spend time in nature" },
  { key: 2, value: "Meditate" },
  { key: 3, value: "Pray" },
  { key: 4, value: "Recognize the things that give meaning to my life" },
  {
    key: 5,
    value: "Act in accordance with my morals and values",
  },
  { key: 6, value: "Set aside time for thought and reflection" },
  { key: 7, value: "Participate in a cause that is important to me" },
  {
    key: 8,
    value:
      "Appreciate art that is impactful to me (e.g. music, film, literature)",
  },
  { key: 9, value: "Overall spiritual self-care" },
];

const professionalList = [
    { key: 1, value: "Improve my professional skills" },
    { key: 2, value: "Say “no” to excessive new responsibilities" },
    { key: 3, value: "Take on projects that are interesting or rewarding" },
    { key: 4, value: "Learn new things related to my profession" },
    {
      key: 5,
      value: "Make time to talk and build relationships with colleagues",
    },
    { key: 6, value: "Take breaks during work" },
    { key: 7, value: "Maintain balance between my professional and personal life" },
    {
      key: 8,
      value:
        "Keep a comfortable workspace that allows me to be successful",
    },
    { key: 9, value: "Advocate for fair pay, benefits, and other needs" },
    { key: 10, value: "Overall professional self-care" },
  ];

const AssessmentList = () => {
  return (
    <React.Fragment>
      <div className={classes.div}>
      <Assessment title="Physical Self-Care" list={physicalList} />
      <Assessment
        title="Psychological / Emotional Self-Care"
        list={psychologicalList}
      />
      <Assessment title="Social Self-Care" list={socialList} />
      <Assessment title="Spiritual Self-Care" list={spiritualList} />
      <Assessment title="Professional Self-Care" list={professionalList} />
      </div>
    </React.Fragment>
  );
};

export default AssessmentList;
