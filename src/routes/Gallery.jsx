import React, { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [jediData, setJediData] = useState([]);

  useEffect(() => {
    const fetchJediData = async () => {
      try {
        const { data, error } = await supabase.from("Jedi").select("*");

        if (error) {
          console.error("Error fetching Jedi data:", error);
        } else {
          setJediData(data);
        }
      } catch (error) {
        console.error("Error fetching Jedi data:", error);
      }
    };

    fetchJediData();
  }, []);

  const getShadowColor = (saberColor) => {
    switch (saberColor.toLowerCase()) {
      case "red":
        return "0 4px 8px rgba(255, 0, 0, 0.9)";
      case "blue":
        return "0 4px 8px rgba(0, 0, 255, 0.9)";
      case "green":
        return "0 4px 8px rgba(0, 255, 0, 0.9)";
      case "orange":
        return "0 4px 8px rgba(255, 165, 0, 0.9)";
      case "yellow":
        return "0 4px 8px rgba(255, 255, 0, 0.9)";
      case "purple":
        return "0 4px 8px rgba(128, 0, 128, 0.9)";
      case "white":
        return "0 4px 8px rgba(255, 255, 255, 0.9)";
      default:
        return "0 4px 8px rgba(0, 0, 0, 0.2)";
    }
  };

  return (
    <div className="bottom">
      <Nav />
      <h1 className="coolShadow">Star Wars</h1>
      <h2 className="text1">The Jedi Gallery!</h2>

      <div className="jedi-cards-container">
        {jediData.map((jedi) => (
          <div
            className="jedi-card"
            style={{ boxShadow: getShadowColor(jedi.saber_color) }}
            key={jedi.id}
          >
            <Link to={`/card/${jedi.id}`}>
              <img
                src="https://cdn3.iconfinder.com/data/icons/avatars-add-on-pack-2/48/v-46-512.png"
                alt="jedi-outline"
                height={120}
              />
              <h3>{jedi.name}</h3>
              <p>Force Strength: {jedi.force_strength}</p>
              <p>Saber Combat Skills: {jedi.saber_combat}</p>
              <p>Lightsaber Color: {jedi.saber_color}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
