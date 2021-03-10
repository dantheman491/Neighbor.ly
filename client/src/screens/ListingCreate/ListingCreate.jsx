import Layout from "../../components/shared/Layout/Layout";
import "./ListingCreate.css";
import React, { useState } from "react";
import { createListing } from "../../services/listings";
import { Redirect } from "react-router-dom";

const ListingCreate = (props) => {
  const [listing, setListing] = useState({
    item_title: "",
    img_url: "",
    description: "",
    price: 0,
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setListing({
      ...listing,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createListing(listing);
    setCreated({ ...created, user_id: props.user.id });
  };

  if (isCreated) {
    return <Redirect to={`/listings`} />;
  }

  const { item_title, price, description, img_url } = listing;
  return (
    <Layout user={props.user}>
      <div className="background">
        <div className="create-container">
          <h3>Lend A Tool</h3>
          <form onSubmit={handleSubmit} className="create-form">
            <label className="label-create">Name of Tool</label>
            <input
              className="create-input"
              required
              type="text"
              name="item_title"
              value={item_title}
              placeholder="Enter Name of Tool"
              onChange={handleChange}
              autoFocus
            />
            <label className="label-create">Price to Rent</label>
            <input
              className="create-input"
              required
              type="text"
              name="price"
              value={price}
              placeholder="Enter Price in USD"
              onChange={handleChange}
            />
            <label className="label-create">Description</label>
            <textarea
              className="create-description"
              rows={10}
              cols={50}
              required
              name="description"
              value={description}
              type="text"
              placeholder="Add a Description"
              onChange={handleChange}
            ></textarea>
            <label className="label-create">Image Link</label>
            <input
              className="create-input"
              required
              name="img_url"
              value={img_url}
              type="text"
              placeholder="Image URL"
              onChange={handleChange}
            />
            <button id="create-listing-button" type="submit">
              Create Listing
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ListingCreate;
