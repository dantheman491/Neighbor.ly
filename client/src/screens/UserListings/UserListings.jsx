import React, { useState, useEffect } from "react";
import "./UserListings.css";
import Layout from "../../components/shared/Layout/Layout";
import { getUser } from "../../services/user";
import ListingCard from "../../components/ListingCard/ListingCard";

const UserListings = ({ user }) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getUser(user.id);
      setListings(currentUser.listings);
    };
    user && fetchUser();
  }, [user]);

  const listingsJSX = listings.map((listing, index) => (
    <ListingCard
      id={listing._id}
      name={listing.name}
      imgURL={listing.imgURL}
      price={listing.price}
      key={index}
    />
  ));

  return (
    <Layout user={user}>
      <div className="listcard user-listings">{listingsJSX}</div>
    </Layout>
  );
};

export default UserListings;
