import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

// when parent is CB
class About extends Component {
  constructor(props) {
    super(props);
    this.intervalId = null;
    // console.log("Parent Constructor");
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
    // console.log("Parent Component Did Mount");
        console.log('Interval running...');
    }, 1000);
  }

  componentWillUnmount() {
      clearInterval(this.intervalId);
      console.log('Interval cleared.');
  }
  
  render() {
    // console.log("Parent render");
    return (
      <div>
        <h1>About Us using Class based Component</h1>
        <h2>This is my food app website</h2>
        <UserClass name={"First"} location={"Pavagada"} />
      </div>
    );
  }
}

// when parent is FC
// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is my food app website</h2>
//       {/* <User name={"Ayesha Shamail (FC)"} /> */}
//       {/**name written is above is arg which is coming from the function User where we have defined a name parameter as a props **/}
//       <UserClass name={"Ayesha Shamail (CC)"} location={"Pavagada"} />
//       {/***The args passed above are combined as a object and are passed inside the constructor as a props****/}
//     </div>
//   );
// };

export default About;