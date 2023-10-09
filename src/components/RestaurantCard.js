import { CDN_URL} from '../utils/constants'

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.data;


  return (
    <div
      className="restaurant-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="Res-logo"
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(" , ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>₹{costForTwo / 100} For Two</h5>
      <h5>{deliveryTime} mins</h5>
    </div>
  );
};

export default RestaurantCard;
