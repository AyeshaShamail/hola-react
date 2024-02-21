1. What are the various ways to add images into our App? Explain with code examples
   -- 1. Using the img tag: This is the most straightforward way to add images. You simply use the <img> HTML tag and specify the src attribute with the path to your image file.
   Example - <img src="path/to/your/image.jpg" alt="Description of the image" />

-- 2. Using require in JSX: In React, you can use the require function to import images dynamically. This is useful when you want to import images dynamically or conditionally.
Example -
const myImage = require('./path/to/your/image.jpg');
<img src={myImage} alt="Description of the image" />

-- 3. You can use CSS to set the background image of an element.
Example -
const myImage = require('./path/to/your/image.jpg');
const style = {
backgroundImage: `url(${myImage})`
};

<div style={style}></div>

2. What would happen if we do console.log(useState())?
   -- If you do console.log(useState()), you will get an array with two elements. The first element is the current state value, and the second element is a function to update that state.

3. What will useEffect behave if we don't add a dependency array?
   -- If no dependency array , useEffect is called on every render cycle. which can potentially lead to performance issues, especially if the effect involves heavy computations or API calls

4. What is SPA?
   -- SPA means Single Page Applications - web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. In SPA, the page does not reload during the entire application lifecycle, resulting in a more fluid user.

5. WHat is the difference between Client Side Routing and Server Side Routing?
   -- Client Side Routing: In client-side routing, the routing logic is handled by JavaScript in the browser. When a user navigates between pages, the browser doesn't request new pages from the server; instead, it updates the view by rendering different components based on the URL. React Router is a popular library for implementing client-side routing in React applications.

   -- Server Side Routing: In server-side routing, the routing logic is handled by the server. When a user navigates between pages, the browser sends requests to the server, which then responds with the appropriate HTML for each route. Each navigation action triggers a server request, causing the entire page to reload. Traditional web applications often use server-side routing.
