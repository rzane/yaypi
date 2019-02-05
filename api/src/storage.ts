export interface ReviewValues {
  productName: string;
}

export interface Review extends ReviewValues {
  id: string;
}

export const reviewSchema = {
  type: "object",
  properties: {
    productName: {
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
    this.reviews = [...this.reviews, review];
    return review;
  }
}
