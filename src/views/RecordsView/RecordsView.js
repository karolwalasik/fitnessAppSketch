import React from "react";
import RecordItem from "../../components/RecordItem/RecordItem";

class RecordsView extends React.Component {
  state = {
    addExerciseMode: false,
    exercise: "",
    recordValue: "",
    recordsList: [],
    haveInputsValues: true,
  };
  exerciseInput = React.createRef();
  recordValueInput = React.createRef();

  handleAddClick = () => {
    this.setState((prevState) => ({
      addExerciseMode: !prevState.addExerciseMode,
    }));
  };

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  checkIfValueExists = (value) => {
    const flatRecordsList = this.state.recordsList.flat();
    return flatRecordsList.includes(value);
  };

  addItem = () => {
    if (
      this.state.exercise &&
      this.state.recordValue &&
      !this.checkIfValueExists(this.state.exercise)
    ) {
      const newItem = [this.state.exercise, this.state.recordValue];
      this.exerciseInput.current.value = "";
      this.recordValueInput.current.value = "";
      this.setState((prevState) => ({
        recordsList: [...prevState.recordsList, newItem],
        exercise: "",
        recordValue: "",
        haveInputsValues: true,
      }));
    } else {
      this.setState({
        haveInputsValues: false,
      });
    }
  };

  acceptChanges = (index, exerciseName, recordValue) => {
    const newRecord = [exerciseName, recordValue];
    const newRecordList = [...this.state.recordsList];
    newRecordList[index] = newRecord;
    this.setState({
      recordsList: newRecordList,
      haveInputsValues: true,
    });
  };

  constructAddExerciseInputs = () => {
    return (
      <div>
        <input
          type="text"
          name="exercise"
          value={this.state.inputValue}
          ref={this.exerciseInput}
          onChange={(e) => this.inputChange(e)}
        ></input>
        <input
          type="text"
          name="recordValue"
          ref={this.recordValueInput}
          value={this.state.inputValue}
          onChange={(e) => this.inputChange(e)}
        ></input>
        <button onClick={this.addItem}>add</button>
      </div>
    );
  };

  render() {
    return (
      <div>
        <h1>your records</h1>
        <button onClick={this.handleAddClick}>add new exercise</button>
        {this.state.addExerciseMode && this.constructAddExerciseInputs()}
        {this.state.addExerciseMode && !this.state.haveInputsValues && (
          <p>Fill all the inputs and make sure that exercise names are unique</p>
        )}
        {this.state.recordsList.map((value, index) => {
          return (
            <RecordItem
              key={`${value[0]}_${index}`}
              value={value}
              index={index}
              acceptChanges={this.acceptChanges}
            />
          );
        })}
      </div>
    );
  }
}

export default RecordsView;
