// src\components\funFacts\FunFactsRotating.js
import React, { useState, useEffect } from "react";
import { factsAboutMe } from "../../portfolio";

const FunFactsRotating = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    if (!factsAboutMe.display) return;

    const interval = setInterval(() => {
      setCurrentFactIndex(prevIndex => (prevIndex + 1) % factsAboutMe.facts.length);
    }, 3000); // rotate every 3 seconds

    return () => clearInterval(interval);
  }, []);

  if (!factsAboutMe.display) return null;

  return (
    <div style={{ textAlign: "center", margin: "3rem 0" }}>
      <h2>{factsAboutMe.title}</h2>
      <p>{factsAboutMe.subtitle}</p>
      <div
        style={{
          fontSize: "1.2rem",
          fontWeight: 500,
          transition: "opacity 0.5s",
          opacity: 1
        }}
      >
        {factsAboutMe.facts[currentFactIndex]}
      </div>
    </div>
  );
};

export default FunFactsRotating;
