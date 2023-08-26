import React from "react";
import ReactDOM from "react-dom";

const profile = (
  <div>
    <img src="avatar.png" className="profile" />
    <h3>{[user.firstName, user.lastName].join(" ")}</h3>
  </div>
);

console.log("render app")

ReactDOM.render(profile, document.getElementById("app"));


