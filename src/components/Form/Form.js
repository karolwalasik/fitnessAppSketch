import React from "react";

const types = {
  entry: "entry",
  workout: "workout",
};

class Form extends React.Component {
  state = {
    type: types.entry,
    title: "",
    content: "",
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      type: type,
    });
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    const { type } = this.state;
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <label>
              <input
                type="radio"
                id={types.entry}
                onChange={() => this.handleRadioButtonChange(types.entry)}
                checked={type === types.entry}
              />
              entry
            </label>

            <label>
              <input
                type="radio"
                id={types.workout}
                onChange={() => this.handleRadioButtonChange(types.workout)}
                checked={type === types.workout}
              />
              workout
            </label>
          </div>
          <div>
            <input
              type="text"
              value={this.state.title}
              name="title"
              onChange={(e) => this.handleInputChange(e)}
            />
            <textarea
              value={this.state.content}
              name="content"
              onChange={(e) => this.handleInputChange(e)}
            />
          </div>

          <button>add new</button>
        </form>
      </div>
    );
  }
}

export default Form;
