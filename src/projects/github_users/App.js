import "./App.css";
import React, { useState, useEffect } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Loading from "./Loading";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users");
      setUsers(await response.json());
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container">
      <h1 className="text-center">Github users</h1>
      <div className="row">
        {users.map((user) => {
          return (
            <div className="col-10 col-md-4">
              <div className="card mt-5 p-2" style={{ width: "18rem" }}>
                <div className="col-md-12">
                  <div className="col-2 col-md-2 user_image">
                    <img src={user.avatar_url} alt="user_image" />
                  </div>
                  <div className="col-10 col-md-10">
                    <div className="card-title">{user.login}</div>
                    <h6>Profile: {user.html_url}</h6>
                  </div>
                </div>
                <div className="card-body">
                  <span>Subscriptions: {user.subscriptions_url.length}</span>
                  <br />
                  <span>Followers: {user.followers_url.length}</span>
                  <br />
                  <span>Rating: {user.starred_url.length}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
