1. What is prop drilling?
   --Prop drilling is a term used in React development to describe the process of passing data from a component at the top of the component tree down to a component deeper in the tree through props. It becomes an issue when components in the middle of the tree don't need the data but have to pass it down anyway just for the sake of passing it to deeper components.

2. What is lifting the state up?
   -- Lifting state up is a pattern in React where state that is used by multiple components is moved to a common ancestor component, typically a parent component. By doing this, the state becomes shared among the components, allowing them to communicate and synchronize their state through props.

3. What is context Provider and Context Consumer?
   -- Context Provider and Context Consumer are components provided by React's Context API. The Context Provider component allows you to declare a context and provide a value for that context to be consumed by child components. The Context Consumer component allows child components to subscribe to that context and access the value provided by the Provider.

4. If you don't pass a value to the provider does it take the default value?
   --Yes, if you don't pass a value to the provider, it takes the default value specified when creating the context using createContext(). This default value is only used when a matching provider in the component tree is not found.
