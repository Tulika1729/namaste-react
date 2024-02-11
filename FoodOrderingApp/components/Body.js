import { useState } from "react";
import { restaurantList } from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"


const Body = () => {
    const [resList, setResList] = useState(restaurantList);

    const handleClick = () => {
        const topRes = restaurantList.filter((res)=> res.data.avgRating>4)
        setResList(topRes);
    }
    return(
        <div className = "body">
            <div className="search">
               <button className="filter-btn"
                    onClick={handleClick}
               >
                Top Rated Restaurants
               </button>
            </div>
            <div className="res-container">
                {
                    resList.map((restaurant)=>  (
                        <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>
                    ))
                }
            </div>
        </div>
        
    )
}
export default Body