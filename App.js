import React from 'react';
import ReactDOM from 'react-dom';

const heading1 = () => (
    <h3 id="title" key="h2">
        FC Heading
    </h3>
)

const heading2 = (
    <h3 id="title" key="h2">
        Normal Heading
    </h3>
)

const Container = () => (
    <h1 id="title" key="h2">
        <heading1 />
        {heading2}
        Inside container
    </h1>
)

const root = ReactDOM.createRoot( document.getElementById( "root" ) );
console.log("Hello world")
root.render( <Container /> );