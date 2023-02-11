import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../utils/store";
import { Header } from "../Header";
import { StaticRouter } from "react-router-dom/server"

test( "Logo should load on rendering header", () => {
    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={ store }>
                <Header />
            </Provider>
        </StaticRouter>
    );
    // Check if logo present
    const logo = header.getAllByTestId("logo");
    expect(logo[0].src).toBe("http://localhost/dummyLogo.png");
} );

test( "Online should load as Green on rendering header", () => {
    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={ store }>
                <Header />
            </Provider>
        </StaticRouter>
    );
    // Check if logo present
    const online = header.getByTestId("online-status");
    expect(online.innerHTML).toBe("✅ Online");
} );

test( "Cart should load with count 0 on rendering header", () => {
    // Load Header
    const header = render(
        <StaticRouter>
            <Provider store={ store }>
                <Header />
            </Provider>
        </StaticRouter>
    );
    // Check if logo present
    const cartCount = header.getByTestId("cart-count");
    expect(cartCount.innerHTML).toBe("0 items");
} );
