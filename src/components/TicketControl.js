import React from 'react';
import TicketList from './TicketList';
import NewTicketForm from './NewTicketForm';
import TicketDetail from './TicketDetail';
//import QuestionDisplay from './QuestionDisplay';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterTicketList: [],
      selectedTicket: null
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMasterTicketList = this.state.masterTicketList.concat(newTicket);
    this.setState({masterTicketList: newMasterTicketList});
    this.setState({formVisibleOnPage: false});
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    console.log("location", selectedTicket.location);
    selectedTicket.location ++;
    this.setState({selectedTicket: selectedTicket});
    const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id).concat(selectedTicket);
    this.setState({masterTicketList: newMasterTicketList});
  }

  handleDeletingTicket = (id) => {
    const newMasterTicketList = this.state.masterTicketList.filter(ticket => ticket.id !== id);
    this.setState({masterTicketList: newMasterTicketList});
    this.setState({selectedTicket: null});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    console.log("state", this.state);

    if (this.state.selectedTicket != null) {
      currentlyVisibleState = <TicketDetail ticket = {this.state.selectedTicket} onClickingDelete = {this.handleDeletingTicket} />
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}  />;
      buttonText = "Return To Ticket List";  
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket} />; 
      buttonText = "Add Ticket";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }
}

export default TicketControl;