import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard"
import Shimmer from "./Shimmer";


const Body = () => {
    const [resList, setResList] = useState([]);
    const[filteredRest, setFilteredRes] = useState([])
    const [searchTextRest, setSearchTextRest] = useState("")

    useEffect(()=>{
        fetchData();
    },[])

    const handleSearchRest = () => {
        const searchedRest = resList.filter((res) => res.info.name.toLowerCase().includes(searchTextRest.toLowerCase()));
        setFilteredRes(searchedRest);
    }
    const fetchData = async () =>{
        const data = await fetch(
            "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }

    const handleClick = () => {
        const topRes = resList.filter((res)=> res.info.avgRating > 4)
        setFilteredRes(topRes);
    }

    return resList.length === 0 ? <Shimmer/>: (
        <div className = "body">
            <div className="search">
                <div className="search-btn">
                    <input type="text" className="search-box"                             
                    value={searchTextRest}
                    onChange={(e)=>setSearchTextRest(e.target.value)}
                    >
                    </input>
                    <button className="filter-btn"
                        onClick={handleSearchRest}
                    >
                    Search
                    </button>
                </div>
                    <button className="filter-btn"
                            onClick={handleClick}
                    >
                        Top Rated Restaurants
                    </button>
            </div>
            <div className="res-container">
                {
                    filteredRest.map((restaurant)=>  (
                        <RestaurantCard key={restaurant.id} resData = {restaurant}/>
                    ))
                }
            </div>
        </div>
        
    )
}
export default Body