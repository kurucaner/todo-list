import React from "react";

const MeetupItem = () => {
  return (
    <li>
      <div>
        <img src="https://via.placeholder.com/150" alt="Meetup" />
      </div>
      <div>
        <h3>TITLE</h3>
        <address>Address</address>
        <p>Description</p>
      </div>
      <div>
        <button>Join</button>
      </div>
    </li>
  );
};

export default MeetupItem;
