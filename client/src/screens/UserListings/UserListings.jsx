import React, { useState, useEffect } from "react";
import "./UserListings.css";
import Layout from "../../components/shared/Layout/Layout";
import { verifyUser } from "../../services/users";
import ListingCard from "../../components/ListingCard/ListingCard";

const UserListings = ({ user }) => {
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await verifyUser(user.id);
      setAllListings(currentUser.listings);
    };
    user && fetchUser();
  }, [user]);

  // const listingsJSX = listings.map((listing, index) => (
  //   <ListingCard
  //     id={listing.id}
  //     name={listing.name}
  //     imgURL={listing.imgURL}
  //     price={listing.price}
  //     key={index}
  //   />
  // ));

  return (
    <Layout user={user}>
      <div className="listcard user-listings">
        {allListings.map((listing, index) => (
          <ListingCard
            id={listing.id}
            name={listing.item_title}
            imgURL={listing.img_url}
            price={listing.price}
            key={index}
          />
        ))}
      </div>
    </Layout>
  );
};

export default UserListings;
