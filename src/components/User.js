import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count1] = useState(0);

  useEffect(() => {
    //API calls
  }, []);

  return (
    <div className="user-card">
      <h1>Count: {count1}</h1>
      <h2>Name : {name}</h2>
      <h3>Address : Bangalore</h3>
      <h4>Contact: aichusadiqa@gmail.com</h4>
    </div>
  );
};

export default User;