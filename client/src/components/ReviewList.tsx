import React from "react";
import ReactStars from "react-stars";
import { Review } from "../services";

const ReviewList = ({ reviews }: { reviews: Review[] }) => (
  <div className="card">
    <div className="card-header h4">Reviews</div>
    <ul className="list-group list-group-flush">
      {reviews.map(review => (
        <li className="list-group-item" key={review.id}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="h4 m-0">{review.productName}</div>
            <ReactStars edit={false} size={30} value={review.rating} />
          </div>
        </li>
      ))}

      {!reviews.length && (
        <div className="card-body text-center text-muted">
          There aren't any reviews.
        </div>
      )}
    </ul>
  </div>
);

export default ReviewList;
