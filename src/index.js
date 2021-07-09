import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./projects/github_users/App";
import Todo from "./projects/to_do_app/Todo";
import Welcome from "./Welcome";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    {/* Replace this code with the component/project you want*/}
    {/* <Todo /> */}
    <App />
    {/* <Welcome />*/}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
