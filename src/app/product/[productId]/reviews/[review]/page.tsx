import { notFound } from "next/navigation";
import React from "react";

const Review = ({
  params,
}: {
  params: {
    review: string;
    productId: string;
  };
}) => {
  if (parseInt(params.review) > 100) {
    notFound();
  }
  return (
    <div>
      Review {params.review} , product {params.productId}
    </div>
  );
};
export default Review;
