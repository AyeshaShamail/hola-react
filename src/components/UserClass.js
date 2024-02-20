// class based componnets

import React from "react";
import User from "./User";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Fake",
        location: "Default",
        avatar_url: "https://dummy-photo.com",
      },
    };
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Component Did Mount");
    //how to make an API call?
    const data = await fetch("https://api.github.com/users/AyeshaShamail");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did update");
  }

  componentWillUnmount() {
    console.log("Componenet will unMount?");
  }

  render() {
    // console.log(this.props.name + "Child render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Address : {location}</h3>
        <h4>Contact: aichusadiqa@gmail.com</h4>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;
