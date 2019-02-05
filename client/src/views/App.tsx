import React, { Component } from "react";
import { api } from "../services";

class App extends Component {
  async componentDidMount() {
    const response = await api.listReviews();
    console.log(response);
  }

  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    );
  }
}

export default App;
