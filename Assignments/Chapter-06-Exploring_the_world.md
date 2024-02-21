1.  What is a Microservice?
    -- A microservice is a software development technique where an application is structured as a collection of loosely coupled, independently deployable services. Each service is responsible for a specific business functionality and can be developed, deployed, and scaled independently. Microservices communicate with each other through APIs.

2.  What is Monolith Architecture?
    -- Monolith architecture refers to a traditional approach where an entire application is built as a single, self-contained unit. All components and functionalities of the application are tightly integrated and deployed together. In a monolithic architecture, scaling and updating the application can be more challenging compared to microservices.

3.  What is the difference between Monolith and Microservice?
    -- \* Monolith architecture involves building an entire application as a single unit, while microservices architecture involves breaking down the application into smaller, independent services.

    - Monoliths are tightly integrated, while microservices are loosely coupled.
    - Monoliths are typically easier to develop initially but can become harder to maintain and scale as they grow, while microservices offer greater flexibility and scalability but require more complex deployment and management.

4.  WHy do we need a useEffect Hook?
    -- The useEffect hook in React allows us to perform side effects in functional components. Side effects may include data fetching, subscriptions, or manually changing the DOM. It's used to handle tasks that should be executed after rendering, such as fetching data from an API, updating the document title, or subscribing to external events.

5.  What is Optional Chaining?
    -- Optional chaining is a JavaScript feature that allows to safely access nested properties of an object without having to explicitly check if each property exists. It uses the `?.` syntax and short-circuits the evaluation if any intermediate property is null or undefined, preventing errors like "cannot read property 'x' of undefined".

6.  What is Shimmer UI?
    -- Shimmer UI is a technique used in user interfaces to indicate that content is loading. Instead of displaying a blank space or spinner, shimmer UI presents a subtle animation, typically a moving gradient, over the placeholder where content will be displayed. This gives users a visual clue that something is happening, improving the perceived performance of the application.

7.  What is the difference between JS expression and JS statement?
    -- In JavaScript, an expression is a piece of code that produces a value, while a statement is a larger unit of code that performs an action. Expressions can be simple (e.g., 5 + 3, myFunction()) or complex (e.g., function calls, arithmetic operations), and they can be nested within statements. Statements, on the other hand, include things like variable declarations (let x = 5;), loops (for loops, while loops), conditional statements (if, else), and function declarations.

8.  WHat is Conditional Rendering, explain with a code example
    -- Conditional rendering in React refers to the practice of rendering different components or UI elements based on certain conditions. This can be achieved using conditional statements like if or ternary operators. For example:
    function MyComponent({ isLoggedIn }) {
    return (
    <div>
    {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
    </div>
    );
    }

9.  What is CORS?
    -- CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that controls which resources a web page is allowed to request from another domain. It's a mechanism that enables servers to specify who can access their resources, preventing unauthorized cross-origin requests

10. What is async and await?
    -- `async` and `await` are JavaScript keywords used to work with asynchronous code in a more synchronous-looking manner. When a function is declared as async, it allows the use of the await keyword inside it. await is used to pause the execution of an async function until a promise is settled (resolved or rejected), allowing asynchronous code to be written in a more readable and maintainable way.

11. What is the use of `const json = await data.json();` in getRestaurants()
    const getRestaurants = async () => {
    const data = await fetch(MENU_API + resId);

        const json = await data.json();
        setResInfo(json.data);

};
-- In the provided code snippet, data.json() returns a promise that resolves to the JSON representation of the response body. By using await, the execution of the getRestaurants() function is paused until the promise returned by data.json() is resolved. Once resolved, the JSON data is extracted and stored in the json variable, which can then be used further in the function (in this case, setting the state using setResInfo).
