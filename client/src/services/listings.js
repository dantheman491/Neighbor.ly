import api from "./api-config";

export const getAllListings = async () => {
  const resp = await api.get("/listings");
  return resp.data;
};

export const getOneListing = async (id) => {
  const resp = await api.get(`/listings/${id}`);
  return resp.data;
};

export const createListing = async (listingData) => {
  const resp = await api.post("/listings", { listing: listingData });
  return resp.data;
};

export const updateListing = async (id, listing) => {
  try {
    const response = await api.put(`/listings/${id}`, listing);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const putListing = async (id, listingData) => {
  const resp = await api.put(`/listings{id}`, { listing: listingData });
  return resp.data;
};

export const deleteListing = async (id) => {
  const resp = await api.delete(`/listings/${id}`);
  return resp;
};
