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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

/* 
    This root.render() function change the Heading (javascript object) into the html element with all its neccessary data.
*/