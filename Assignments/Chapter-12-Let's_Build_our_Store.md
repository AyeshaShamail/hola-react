1. ## useContext vs Redux

   -- useContext is a React Hook used for accessing the context object that's been created using React.createContext. It allows you to consume that context within a functional component. It's primarily used for passing down props without having to manually pass them through every level of the component tree.
   Redux, on the other hand, is a state management library for JavaScript applications. It provides a global state store that can be accessed and modified from any part of the application. Redux helps manage application state in a predictable way, making it easier to debug and trace the flow of data.

2. ## Advantages of using Redux Toolkit over Redux
   --Redux Toolkit is a set of utility functions and tools to simplify the process of writing Redux code. It provides built-in solutions for common Redux use cases, such as creating reducers, action creators, and configuring the store.
   Some advantages of using Redux Toolkit over plain Redux include reduced boilerplate code, improved developer experience with its simplified API, built-in immutability handling, and optimized performance.

## 3.Explain dispatcher

--In Redux, a dispatcher is a function responsible for dispatching actions to the Redux store. When an action is dispatched, the dispatcher sends it to the Redux store, where it is processed by the reducers to update the state of the application.

4. ## Explian Reducer

   --A reducer is a pure function in Redux that specifies how the application's state changes in response to actions sent to the Redux store. It takes the current state and an action as arguments and returns the new state. Reducers are combined together to form the root reducer, which manages the entire state tree of the application.

5. ## Explain Slice

   --In Redux Toolkit, a slice is a function that automatically generates action creators and reducers for a specific slice of the Redux store's state. It encapsulates the logic for updating a portion of the state and makes it easier to manage and organize Redux code.

6. ## Explain Selector

   --Selectors are functions in Redux that are used to extract specific pieces of data from the Redux store's state. They provide a way to efficiently access and derive computed data from the state, allowing components to retrieve only the data they need.

7. ## Explain createSlice and the configuration it takes
   --createSlice is a function provided by Redux Toolkit for creating a slice of the Redux store's state along with its associated reducers and action creators. It takes an object as its configuration, which includes three main properties:
   name: A string that defines the name of the slice.
   initialState: The initial state value for the slice.
   reducers: An object containing one or more reducer functions, each responsible for handling specific actions and updating the slice's state accordingly.
