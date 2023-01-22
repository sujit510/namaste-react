## Namaste React Course - Session 9 - Optimizing app - 22/01/2023
- Hooks:
    - Purpose:
        - ReUsability,
        - Readability
        - Separation of concerns

- Always create a hook in a new file and name the hook and file starting from "use"
- Hook can be considered a Functional Component which may not return JSX

###NOTE: Its recommended to export as default when we have single exportable entity in a file. If more than one entity, use named export.

- Chunking / Code Splitting / Lazy Loading / On Demand Loading / Dynamic Import
    - For this, you should not import normally, instead use React.lazy
    - React.lazy accepts a function inside which, we need to import and return the desired module
    - Output of React.lazy is an asyn loaded component which needs to be passed to route config.
    - This will initially throw error because it tries to load component while its being loaded in browser. But once you go back to home and come back, then it renders the component correctly.
    - To avoid this, we need to wrap the lazily loaded component inside React.Suspense while passing to route config.
    - But when the lazily loaded component takes time to be imported due to being large in size and/or slow internet, we might see blank space for that much time, so we can pass a prop "fallback" to Suspense and pass our Shimmer or Loader component to it.
    - Never lazy-import any component INSIDE any other component like follows:
    ```
    const AppLayout = () => {
        const InstaMart = lazy(() => import('./components/InstaMart'));
        return <SomeJSX />
    }
    ```

