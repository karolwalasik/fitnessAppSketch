import React from "react";

class RecordItem extends React.Component {
  state = {
    isInEditMode: false,
    exerciseNameInput: this.props.value[0],
    exerciseValueInput: this.props.value[1],
  };

  changeEditMode = () => {
    this.setState((prevState) => ({
      isInEditMode: !prevState.isInEditMode,
    }));
  };

  renderParagraphs = (value) => {
    return (
      <p key={value[0]}>
        <span onDoubleClick={this.changeEditMode}>{value[0]} </span>
        <span onDoubleClick={this.changeEditMode}>{value[1]}</span>
      </p>
    );
  };

  exitEditMode = () => {
    this.setState({
      isInEditMode: false,
      exerciseNameInput: this.props.value[0],
      exerciseValueInput: this.props.value[1],
    });
  };

  handleClick = (i) => {
    this.props.acceptChanges(
      i,
      this.state.exerciseNameInput,
      this.state.exerciseValueInput
    );
    this.exitEditMode();
  };

  handleKeyDown = (e) => {
    if (e.which === 13) {
      this.props.acceptChanges(
        this.props.index,
        this.state.exerciseNameInput,
        this.state.exerciseValueInput
      );
      this.exitEditMode();
    }
    if (e.which === 27) {
      this.exitEditMode();
    }
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  renderInputs = (value, index) => {
    return (
      <p key={value[0]}>
        <input
          value={this.state.exerciseNameInput}
          type="text"
          name="exerciseNameInput"
          onChange={(e) => this.inputChange(e)}
          onKeyDown={(e) => this.handleKeyDown(e)}
        ></input>
        <input
          value={this.state.exerciseValueInput}
          type="text"
          name="exerciseValueInput"
          onChange={(e) => this.inputChange(e)}
          onKeyDown={(e) => this.handleKeyDown(e)}
        ></input>
        <button onClick={this.exitEditMode}>X</button>
        <button
          onClick={() =>
            this.handleClick(
              index,
              this.state.exerciseNameInput,
              this.state.exerciseValueInput
            )
          }
        >
          OK
        </button>
      </p>
    );
  };

  render() {
    const { value, index } = this.props;
    return (
      <div onDoubleClick={this.changeEditMode}>
        {this.state.isInEditMode
          ? this.renderInputs(value, index)
          : this.renderParagraphs(value)}
      </div>
    );
  }
}

export default RecordItem;
