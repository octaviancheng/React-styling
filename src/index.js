//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

const hours = new Date().getHours();
let greeting = "Good morning";
let greetingColour = {
  color: "red"
};

if (hours >= 18) {
  greeting = "Good evening";
  greetingColour.color = "blue";
} else if (hours > 12) {
  greeting = "Good afternoon";
  greetingColour.color = "green";
}

ReactDOM.render(
  <h1 className="heading" style={greetingColour}>
    {greeting}
  </h1>,
  document.getElementById("root")
);
