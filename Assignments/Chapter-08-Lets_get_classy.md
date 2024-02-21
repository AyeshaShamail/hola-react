1. How do you create Nested Routes react-router-dom configuration?
   -- To create nested routes in React using react-router-dom, you can nest Route components within each other. Here's a basic example:
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

   function App() {
   return (
   <Router>
   <Switch>
   <Route path="/parent" component={ParentComponent}>
   <Route path="/parent/child" component={ChildComponent} />
   </Route>
   </Switch>
   </Router>
   );
   }

2. Read about createHashRouter, createMemoryRouter from React Router docs.
   -- createHashRouter and createMemoryRouter are utilities provided by React Router to create routers with specific behavior:

-- createHashRouter: Uses the URL hash to keep UI in sync with the URL. It's useful for applications that cannot serve static files.

-- createMemoryRouter: Does not interact with the browser's URL. It's useful for testing and non-browser environments.

3.  WHat is the order of lifecycle method calls in Class based Components
    -- 1.constructor()
    2.componentDidMount()
    3.render()
    4.componentDidUpdate()
    5.componentWillUnmount()

4.  Why do we use componentDidMount?
    -- componentDidMount() is used to perform actions after the component is mounted and rendered for the first time. It's commonly used to fetch data from APIs, set up subscriptions, or perform other side effects.

5.  Why do we use componentWillUnmount? Show with example
    -- componentWillUnmount() is used to perform cleanup actions before the component is removed from the DOM. It's commonly used to unsubscribe from event listeners or clear intervals. Here's an example:
    Example-
    class UserComponent extends Component {
    constructor(props) {
    super(props);
    this.intervalId = null;
    }

           componentDidMount() {
               this.intervalId = setInterval(() => {
                   console.log('Interval running...');
               }, 1000);
           }

           componentWillUnmount() {
               clearInterval(this.intervalId);
               console.log('Interval cleared.');
           }

           render() {
               return <div>User Component is rendered</div>;
           }

    }

6.  (Research) Why do we use super(props) in constructor?
    -- In JavaScript, super() is used to call the constructor of the parent class. In React, super(props) is used to pass props to the parent class constructor, which is necessary if you want to access this.props in the constructor of the child class.

7.  (Research) Why can't we have the callback function of useEffect async?
    -- The callback function of useEffect cannot be async because useEffect itself does not support returning a Promise. Asynchronous code inside useEffect should be handled using .then() chains or async/await within the callback function.

8.  Create interval inside componentDidMount?
    -- use clearInterval to fix the issue caused by that interval
    class ExampleComponent extends Component {
    constructor(props) {
    super(props);
    this.intervalId = null;
    }

        componentDidMount() {
            this.intervalId = setInterval(() => {
                console.log('Interval running...');
            }, 1000);
        }

        componentWillUnmount() {
            clearInterval(this.intervalId);
            console.log('Interval cleared.');
        }

        render() {
            return <div>Example Component</div>;
        }

    }

-- In the above example, an interval is created inside componentDidMount(), and clearInterval() is called in componentWillUnmount() to clean up the interval before the component is unmounted.
