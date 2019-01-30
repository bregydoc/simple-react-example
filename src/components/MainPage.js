import React, { Component } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import Modal from "./Modal";

class MainPage extends Component {
  static propTypes = {
    prop: PropTypes
  };

  state = {
    modalActive: true
  };

  showModal = () => {
    this.setState({
      modalActive: true
    });
  };

  hideModal = () => {
    this.setState({
      modalActive: false
    });
  };

  render() {
    return (
      <div>
        <Modal active={this.state.modalActive} onClose={this.hideModal}>
          <div>Hello, I'm modal</div>
        </Modal>
        <div>Hello world</div>
        <Button
          normalColor={"#01E79F"}
          activeColor={"#00B87F"}
          onClick={() =>
            this.state.modalActive ? this.hideModal() : this.showModal()
          }
        >
          CLICK ME
        </Button>
      </div>
    );
  }
}

export default MainPage;
