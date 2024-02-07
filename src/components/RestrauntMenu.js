import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

// useEffect is a named libarary
const RestrauntMenu = () => {
  // Now to load,store the data we need state variables
  // when data updates, automatically update the UI

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu(); //Making Api call
  }, []);
  //It has 2 args, a call back function and optional arg, if empty(UseEffect called every time component renders). use empty dependency array instead.
  // Since use effect has empty dependency array, it will be called once after initial render
  // How to make an api call fetch menu by creating an async function(arrow function).
  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json(); //converting data to JSON
    // console.log("JSON:", json);
    // as soon as I make data call, got JSON, will fill resInfo with the JSON
    setResInfo(json.data);
  };

  if (resInfo === null) return;
  <Shimmer />;

  //destructing it
  const { name, cuisines, costForTwoMessage, avgRatingString } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

  console.log(itemCards);

  //Whenever using map, always use a key

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(",")} - {costForTwoMessage} - {avgRatingString}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{"₹"}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
