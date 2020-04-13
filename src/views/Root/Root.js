import React from "react";
import "../../index.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RecordsView from "../RecordsView/RecordsView";
import Header from "../../components/Header/Header";
import DiaryView from "../DiaryView/DiaryView";
import Modal from "../../components/Modal/Modal";

class Root extends React.Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  render() {
    const { isModalOpen } = this.state;
    return (
      <BrowserRouter>
        <>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={DiaryView}></Route>
            <Route path="/records" component={RecordsView}></Route>
          </Switch>
          {isModalOpen && <Modal closeModalFn={this.closeModal} />}
        </>
      </BrowserRouter>
    );
  }
}

export default Root;
