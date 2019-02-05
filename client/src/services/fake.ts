import {
  ReviewApi,
  Review,
  CreateReviewRequest,
  ApiResponse,
  BaseAPI
} from "./api";

export class FakeApi extends BaseAPI implements ReviewApi {
  createReviewRaw(
    requestParameters: CreateReviewRequest
  ): Promise<ApiResponse<Review[]>> {
    throw new Error("Method not implemented.");
  }

  createReview(requestParameters: CreateReviewRequest): Promise<Review[]> {
    throw new Error("Method not implemented.");
  }

  listReviewsRaw(): Promise<ApiResponse<Review[]>> {
    throw new Error("Method not implemented.");
  }

  listReviews(): Promise<Review[]> {
    throw new Error("Method not implemented.");
  }
}
