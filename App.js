import React from 'react';
import ReactDOM from 'react-dom';

const heading1 = React.createElement( "h1", {}, "I am header-11" );
const heading2 = React.createElement( "h2", {}, "I am header-22" );
const container = React.createElement( "div", { id: "container" }, [ heading1, heading2 ] )
const root = ReactDOM.createRoot( document.getElementById( "root" ) );
root.render( container );