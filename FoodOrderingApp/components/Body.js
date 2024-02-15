import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";


const Body = () => {
    const [resList, setResList] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handleClick = () => {
        const topRes = restaurantList.filter((res)=> res.data.avgRating>4)
        setResList(topRes);
    }

    return resList.length === 0 ? <Shimmer/>: (
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
                        <RestaurantCard key={restaurant.id} resData = {restaurant}/>
                    ))
                }
            </div>
        </div>
        
    )
}
export default Body