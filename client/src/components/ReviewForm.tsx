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
    form: { productName: "" }
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    const { form } = this.state;

    event.preventDefault();
    this.props.onSubmit(form);
    this.setState({ form: { productName: "" } });
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
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.form.productName}
            onChange={this.handleChange}
            className="form-control"
          />
        </div>

        <button className="btn btn-primary" type="submit">
          Save Review
        </button>
      </form>
    );
  }
}

export default App;
