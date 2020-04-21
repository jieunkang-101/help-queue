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

  handleQuestion = () => {
    this.setState(prevState => ({
      questionVisible: prevState.questionVisible + 1
    }));
  }

  displayQuestion = () => {
    if (this.state.questionVisible % 3 === 1) {
      return {
        questionText: "Have you gone through all the steps on the Learn How to Program debugging lesson?",
        function: this.handleQuestion
      }
    } else if (this.state.questionVisible % 3 === 2) {
      return {
        questionText: "Have you asked another pair for help?",
        function: this.handleQuestion
      }
    } else {
      return {
        questionText: "Have you spent 15 minutes going through through the problem documenting every step?",
        function: this.handleQuestion
      }
    }
  }

  render() {
    let currentlyVisibleState = null;
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <Question />
      </React.Fragment>
    );
  }
}

export default QuestionDisplay;