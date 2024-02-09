// class based componnets

import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // calling state variable inside the constructor
    this.state = {
      count: 0,
      count2: 2,
    };
    // console.log(props);
    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
    //how to make an API call?
  }
  render() {
    /**Destructure */
    const { name, location } = this.props;
    const { count } = this.state;
    console.log(this.props.name + "Child render");
    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <h2>Name : {name}</h2>
        <h3>Address : {location}</h3>
        <h4>Contact: aichusadiqa@gmail.com</h4>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}

export default UserClass;
