import React, { Component } from "react";
import { ReviewParams } from "../services";
import ReactStars from "react-stars";

interface Props {
  onSubmit: (form: ReviewParams) => Promise<void>;
}

class App extends Component<Props, ReviewParams> {
  state: ReviewParams = {
    productName: "",
    rating: 0
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ productName: "", rating: 0 });
  };

  handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ productName: event.target.value });
  };

  handleChangeStars = (rating: number) => {
    this.setState({ rating });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={this.state.productName}
            onChange={this.handleChangeName}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Rating</label>
          <ReactStars
            size={50}
            value={this.state.rating}
            onChange={this.handleChangeStars}
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
