export const getRestautants = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2156354&lng=72.63694149999999&page_type=DESKTOP_WEB_LISTING")
    return data.json();
}

export const getRestautantInfo = async (id) => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=23.2156354&lng=72.63694149999999&menuId=" + id)
    return data.json();
}