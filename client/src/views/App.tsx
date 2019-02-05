import React, { Component } from "react";
import { ReviewApi, Review, ReviewParams } from "../services";
import ReviewForm from "../components/ReviewForm";

interface Props {
  api: ReviewApi;
}

interface State {
  reviews: Review[];
}

class App extends Component<Props, State> {
  state: State = {
    reviews: []
  };

  componentDidMount() {
    this.fetchReviews();
  }

  async fetchReviews() {
    const { api } = this.props;

    this.setState({
      reviews: await api.listReviews()
    });
  }

  async createReview(reviewParams: ReviewParams) {
    const { api } = this.props;

    const review = await api.createReview({
      reviewParams
    });

    this.setState(({ reviews }) => ({
      reviews: reviews.concat(review)
    }));
  }

  handleSubmit = (reviewParams: ReviewParams) => {
    return this.createReview(reviewParams);
  };

  render() {
    return (
      <div className="App">
        <h1>Reviews</h1>
        <ul>
          {this.state.reviews.map(review => (
            <li key={review.id}>{review.name}</li>
          ))}
        </ul>

        <h1>New Review</h1>
        <ReviewForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
