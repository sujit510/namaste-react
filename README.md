## Namaste React Course - Session 12 - Lets build store - 04/02/2023
- Redux toolkit is the new and simplified way of writing Redux logic
- It helps to define a **global store** with **slices** to hold data of various parts of application
- We need to **dispatch an action** in order to do any modification to data
- That action invokes a function which actually does the modifcation to slice of data. This function is called **Reducer**
UI Event (e.g. Click) => dispatch Action => invokes reducer function => updates slice of store
- We use **selector** to read the slice data.
- npm install @reduxjs/toolkit
- npm i react-redux

- configureStore is a RTK function which creates and returns a store
```export const store = configureStore()```
- we pass this store as store prop to Provider which is a component given by react-redux
- we create a slice object using createSlice (provided by RTK) and pass config params like name, initialState, reducers, etc.
- reducer is a function which accepts 2 params - state and action
    - state is the store state for this slice
    - action has payload which is the data passed while dispatching the action
- slice needs to be exported as sliceObject.reducer. Because reducer is combination of all reducers defined under this slice
```export default cartSlice.reducer;```
- you need to also export the individual reducers for dispatching as:
```export const { addItem, clearCart, removeItem } = cartSlice.actions;```
- Now we pass ```cartSlice.reducer``` to ```configureStore``` method as a value to ```reducer``` key, as follows:
```
configureStore({
    reducer: {
        cart: cartSlice
    }
})
```
