const heading = React.createElement("h1", { id: "heading"}, "Hello from React");

/* 
    heading -> Javascript Object which look like this

    $$typeof: Symbol(react.element)
    key: null
    props: {children: 'Hello from React'}
    ref: null
    type: "h1",
    ...
*/

/* 
    What if we want to create a html structure which look like this using react
    <div id="parent">
        <div id="child">
            <h1>I am the h1 tag</h1>
        </div>
    </div>
*/

const parent = React.createElement("div", {id: "parent"}, React.createElement("div", {id: "child"}, React.createElement("h1", {}, "I am the h1 tag") ) );

// console.log(parent);


/* 
    What if we want to add sibling of h1 means : 
    <div id="parent">
        <div id="child">
            <h1>I am the h1 tag</h1>
            <h2>I am the h2 tag</h2>
        </div>
    </div>
*/
const newParent = React.createElement("div", {id: "parent"}, React.createElement("div", {id:"child"}, [React.createElement("h1", {}, "I am the h1 tag"), React.createElement("h2", {}, "I am the h2 tag")]));

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(newParent);


/* 
    This root.render() function change the Heading (javascript object) into the html element with all its neccessary data.
*/