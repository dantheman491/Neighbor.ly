import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./ListingEdit.css";
import { useParams, Redirect } from "react-router-dom";
import { getAllListings, updateListing } from "../../services/listings";

const ListingEdit = (props) => {
  const [listing, setListing] = useState({
    name: "",
    description: "",
    imgURL: "",
    price: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const fetchListing = async () => {
      const listing = await getAllListings(id);
      setListing(listing);
    };
    fetchListing();
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setListing({
      ...listing,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const updated = await updateListing(id, listing);
    setUpdated(updated);
  };

  if (isUpdated) {
    return <Redirect to={`/listing/${id}`} />;
  }

  return (
    <Layout user={props.user}>
      <div className="listing-edit">
        <div className="edit-image-container">
          <img
            className="edit-listing-image"
            src={listing.imgURL}
            alt={listing.name}
          />
        </div>
        <form className="edit-form" onSubmit={handleSubmit}>
          <input
            className="input-name"
            placeholder="Name"
            value={listing.name}
            name="name"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={listing.price}
            name="price"
            required
            onChange={handleChange}
          />
          <input
            className="input-image-link"
            placeholder="Image Link"
            value={listing.imgURL}
            name="imgURL"
            required
            onChange={handleChange}
          />
          <textarea
            className="textarea-description"
            rows={10}
            cols={78}
            placeholder="Description"
            value={listing.description}
            name="description"
            required
            onChange={handleChange}
          />
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ListingEdit;
