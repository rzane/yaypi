export interface ReviewValues {
  name: string;
}

export interface Review extends ReviewValues {
  id: string;
}

export const reviewSchema = {
  type: "object",
  properties: {
    name: {
      type: "string",
      minLength: 3
    }
  }
};

const generateId = () =>
  Math.random()
    .toString(36)
    .substring(2);

export class Storage {
  private reviews: Review[] = [];

  public listReviews() {
    return this.reviews;
  }

  public createReview(values: ReviewValues) {
    const review: Review = { id: generateId(), ...values };
    this.reviews.push(review);
    return review;
  }
}
