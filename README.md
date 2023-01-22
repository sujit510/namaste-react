## Namaste React Course - Session 3 - Talk is cheap, show me the code - 07/01/2023
- We can use react even only in footer if needed, we just need to use ReactDOM.createRoot and pass Footer DOM as parameter
- Never ever write code without planning
- Always create a AppLayout component which will have Header, Body, Footer.

    - Header
        - Logo
        - Navbar
        - Cart
    - Body
        - Search Bar
        - RestaurantList
            - RestaurantCard
                - Image
                - Name
                - Rating
                - Cusines
    - Footer
        - Links
        - Copyright

- JSX expression or component should ALWAYS have ONLY ONE PARENT. To achieve this you can use any HTML element like div or span or if you don't want to inject extra element, you can use React.Fragment or <></>
- <></> is shorthand for React.Fragment
- Config Driven UI: It is a recommended way of designing the solution where you send some config from backend and based on which UI is rendered.




15-Jan-23
- createBrowserRouter is used to create router config (which path should take to which component)
- RouterProvider is used which accepts router config through "router" prop