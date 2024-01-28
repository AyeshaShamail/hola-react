import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Super-powerful variable or state variable which are called hooks
  // setListOfRestaurants is used to update the list and is the second parameter of the array.
  const [listOfRestaurants, setListOfRestaurants] = useState();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9029804&lng=77.6241936&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  };
  // Above is same as Array destructuring which is done below //

  // const arr = useState(resList);
  // const [ListOfRestaurants, setListOfRestaurants] = arr;

  // or same as //

  // const ListOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1];

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the restraunt cards and update the UI
              //Need search text
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {listOfRestaurants?.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
