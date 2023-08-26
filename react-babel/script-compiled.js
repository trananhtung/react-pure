import React from "react";
import ReactDOM from "react-dom";
const profile = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
  src: "avatar.png",
  className: "profile"
}), /*#__PURE__*/React.createElement("h3", null, [user.firstName, user.lastName].join(" ")));
console.log("render app");
ReactDOM.render(profile, document.getElementById("app"));
