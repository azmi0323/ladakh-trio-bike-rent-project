import React, { useEffect, useState } from "react";
import "./Review.css";
import User from "../User/User";

const Review = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("person.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className="container d-flex justify-content-center">
      
      <div className="card-compo ">
        {users.map((user) => (
          <User user={user} key={user.id}></User>
        ))}
      </div>
    </div>
  );
};

export default Review;
