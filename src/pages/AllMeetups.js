import React from "react";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "React Meetup",
    description: "React Meetup",
    image:
      "https://en.wikipedia.org/wiki/File:P.S._Kr%C3%B8yer,_Et_m%C3%B8de_i_Videnskabernes_Selskab,_1897,_Det_Kongelige_Danske_Videnskaberners_Selskab.jpg",
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
