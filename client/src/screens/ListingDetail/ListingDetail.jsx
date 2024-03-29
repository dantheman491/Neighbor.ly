import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import {
  // getAllListings,
  getOneListing,
  deleteListing,
} from "../../services/listings";
import "./ListingDetail.css";
import { useParams, Redirect, useHistory } from "react-router-dom";
import Review from "../../components/Review/Review";
import { getAllReviews } from "../../services/reviews";

const ListingDetail = ({ user }) => {
  // const [allListings, setAllListings] = useState([]);
  const [listing, setListing] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const params = useParams();
  const { id } = params;
  const history = useHistory();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchListing = async () => {
      const listing = await getOneListing(id);
      const reviews = await getAllReviews(id);
      setListing(listing);
      setReviews(reviews);
    };
    fetchListing();
  }, [id]);
  console.log(listing);

  // useEffect(() => {
  //   const fetchListings = async () => {
  //     const listings = getRandom(await getListings());
  //     setAllListings(listings);
  //   };
  //   fetchListings();
  // }, [id]);

  // const getRandom = (arr) => {
  //   let result = [];
  //   for (let i = 0; result.length < 4; i++) {
  //     let random = arr[Math.floor(Math.random() * arr.length)]; // grab a random listing
  //     if (random._id !== id && !result.includes(random)) {
  //       result.push(random);
  //     }
  //   }
  //   return result;
  // };

  const handleDelete = async () => {
    await deleteListing(listing.id);
    setIsUpdated(!isUpdated);
  };

  // const buttons = (
  //   <div className="edit-buttons">
  //     <button
  //       className="edit-button"
  //       onClick={() => history.push(`/edit-listing/${listing.id}`)}
  //     >
  //       Edit
  //     </button>
  //     <button className="delete-button" onClick={() => handleDelete()}>
  //       Delete
  //     </button>
  //   </div>
  // );

  if (isUpdated) {
    return <Redirect to="/listings" />;
  }

  return (
    <Layout user={user}>
      <section className="product-details">
        <div className="listing-image-container">
          <img
            src={listing.img_url}
            alt={listing.item_title}
            className="listing-image"
          />
        </div>
        <div className="listing-details-container">
          <h2 className="detail-title">{listing.item_title}</h2>
          <h5 className="price-detail">Price: &nbsp;{listing.price}</h5>
          <button className="buy-button" onClick={() => history.push("/buy")}>
            Borrow Now
          </button>
          <div className="details-container">
            <hr className="linebreak"></hr>
            <div className="detail-block">
              <p className="detail-label">Details</p>
              <p className="detail-description">{listing.description}</p>
            </div>
          </div>
          {user && user.id === listing.user_id ? (
            <div className="edit-buttons">
              <button
                className="edit-button"
                onClick={() => history.push(`/edit-listing/${listing.id}`)}
              >
                Edit
              </button>
              <button className="delete-button" onClick={() => handleDelete()}>
                Delete
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </section>

      {reviews?.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </Layout>
  );
};

export default ListingDetail;
