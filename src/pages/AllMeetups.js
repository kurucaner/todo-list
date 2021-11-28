import React from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "React Meetup",
    description: "React Meetup",
    image:
      "https://images.unsplash.com/photo-1589571208531-b9f8f9f8f9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
  {
    id: "m2",
    title: "React Native Meetup",
    description: "React Native Meetup",
    image:
      "https://images.unsplash.com/photo-1589571208531-b9f8f9f8f9f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  },
];

const AllMeetupsPage = () => {
  return (
    <div>
      <h1>All Meetups Page</h1>
      {DUMMY_DATA.map((meetup) => (
        <div key={meetup.id}>
          <h2>{meetup.title}</h2>
          <p>{meetup.description}</p>
          <img src={meetup.image} alt={meetup.title} />
        </div>
      ))}
    </div>
  );
};

export default AllMeetupsPage;
