// pages/index.js
"use client";
import { useState } from "react";
import PageLayout from '/layout';

const NAMES = [
  "Andrea",
  "Billie",
  "Clara",
  "David",
  "Eva",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Katherine",
  "Leo",
  "Mia",
  "Nathan",
  "Olivia",
  "Peter",
  "Quinn",
  "Rachel",
  "Samuel",
  "Taylor",
  "Ursula",
  "Victor",
  "Wendy",
  "Xander",
  "Yvonne",
  "Zachary",
];

const Home = () => {
  return (
    <PageLayout>
       <div>
      <Navbar /> {/* Add Navbar component */}
      <h1>App</h1>
      {/* Add your app content here */}
    </div>
    </PageLayout>
  );
};

export default Home;
