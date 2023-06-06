## Learing React from scratch
1. Firstly create a html file named index.html
2. Add CDN links in the bottom of your `<body></body>` part
    ```html
    <body>

        <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
        <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

    </body>
    ```
3. After this create a `<div>` with `id="root"` inside the body tag bofore the CDN links.
    ```html
    <body>
        <div id="root"></div>

        <script ...></script>
        <script ...></script>

    </body>
    ```
4. Now we are ready to use react in this `index.html`.
5. Create a `<script>` element in the bottom of `<body>`
    ```html
    <body>
        <div id="root"></div>

        <script ...></script>
        <script ...></script>

        <script>
            //React code goes here
        </script>

    </body>
    ```

6. Now inside this new `<script>` we can start writing react code.
7. Create an element `<h1>` using react
    ```html
    <script>
        //React code goes here

        const heading = React.createElement("h1", {}, "Hello From React");
    </script>
    ```
8. Now we have to find a place where we can show this `<h1>`
9. Now we can use `<div id="root"></div>`.
10. So, target the `<div>` with `id="root"` using react
    ```html
    <script>
        ...

        const root = ReactDOM.createRoot(document.getElementById("root"))
    </script>
    ```
11. Now the `<div>` with `id="root"` is targeted.
12. Now render the `heading` inside this `root`.
    ```html
    <script>
        ...

        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);
    </script>
    ```

## Hurray! You have created the first project using react 🎉