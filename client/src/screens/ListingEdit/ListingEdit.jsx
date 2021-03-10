import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./ListingEdit.css";
import { useParams, Redirect, useHistory } from "react-router-dom";
import { getAllListings, updateListing } from "../../services/listings";

const ListingEdit = (props) => {
  const [listing, setListing] = useState({
    name: "",
    imgURL: "",
    price: "",
    description: "",
  });

  const [formData, setFormData] = useState({
    item_title: "",
    img_url: "",
    price: "",
    description: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  let { id } = useParams();
  const { item_title, img_url, price, description } = formData;
  const history = useHistory();

  useEffect(() => {
    const fetchListing = async () => {
      const listing = await getAllListings(id);
      setListing(listing);
    };
    fetchListing();
  }, [id]);

  useEffect(() => {
    const prefillFormData = () => {
      const listingItem = listing.find((listing) => listing.id === Number(id));
      setFormData({
        item_title: listingItem.item_title,
        img_url: listingItem.img_url,
        price: listingItem.price,
        description: listingItem.description,
      });
    };
    if (listing.length) {
      prefillFormData();
    }
  }, [listing, id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...listing,
      [name]: value,
    });
  };
  const handleUpdate = async (id, formData) => {
    const updatedListing = await updateListing(id, formData);
    setListing((prevState) =>
      prevState.map((listing) => {
        return listing.id === Number(id) ? updatedListing : listing;
      })
    );
    history.push(`/listing/${id}`);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const updated = await updateListing(id, listing);
  //   setUpdated({ ...updated, id });
  // };

  // if (isUpdated) {
  //   return <Redirect to={`/listing/${id}`} />;
  // }

  return (
    <Layout user={props.user}>
      <div className="listing-edit">
        <div className="edit-image-container">
          <img
            className="edit-listing-image"
            src={listing.img_url}
            alt={item_title}
          />
        </div>
        <form
          className="edit-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleUpdate(id, formData);
          }}
        >
          <input
            className="input-name"
            placeholder="Name"
            value={item_title}
            name="item_title"
            required
            autoFocus
            onChange={handleChange}
          />
          <input
            className="input-price"
            placeholder="Price"
            value={price}
            name="price"
            required
            onChange={handleChange}
          />
          <input
            className="input-image-link"
            placeholder="Image Link"
            value={img_url}
            name="img_url"
            required
            onChange={handleChange}
          />
          <input
            className="textarea-description"
            rows="10"
            cols="78"
            placeholder="Description"
            value={description}
            name="description"
            required
            onChange={handleChange}
          />
          {/* // ></textarea> */}
          <button type="submit" className="save-button">
            Save
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ListingEdit;
