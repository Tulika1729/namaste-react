import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const {name, avgRating, cuisines, cloudinaryImageId, costForTwo, deliveryTime} = resData?.data
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img
                className="res-logo"
                src= {CDN_URL + cloudinaryImageId} 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(",","")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo/100} For Two</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard