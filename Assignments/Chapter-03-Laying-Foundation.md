1. What is JSX?
-- It is HTML like, JSX is a javascript syntax which is easier to create elements, it's not part of React. Because both are different. React can be built without JSx but using JSX can make it easy.
    JSX is a convention where we merge JS and HTML files at one place.
    JSX is not html inside Javascript but it's not. It is just HTML/XML like syntax.
    JSX is valid javascript or pure javascript.
    A popular JavaScript library for building user interfaces. JSX allows you to write HTML-like code within your JavaScript code, making it easier to create and manipulate the user interface in a declarative and component-based way.

2. What are superpowers of JSX?
-- 
Here are some of the "superpowers" of JSX:

    1.Combines HTML and JavaScript: JSX allows you to write HTML-like code directly within your JavaScript code. This makes it easier to work with user interfaces in a familiar HTML format.
   
    2.Declarative Syntax: JSX promotes a declarative approach to building user interfaces, where you describe what the UI should look like based on the current state, and React takes care of updating the DOM to match that description.

    3.Component-Based Development: JSX is the foundation for creating React components. You can define reusable UI components and compose them together to build complex interfaces. This component-based approach promotes modularity and reusability in your code.
    
    4. Dynamic Values: JSX allows you to embed JavaScript expressions within curly braces {}. This enables you to inject dynamic data and logic into your UI. For example, you can render dynamic content or calculate styles based on component state or props.
    
    5. Conditional Rendering: You can use JavaScript conditional statements like if and ternary operators within JSX to conditionally render elements. This is essential for displaying different content based on application state.
    
    6.Map and Looping: JSX makes it easy to map over arrays or iterate through data to render lists of items. You can use the map function to generate elements dynamically based on your data.

    7.Accessibility: JSX provides a way to set accessibility attributes like aria-label, aria-hidden, and alt for images, helping you create more accessible web applications.
    
    8.Inline Styling: JSX allows you to apply inline styles using the style attribute. You can use JavaScript objects to define styles dynamically based on component state or props.

    9.Integration with Tools: JSX is compatible with various build tools and linters, which can perform static analysis and catch potential issues in your code. Tools like Babel transpile JSX into plain JavaScript that browsers can understand.
    
    10.Tooling Support: IDEs and code editors provide excellent support for JSX, offering syntax highlighting, autocompletion, and error checking, which enhances the developer experience.

    11.JSX Transpilation: JSX is not directly understood by browsers, so it needs to be transpiled into plain JavaScript using tools like Babel. This transpilation step allows you to write modern JavaScript code with JSX and ensure compatibility with older browsers.
   
    12.Ecosystem and Community: JSX is widely used in the React ecosystem, and it benefits from a large and active community. This means you have access to a wealth of libraries, components, and resources to help you build powerful user interfaces.
    
In summary, JSX is a powerful tool that simplifies the process of building user interfaces in React by providing a familiar HTML-like syntax while leveraging the full capabilities of JavaScript. Its ability to seamlessly integrate dynamic data, components, and conditional rendering makes it a cornerstone of modern web development with React.

3. How to write various tags in JSX? Ex image tag, anchor tag?
-- In JSX (JavaScript XML), you can write HTML-like tags to create elements in your React applications. Here's how to write various tags in JSX:

        1. **Image Tag (`<img>`):**
        To create an image element in JSX, you can use the `<img>` tag like this:

        ```jsx
        <img src="image-url.jpg" alt="Description" />
        ```

        - `src` is used to specify the image source URL.
        - `alt` is used to provide alternative text for the image.

        2. **Anchor Tag (`<a>`):**
        To create a link (anchor) element in JSX, you can use the `<a>` tag like this:

        ```jsx
        <a href="https://example.com">Visit Example</a>
        ```

        - `href` is used to specify the URL the link points to.

        3. **Heading Tags (`<h1>`, `<h2>`, `<h3>`, etc.):**
        To create heading elements in JSX, you can use the `<h1>`, `<h2>`, `<h3>`, and so on, tags like this:

        ```jsx
        <h1>This is a Heading 1</h1>
        <h2>This is a Heading 2</h2>
        <h3>This is a Heading 3</h3>
        ```

        4. **Paragraph Tag (`<p>`):**
        To create a paragraph element in JSX, you can use the `<p>` tag like this:

        ```jsx
        <p>This is a paragraph of text.</p>
        ```

        5. **List Tags (`<ul>`, `<ol>`, `<li>`):**
        To create unordered lists (`<ul>`) and ordered lists (`<ol>`) with list items (`<li>`) in JSX, you can do the following:

        ```jsx
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
        </ul>

        <ol>
            <li>First item</li>
            <li>Second item</li>
        </ol>
        ```

        6. **Div Tag (`<div>`):**
        The `<div>` tag is commonly used for grouping and styling elements. You can create a `<div>` element like this:

        ```jsx
        <div className="container">
            <!-- Content goes here -->
        </div>
        ```

   - `className` is used to specify CSS classes for styling.

    These are just a few examples of how to write various HTML-like tags in JSX. JSX allows you to create and nest elements in a way that closely resembles HTML, making it easier to build user interfaces in React. Remember to import React at the top of your file if you're using JSX in a React component:

    ```jsx
    import React from 'react';

    function MyComponent() {
    return (
        <div>
        {/* JSX elements go here */}
        </div>
    );
    }

    export default MyComponent;
    ```

4. What is the role of type attribute in script tag? What options can I use there?
-- The `type` attribute in the `<script>` tag specifies the content's scripting language or format. Common options include:

 1. **JavaScript (Default):** You can omit `type` for standard JavaScript.
 2. **ES6 Modules:** Use `type="module"` for ES6 module scripts.
 3. **JSON Data:** Use `type="application/json"` to embed JSON data.
 4. **Other Languages:** Specify MIME types for languages like PHP or Ruby.
 5. **Custom Types:** Define custom MIME types for specialized languages.
 6. **Deprecated Types:** Older HTML versions used `"text/javascript"` for JavaScript.

5.{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?
-- These syntaxes are different ways that are used to render the React components.

**{TitleComponent}**: This expression is used when you want to render the TitleComponent component as-is, without any additional elements or tags. It's essentially a shorthand way to include a component within your JSX without wrapping it in a JSX element. It is typically used when you want to render a component directly.

    <TitleComponent />

**{<TitleComponent/>}**:This expression is used when you want to render the TitleComponent component as a self-closing JSX element. It's equivalent to writing <TitleComponent /> in JSX. This syntax is often used when you want to pass props to the component or if you want to include other attributes on the JSX element.

    <TitleComponent />

**{<TitleComponent></TitleComponent>}**:This expression is used when you want to render the TitleComponent component as an open and close JSX element, similar to how HTML tags are used. It allows you to include child elements or content between the opening and closing tags. This syntax is useful when you need to nest other elements or components within TitleComponent.

    <TitleComponent>
    <!-- Child elements can go here -->
    </TitleComponent>


