What is Emmet?

 Emmet is the essential toolkit for web-developers and a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code. By using Emmet, email designers type less, saving both keystrokes and time when building a campaign.

 2. Difference between library and framework

A framework is used for building and deploying an application quickly. When we use a framework, we can use resources to facilitate faster development and a greater user experience. A library is used to enhance the functionality of an application. If we develop our own library, we can use the functions in many applications.

3. What is CDN and what is the use of it?

A content delivery network (CDN) is a network of interconnected servers that speeds up webpage loading for data-heavy applications. CDN can stand for content delivery network or content distribution network. When a user visits a website, data from that website's server has to travel across the internet to reach the user's computer. If the user is located far from that server, it will take a long time to load a large file, such as a video or website image. Instead, the website content is stored on CDN servers geographically closer to the users and reaches their computers much faster.

The primary purpose of a content delivery network (CDN) is to reduce latency, or reduce the delay in communication created by a network's design.A content delivery network (CDN) improves normal website functions and increases customer satisfaction

Benefits of CDN are -
Reduce page load time
Reduce bandwidth costs
Increase content availability
Improve web security

4. Why is React known as “REACT”?

React is a JavaScript library for building user interfaces that was developed by Facebook and was released in 2013.
The name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or “reactive.” 
The library was designed to “react” to changes in data.When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. 
The name “React” reflects this reactive nature of the library.
The idea behind React is to build reusable components that can be rendered on the front-end, rather than writing a new piece of code every time you need to display something on the screen.
This makes it easier and more efficient to build complex user interfaces.React is designed to be easy to use and learn, and it is widely popular among developers because of its performance and flexibility.

5.What is Crossorigin in the script tag?

The crossorigin attribute sets the mode of the request to an HTTP CORS Request.
Web pages often make requests to load resources on other servers. Here is where CORS comes in.
A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.
CORS is used to manage cross-origin requests.
CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.

6. What is the difference between React and ReactDOM?
The react package contains React.createElement(), React.Component, React.Children, and other helpers related to elements and component classes. You can think of these as the isomorphic or universal helpers that you need to build components. 
The react-dom package contains ReactDOM.render(), and in react-dom/server we have server-side rendering support with ReactDOMServer.renderToString() and ReactDOMServer.renderToStaticMarkup().

7. What is the difference between react.development.js and react.production.js files via cdn?

In React, there are two main versions of the library that you can include via a Content Delivery Network (CDN): `react.development.js` and `react.production.js`. These files serve different purposes and are intended for use in different environments:

1. `react.development.js`:
   - This file is intended for development environments.
   - It includes additional warning messages and helpful error messages that can assist developers in debugging their code.
   - It has a larger file size compared to the production version because of the additional development-related code.
   - Using this version is beneficial during development as it provides better error messages and warnings to help you catch and fix issues in your code.

2. `react.production.js`:
   - This file is intended for production environments.
   - It has been optimized for performance and has a smaller file size compared to the development version.
   - It omits various development-only checks and warning messages to improve runtime performance.
   - Using this version in production is recommended because it results in a smaller bundle size and better performance compared to the development version.

When developing a React application, you typically use `react.development.js` to aid in debugging and troubleshooting issues. However, when deploying your application to a production environment, it's advisable to switch to `react.production.js` to ensure better performance and reduce unnecessary overhead from development-related code.

It's important to note that this separation of development and production versions is not exclusive to React; many JavaScript libraries and frameworks offer similar dual versions for different use cases. Always use the appropriate version depending on your environment to achieve the best balance between development convenience and production performance.

8. What are Async and defer?
async Attribute:
When you include a <script> element with the async attribute in your HTML document, it tells the browser to download the script file asynchronously while not blocking the HTML parsing.
Asynchronous scripts do not halt the HTML parsing, allowing other resources like images and stylesheets to continue downloading and rendering.
The script will be executed as soon as it's downloaded and becomes available, which may occur before the HTML parsing is complete.
This is typically used for scripts that are not dependent on the page's structure or other scripts.
Ex - <script src="index.js" async></script>

defer Attribute:
The defer attribute, when used in a <script> element, also tells the browser to download the script file asynchronously. However, it defers the execution of the script until after the HTML parsing is complete.
Deferred scripts will be executed in the order they appear in the HTML document, just before the closing </body> tag.
This is useful when the script relies on the page's structure or other scripts that may not have loaded yet.
Ex - <script src="index.js" defer></script>

In summary, both async and defer allow scripts to be downloaded without blocking the rendering of the HTML page, but they differ in terms of when the script is executed. async scripts are executed as soon as they are downloaded, potentially before the HTML parsing is finished, while defer scripts are executed after the HTML parsing is complete but before the </body> tag. The choice between them depends on your specific use case and the dependencies your scripts may have on the page's structure and other resources.






