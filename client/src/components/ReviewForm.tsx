import React, { Component } from "react";
import { ReviewParams } from "../services";

interface Props {
  onSubmit: (form: ReviewParams) => Promise<void>;
}

interface State {
  form: ReviewParams;
}

class App extends Component<Props, State> {
  state: State = {
    form: { name: "" }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { form } = this.state;

    event.preventDefault();
    this.props.onSubmit(form);
    this.setState({ form: { name: "" } });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState(({ form }) => ({
      form: { ...form, [name]: value }
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={this.state.form.name}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Save Review</button>
      </form>
    );
  }
}

export default App;
