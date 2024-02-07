"use client";
import { useState } from "react";

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

export default function App() {
  const [filteredNames, setFilteredNames] = useState(NAMES);
  let timeoutId;

  function handleKeyUp(event) {
    const query = event.target.value.toLowerCase();

    // Clear the previous timeout
    clearTimeout(timeoutId);

    // Set a new timeout
    timeoutId = setTimeout(() => {
      setFilteredNames(NAMES.filter((name) => name.toLowerCase().includes(query)));
    }, 200);
  }
  return (
    <div>
      <input onKeyUp={handleKeyUp} />
      <ul>
        {filteredNames.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
}