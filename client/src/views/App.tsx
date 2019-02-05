import React, { Component } from "react";
import { ReviewApi, Review, ReviewParams } from "../services";
import ReviewList from "../components/ReviewList";
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
      reviews: [review].concat(reviews)
    }));
  }

  handleSubmit = (reviewParams: ReviewParams) => {
    return this.createReview(reviewParams);
  };

  render() {
    return (
      <div className="container">
        <h1 className="py-2 mt-2 mb-4 border-bottom">
          Really Good, Bad Reviews
        </h1>

        <div className="row">
          <div className="col-lg-8">
            <ReviewList reviews={this.state.reviews} />
          </div>

          <div className="col-lg-4">
            <h2>New Review</h2>
            <ReviewForm onSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
