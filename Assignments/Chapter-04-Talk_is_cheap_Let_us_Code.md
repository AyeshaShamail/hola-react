1. Is JSX mandatory for React?
   -- No, JSX is not mandatory for React, but it is highly recommended and widely used for defining UI components in more readable and expressive way.React.createElement can be used as an alternative of JSX.

2. Is ES6 mandatory for React?
   --No, ES6 is not required for React, but it's strongly recommended as it offers modern JavaScript features that enhance code quality and readability.

3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX?
   -- These syntaxes are different ways that are used to render the React components.

   {TitleComponent}: This expression is used when you want to render the TitleComponent component as-is, without any additional elements or tags. It's essentially a shorthand way to include a component within your JSX without wrapping it in a JSX element. It is typically used when you want to render a component directly.

      <TitleComponent />

   {<TitleComponent/>}:This expression is used when you want to render the TitleComponent component as a self-closing JSX element. It's equivalent to writing <TitleComponent /> in JSX. This syntax is often used when you want to pass props to the component or if you want to include other attributes on the JSX element.

      <TitleComponent />

   {<TitleComponent></TitleComponent>}:This expression is used when you want to render the TitleComponent component as an open and close JSX element, similar to how HTML tags are used. It allows you to include child elements or content between the opening and closing tags. This syntax is useful when you need to nest other elements or components within TitleComponent.

      <TitleComponent>
      <!-- Child elements can go here -->
      </TitleComponent>

4. How can I write comments in JSX?
   -- // Single-line comments //
   {_/ Multi
   Line
   Comments /_}

5. What is <React.Fragment></React.Fragment> and <></>?
   -- <React.Fragment> and <> </> are used to group multiple elements without introducing an extra DOM element in React. They serve the same purpose, with <> </> being a shorthand syntax introduced in React 16.2.
      Both <React.Fragment> and <> </> in React are used to wrap multiple JSX elements without adding an extra parent DOM element. They are especially useful when you want to return adjacent JSX elements from a component's render method. <React.Fragment> is the long-form way to achieve this, while <> </> is a shorter, more concise syntax introduced in React 16.2. They help improve the structure and readability of your JSX code without affecting the resulting DOM structure. Use them based on your preference and compatibility with your project's React version.

6.What is Virtual DOM?
    -- It is a representation of actual DOM object.The Virtual DOM (V'DOM) is a concept used in React and other JavaScript libraries/frameworks. It's a lightweight, in-memory representation of the actual DOM elements. React uses the V'DOM to efficiently update and render UI components, minimizing direct manipulation of the real DOM, which can be slower. The V'DOM allows React to batch updates, compare changes, and make DOM updates more efficiently, resulting in better performance in web applications.

7. What is Reconciliation in React?
   -- Reconciliation in React is the process of efficiently updating the actual DOM to reflect changes in a component's state or props, using a virtual DOM (V'DOM) and a "diffing" algorithm to minimize updates.

8. What is React fiber?
   -- React Fiber is an internal re-implementation of React's core algorithm introduced in React 16, aimed at improving performance and responsiveness by enabling concurrent rendering and prioritizing updates.It's a new way of finding the diff and updating the DOM and that's how react becomes faster.

9. Why we need keys in React? When do we need keys in React?
   -- Keys in React are needed to uniquely identify and optimize the rendering of elements in lists or collections. Use keys whenever you render dynamic lists or conditionally render elements to ensure efficient updates and stable component identity.

10.Can we use index as keys in react?
   -- While it is possible to use the index as keys in React, it's generally not recommended unless you have a specific scenario where you can guarantee that the order of items in the list will never change. Using the index as keys can lead to issues and unexpected behavior in certain situations.

      Here are some reasons why using the index as keys is discouraged:

        1. **Lack of Stability**: If the list order changes (items are added, removed, or reordered), using the index as keys can lead to incorrect updates. React relies on key stability to efficiently update and reconcile elements.

        2. **Performance**: Using index as keys can impact performance, especially in large lists. React has to do more work to determine which elements need to be updated when the index is used as the key.

        3. **Limited Use Cases**: It's generally safe to use index as keys when you have a static, unchanging list. For dynamic lists, where elements may be added, removed, or reordered, it's better to use unique and stable keys.

        Instead of using index as keys, it's recommended to use unique and stable identifiers such as item IDs whenever possible. This ensures that React can accurately track elements and optimize updates, even when the list's order changes or items are added/removed. If your data source doesn't provide unique IDs, you can generate them within your application to serve as keys.

11. What is props in React?
    -- Props are normal arguments to the function.In React, "props" is a shorthand for "properties," and it refers to the mechanism for passing data from a parent component (or container) to a child component. Props are a way to make your React components dynamic and reusable by allowing them to receive and render data that can vary from one instance of the component to another.

    In React, "props" is a shorthand for "properties," and it refers to the mechanism for passing data from a parent component (or container) to a child component. Props are a way to make your React components dynamic and reusable by allowing them to receive and render data that can vary from one instance of the component to another.

    Here's a brief overview of props in React:

    Data Passing: Props are used to pass data from parent components to child components. This data can include various types of values, such as strings, numbers, objects, functions, and even other React components.

    Read-Only: Props are read-only within the child component. This means that a child component cannot modify the data passed through its props. It can only use the data for rendering or pass it further down to its own child components.

    Reactivity: When the data passed through props changes in the parent component, React automatically triggers a re-render of the child component with the updated data, ensuring that the UI reflects the latest state.

    Here's a basic example of how props are used in React:

    // ParentComponent.js
    import React from 'react';
    import ChildComponent from './ChildComponent';

    function ParentComponent() {
    const message = "Hello from ParentComponent";

    return (

    <div>
    <ChildComponent message={message} />
    </div>
    );
    }

    // ChildComponent.js
    import React from 'react';

    function ChildComponent(props) {
    return <p>{props.message}</p>;
    }

    export default ChildComponent;

    In this example, message is a prop passed from ParentComponent to ChildComponent, and it is rendered within the ChildComponent. Props are a fundamental concept in React that allows you to create reusable and dynamic components by passing data between them.

12. What is config driven UI?
    -- A "config-driven UI" refers to a user interface design or development approach where the appearance and behavior of the user interface components are primarily controlled by configuration data rather than being hard-coded into the application's codebase. This configuration data can be stored in various forms, such as JSON, YAML, XML, or database records, and it specifies how the UI components should be structured, styled, and behave.
    Config-driven UIs are commonly used in content management systems (CMS), e-commerce platforms, website builders, and other applications where UI customization and flexibility are critical. By separating the UI configuration from the codebase, these systems can adapt to changing requirements and provide a more user-friendly experience.
