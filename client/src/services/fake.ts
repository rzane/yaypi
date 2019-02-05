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
  private reviews: Review[] = [];

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

    this.reviews = [...this.reviews, review];
    return review;
  }

  listReviewsRaw(): Promise<ApiResponse<Review[]>> {
    throw new Error("Method not implemented.");
  }

  async listReviews(): Promise<Review[]> {
    return this.reviews;
  }
}
