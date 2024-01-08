import { restaurantList } from "../utils/mockData"
import RestaurantCard from "./RestaurantCard"

const Body = () => {
    return(
        <div className = "body">
            <div className="search">
                {/* <input
                    className = "search-input"
                    value

                >
                </input> */}
                Search
            </div>
            <div className="res-container">
                {
                    restaurantList.map((restaurant)=>  (
                        <RestaurantCard key={restaurant.data.id} resData = {restaurant}/>
                    ))
                }
            </div>
        </div>
        
    )
}
export default Body