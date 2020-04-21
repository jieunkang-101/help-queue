import React from "react";

function Question(props){
  return (
    <React.Fragment>
      <h3>{props.questionText}</h3>
      <button onClick={props.function}>Yes</button>
    </React.Fragment>
  );
}

export default Question;