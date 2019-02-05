import {
  ReviewApi,
  Review,
  CreateReviewRequest,
  ApiResponse,
  BaseAPI
} from "./api";

const generateId = () => {
  const random = Math.random()
    .toString(36)
    .substring(2);

  return `fake-${random}`;
};

export class FakeApi extends BaseAPI implements ReviewApi {
  private reviews: Review[] = [
    {
      id: "1",
      productName: "Maruchan Instant Lunch",
      rating: 4.5
    },
    {
      id: "2",
      productName: "Taco Bell Quesarito",
      rating: 4
    }
  ];

  createReviewRaw(
    requestParameters: CreateReviewRequest
  ): Promise<ApiResponse<Review>> {
    throw new Error("Method not implemented.");
  }

  async createReview({ reviewParams }: CreateReviewRequest): Promise<Review> {
    const review: Review = {
      id: generateId(),
      ...reviewParams
    };

    this.reviews = [review, ...this.reviews];
    return review;
  }

  listReviewsRaw(): Promise<ApiResponse<Review[]>> {
    throw new Error("Method not implemented.");
  }

  async listReviews(): Promise<Review[]> {
    return this.reviews;
  }
}
