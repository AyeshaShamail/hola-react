1. Why and when do we need lazy()?
   -- Lazy loading is a technique used in React to improve the performance of web applications by delaying the loading of components until they are actually needed. This is particularly useful when dealing with large applications where loading all components upfront can result in slower initial load times. We need lazy loading when:

   1. The application has a large number of components.
   2. Some components are not immediately required on the initial render.
   3. Improving the initial load time of the application is a priority.

2. What is suspense?
   -- Suspense is a feature in React that allows components to suspend rendering while they wait for some asynchronous data to resolve, such as data fetching or lazy-loaded components. Suspense enables better handling of loading states and improves the user experience by displaying fallback content (e.g., loading spinners) while waiting for the data to load.

3.Why we get this error: `A componnet suspended while responding to synchronous input. This will cause the UI to be replaced with the loading indicator. To fix, updates that suspend should be wrapped with startTransition` How does suspense fix the error?
-- This error occurs when a component suspends while responding to synchronous user input, which can lead to a poor user experience as the UI freezes or displays loading indicators unexpectedly. Suspense helps fix this error by allowing updates that may suspend to be wrapped in the startTransition function, which defers rendering updates until after the user input has been processed, preventing the UI from freezing or displaying loading indicators prematurely.

4.  Advantages and disadvantages of using this code splitting pattern?

    `Advantages:`

    1. Improved initial load time: Lazy loading allows for the splitting of code into smaller chunks, reducing the initial bundle size and improving load times.
    2. Better user experience: By loading components only when needed, the user experiences faster page loads and reduced waiting times.
    3. Optimal resource utilization: Lazy loading helps optimize resource utilization by loading resources asynchronously, allowing for more efficient use of system resources.

    `Disadvantages:`

    1. Complexity: Implementing lazy loading and suspense adds complexity to the codebase, especially for developers who are not familiar with these concepts.
    2. Potential for bugs: Lazy loading introduces potential points of failure, such as incorrect code splitting or handling of loading states, which can result in bugs if not implemented correctly.
    3. Increased development time: Implementing lazy loading and suspense may require additional development time and effort, especially when retrofitting existing codebases.

5.  When do we and why do we need suspense?
    -- We need suspense when our application relies on asynchronous data fetching or lazy loading of components. Suspense helps manage the loading states more effectively and provides a better user experience by displaying fallback content while waiting for the data to resolve. Some scenarios where suspense is needed include:

        1. `Data fetching with APIs`: When fetching data from an external API, there may be a delay in receiving the data. Suspense allows us to handle this loading state gracefully.
        2. `Lazy loading components`: When components are split into smaller chunks and loaded lazily, suspense helps manage the loading states and ensures a smooth transition between the loading and loaded states.
        3. `Code-splitting for performance optimization`: When optimizing performance by splitting code into smaller bundles, suspense helps handle the loading states of these bundles and provides a better user experience.

    Overall, suspense is essential for managing asynchronous behavior in React applications and improving the overall user experience.
