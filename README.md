## Namaste React Course - Session 1 - Inception - 12/24/2022

#### Notes:
1. Before React there was Javascript APIs needed to be used for DOM manipulation, like adding a h1 tag inside a div on the go.
    ```
    const heading = document.createElement("h1");
    heading.innerHTML = "Namaste React!!";
    document.getElementById("root").appendChild(heading);
    ```
    - For small code it was feasible. But as your page grows and more and more dynamic behaviour is needed, doind DOM manipulation through Javascript APIs is no more feasible.
    
2. Thats when the need of a framework (Angular) or library(React) arised, which internall handles DOM manipulation
3. React is a library because it can be used directly inside a HTML file by importing through CDN links provided on React docs, like in this example.
4. In this exapmle we import 2 CDN links. 
```
<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
```
5. Those scripts are Javascript code that defines 2 objects - `React` and `ReactDOM`.
React works across web and mobile (React Native).
    - `React` object is kind of Core object of React.
    - `ReactDOM` object is one that handles DOM manipulations.
6. `React` has `createElement` method which accepts following 3 parameters and returns a DOM element.
    - **type**: This is the type of DOM element to be created. It can be an html tag ("h1", "div", etc), a component (class or function) or a React fragment
    - **props**: attributes object passed to the element we are trying to create. (e.g. style, id, class). Its just that here few of the attribute names may differ from how they are used in simple html. Like instead of `class`, you would need to use `className` (since `React` assumes `class` as reserved keyword for *JS class*) and most of the other attributes, use camelCase instead of kebab-case. E.g. we need to use `onClick` instead of `on-click`.
    - **children**: This is optional property where you can specify the elements that you want to render as child of the element you are trying to create. It can be another element or simply a string text that you want to render.
    e.g.
    ```
    const heading = React.createElement("h1", { className: "my-class" }, "Namaste Everyone!");
    ```
7. The DOM element returned by `React.createElement` needs to be rendered in browser. So we need to have a root inside which we can inject this. So first we would create this root element using `ReactDOM.createRoot` to which we pass reference to our existing root div.
```
<!-- HTML -->
<div id="root">
...
// JS
const root = ReactDOM.createRoot(document.getElementById("root"));
```
React will create a root for the div, and **take over managing the DOM** inside it.
It returns an object with 2 methods, `render` and `unmount`.

8. Finally, inject the element returned by `createElement` inside the root object created above, by using render method of root element.
```
root.render(heading);
```

Next: Click here to go to next session notes.