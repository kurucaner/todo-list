import React from "react";
import Meetupitem from "./MeetupItem";
const MeetupList = (props) => {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <Meetupitem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
