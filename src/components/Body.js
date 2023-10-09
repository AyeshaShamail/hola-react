import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Super-powerful variable
  // setListOfRestaurants is used to update the list and is the second parameter of the array.
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  // Above is same as Array destructuring which is done below //

  // const arr = useState(resList);
  // const [ListOfRestaurants, setListOfRestaurants] = arr; 

  // or same as //
  
  // const ListOfRestaurants = arr[0];
  // const setListOfRestaurants = arr[1];
   

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top-Rated Restaurant
        </button>
      </div>
      <div className="restaurant-container">
        {ListOfRestaurants.map((restaurant, index) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
