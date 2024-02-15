import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const { 
        name,
        avgRating = 0,
        cuisines = [],
        costForTwo,
        cloudinaryImageId = "bz9zkh2aqywjhpankb07",
        sla: { deliveryTime = 30 } = {}
      } = resData?.info || {};    
      const finalDeliveryTime = deliveryTime ?? 30;
      
    return(
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <img
            className="res-logo"
            src= {CDN_URL + cloudinaryImageId} 
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",","")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{finalDeliveryTime} minutes</h4>
    </div>
    )
}
export default RestaurantCard