import React from "react";
import LegendItem from "./LegendItem";
import LegendItemStar from "./LegendItemStar";

const LegendItemList = () => {
  return (
    <React.Fragment>
      <LegendItem
        number="1"
        discription1="I do this poorly"
        discription2="I do this rarely or not at all"
      />
      <LegendItem
        number="2"
        discription1="I do this OK"
        discription2="I do this sometimes"
      />
      <LegendItem
        number="3"
        discription1="I do this well"
        discription2="I do this often"
      />
      <LegendItemStar
        discription1="I would like to improve at this"
        discription2="I like to do this more frequently"
      />
    </React.Fragment>
  );
};

export default LegendItemList;
