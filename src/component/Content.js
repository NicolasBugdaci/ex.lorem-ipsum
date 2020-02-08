import React from "react";
import Title from "./Title.js";
import Description from "./Description.js";
import styleOfContent from "./Content.css";

const Content = props => {
  return (
    <div className="content">
      <Title name={props.name} />
      <Description text={props.text} />
    </div>
  );
};

export default Content;
