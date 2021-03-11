import api from "./api-config";
export const getAllReviews = async (listingId) => {
  const resp = await api.get(`/listings/${listingId}/reviews`);
  return resp.data;
};
export const getOneReview = async (id) => {
  const resp = await api.get(`/reviews/${id}`);
  return resp.data;
};

export const postReview = async (reviewData) => {
  const resp = await api.post("/reviews", { review: reviewData });
  return resp.data;
};

export const putReview = async (id, reviewData) => {
  const resp = await api.put(`/reviews{id}`, { review: reviewData });
  return resp.data;
};

export const destroyReview = async (id) => {
  const resp = await api.delete(`/reviews/${id}`);
  return resp;
};
