import { useState } from "react";
import { getRestautantInfo } from "../service/restaurants";

const useRestaurant = (restaurantId) => {
    const [restrauntInfo, setRestrauntInfo] = useState({});
    getRestautantInfo(restaurantId)
        .then(setRestrauntInfo)

    return restrauntInfo;
}

export default useRestaurant;