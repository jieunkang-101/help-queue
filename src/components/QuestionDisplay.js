import React from "react";
import Question from "./Question";

class QuestionDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questionVisible: 1,
      formVisibleOnPage: false
    };
  }

}