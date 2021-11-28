import React from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "React Meetup",
    description: "React Meetup",
    image:
      "https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png",
  },
  {
    id: "m2",
    title: "React Native Meetup",
    description: "React Native Meetup",
    image:
      "https://en.wikipedia.org/wiki/File:P.S._Kr%C3%B8yer_-_Summer_evening_on_Skagen%27s_Beach._Anna_Ancher_and_Marie_Kr%C3%B8yer_walking_together._-_Google_Art_Project.jpg",
  },
];

const AllMeetupsPage = () => {
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetupsPage;
