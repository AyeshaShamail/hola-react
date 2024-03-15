import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-orange-200 rounded-lg hover:bg-orange-300">
      <img
        className="rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt="Res-logo"
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h5>{cuisines.join(" , ")}</h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla?.slaString}</h5>
    </div>
  );
};

export default RestaurantCard;
