## Namaste React Course - Session 3 - Ignition - 01/01/2023
- Browserlist 
- Polyfills
- Babel - A JS code which reads our latest JS code (e.g. ES6 code) and converts it to browser compatible (older) JS code. It basically provides polyfills for same.
- Tree shaking is removing unwanted code
- babel-plugin-transform-remove-plugin: Should be used to remove console.log statements.
- React uses "key" to manage reconcilliation for optimizing re-render when a new elemtn is added to DOM
- Creating a complex nested and bigger HTML DOM using React.createElement is painful
e.g. if you want to have somthing like following:
```
<div>
    <h2>Heading</h2>
    <ul>
        <li>item-1</li>
        <li>item-2</li>
    </ul>
</div>
```
Then, we need to do following:
```
React.createElement( "div", {}, [
    React.createElement( "h2", {}, "Heading" ),
    React.createElement( "ul", {}, [
        React.createElement( "li", {}, "item-1" ),
        React.createElement( "li", {}, "item-2" ),
    ] ),
] );
```

To avoid this, we use JSX
- JSX is html like syntax where we can write JS code as well. The attributes in html are given as camelCased props in JSX. Like class in html becomes className in JSX, tab-index in html becomes tabIndex in JSX
- Babel is a JS library which understands this JSX.
- Babel converts JSX into React.createElement to create DOM objects which in turn are rendered as HTML in browser.
- You can check and playaround this on Babel website: https://babeljs.io/
![Tux, the Linux mascot](/assets/babel.png)
- So JSX provides readability, less code, maintainability, no-repetition
- babel gets installed along with Parcel
- A non-FC JSX needs to be given directly to render menthod like follows:
```
const Heading1 = (
    <h1 id="title" key="h2">
        Namaste React..
    </h1>
)
render(Heading1)
```
and inside curly bracket to inject inside JSX as follows:
```
const headingContainer = <div>{Heading1}</div>
render(headingContainer)
```

- But FC need to be given with angle brackets (i.e. as a tag) to render:
```
const Heading1 = () => (
    <h1 id="title" key="h2">
        Namaste React..
    </h1>
)
render(<Heading1 />)
```
and also with angle bracketsto inject inside JSX as follows:
```
const headingContainer = <div><Heading1 /></div>
render(headingContainer)
```

- Inside JSX, by using curly brackets, any JS code can be injected:
```
const Heading1 = () => (
    <h1 id="title" key="h2">
        Namaste React..
        {console.log("Inside JSX")}
    </h1>
)
```
