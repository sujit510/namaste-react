import "@testing-library/jest-dom"
import { act, fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../utils/store";
import { StaticRouter } from "react-router-dom/server"
import { Body } from "../Body";
import { RESTAURANT_DATA } from "../../mocks/restaurantData";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(RESTAURANT_DATA)
    })
})

test( "It should be able to search by text", () => {
    // Load Body
    const body = render(
        <StaticRouter>
            <Provider store={ store }>
                <Body />
            </Provider>
        </StaticRouter>
    );
    // Check if logo present
    const searchBtn = body.getByTestId("search-btn");
    // expect(cartCount.innerHTML).toBe("0 items");
    console.log("searchBtn::", searchBtn);
    expect(searchBtn).toBeInTheDocument();
} );

// test("Should search for string 'food' ", () => {
//     // Load Body
//     const body = render(
//         <StaticRouter>
//             <Provider store={ store }>
//                 <Body />
//             </Provider>
//         </StaticRouter>
//     );
//     // Check if logo present
//     const searchBtn = body.getByTestId("search-btn");
//     const inputBox = body.getByTestId("search-input");
//     let restaurants;
    
//     act(() => {
//         /* fire events that update state */
//         fireEvent.change(inputBox, { target: { value: "food" } });
//         fireEvent.click(searchBtn);
//         restaurants = body.getByTestId("restaurants");
//         console.log('restaurants::', restaurants, 'restaurants.children::', restaurants.children);
//         expect(restaurants.children.length).toBe(3);
//     });
// });