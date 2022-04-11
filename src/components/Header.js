import React from "react";

const Header = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let d = new Date();

  return (
    <div className="Header">
      <h1>To-do App</h1>
      <h2>
        {days[d.getDay()]}, {d.getDate()}{" "}
        {months[d.getMonth()] + " " + d.getFullYear()}
      </h2>
    </div>
  );
};

export default Header;
