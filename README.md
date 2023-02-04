## Namaste React Course - Session 11 - Data is the enw oil - 29/01/2023
- React Dev Tool can help us to know state and props of a Component
- React context can be used to inject data throughout the application without prop drilling
- We cannot use "var" for this purpose because React will not "track" it similar to how it does for state, context, etc.
- How to use context:
    - in a new file (e.g. UserContext.js) create initial context using React.createContext and pass initial state object as follows:
    ```
    const UserContext = createContext({
        name: 'Dummy Name',
        email: 'dummy.name@email.com'
    })
    ```
    - Then use React.useContext in whichever component you want to access this value, and pass the context created earlier to it, as follows:
    ```
    const user = useContext(UserContext);
    ```
    - In order to modify the context, you will need to use Provider at the appropriate parent component and pass it the value as follows:
    ```
    // AppLayout.js
    <UserContext.Provider value={{ user, setUser }}>
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
    </UserContext.Provider>
    ```
    Note: We have added setUser function which will set context data
