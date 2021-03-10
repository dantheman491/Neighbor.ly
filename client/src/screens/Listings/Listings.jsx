import Layout from "../../components/shared/Layout/Layout";
import "./Listings.css";
import "./Listings.css";
import { getAllListings } from "../../services/listings";
import { useState, useEffect } from "react";
import ListingCard from "../../components/ListingCard/ListingCard";

const Listings = (props) => {
  const [allListings, setAllListings] = useState([]);
  const [queriedListings, setQueriedListings] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getAllListings();
      setAllListings(listings);
      // setQueriedListings(listings);
    };
    fetchListings();
  }, []);
  // const handleSort = (type) => {
  //   setSortType(type);
  //   switch (type) {
  //     case "name-ascending":
  //       setQueriedListings(AZ(queriedListings));
  //       break;
  //     case "name-descending":
  //       setQueriedListings(ZA(queriedListings));
  //       break;
  //     case "price-ascending":
  //       setQueriedListings(lowestFirst(queriedListings));
  //       break;
  //     case "price-descending":
  //       setQueriedListings(highestFirst(queriedListings));
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // const handleSearch = (e) => {
  //   const newQueriedListings = allListings.filter((listing) =>
  //     listing.name.toLowerCase().includes(e.target.value.toLowerCase())
  //   );
  //   setQueriedListings(newQueriedListings, () => handleSort(sortType));
  // };

  // const handleSubmit = (e) => e.preDefault();

  // const listingsJSX = allListings.map((listing, index) => (
  //   <ListingCard
  //     listing={listing}
  //     id={listing._id}
  //     name={listing.name}
  //     imgURL={listing.imgURL}
  //     price={listing.price}
  //     key={index}
  //   />
  // ));

  return (
    <Layout user={props.user}>
      <div>
        {/* <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} /> */}
        <div className="listcard">
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
      </div>
    </Layout>
  );
};

export default Listings;
