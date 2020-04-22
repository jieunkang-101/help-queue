import React from "react";
import Question from "./Question";
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';

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
    if (this.state.questionVisible  === 1) {
      return {
        questionText: "Have you gone through all the steps on the Learn How to Program debugging lesson?",
        nextStep: this.handleQuestion
      }
    } else if (this.state.questionVisible === 2) {
      return {
        questionText: "Have you asked another pair for help?",
        nextStep: this.handleQuestion
      }
    } else {
      return {
        questionText: "Have you spent 15 minutes going through through the problem documenting every step?",
        nextStep: this.handleForm
      }
    }
  }

  handleForm = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));    
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
    this.setState({formVisibleOnPage: false});
  }

  displayPages = () => {
    if(this.state.formVisibleOnPage) {
      return (
        <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList} />
      );
    } else {
      let currentQuestion = this.displayQuestion();
      return (
        <Question 
          questionText={currentQuestion.questionText}
          nextStep={currentQuestion.nextStep} />
      );
    }
  }

  render() {
    let currentlyVisibleState = this.displayPages();
    return (
      <React.Fragment>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}

export default QuestionDisplay;