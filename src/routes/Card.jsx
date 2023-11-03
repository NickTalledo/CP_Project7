import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Nav from "../components/Nav";
import supabase from "../utils/supabase";

const Card = () => {
  const { id } = useParams();
  const [jedi, setJedi] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    force_strength: "",
    saber_combat: "",
    saber_color: "",
  });

  useEffect(() => {
    const fetchJediById = async () => {
      try {
        const { data, error } = await supabase
          .from("Jedi")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching Jedi data:", error);
        } else {
          setJedi(data);
          setFormData(data);
        }
      } catch (error) {
        console.error("Error fetching Jedi data:", error);
      }
    };

    fetchJediById();
  }, [id]);

  const navigate = useNavigate();

  const handleEdit = async () => {
    try {
      const { data, error } = await supabase
        .from("Jedi")
        .update(formData)
        .eq("id", id);

      if (error) {
        console.error("Error updating Jedi data:", error);
      } else {
        console.log("Jedi updated successfully!");

        navigate("/");
      }
    } catch (error) {
      console.error("Error updating Jedi data:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDelete = async () => {
    try {
      const { error } = await supabase.from("Jedi").delete().eq("id", id);

      if (error) {
        console.error("Error deleting Jedi:", error);
      } else {
        console.log("Jedi deleted successfully!");

        navigate("/gallery");
      }
    } catch (error) {
      console.error("Error deleting Jedi:", error);
    }
  };

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

  const force = (force_strength) => {
    switch (true) {
      case force_strength >= 7:
        return "This jedi is known to be strong with the force.";
      case force_strength >= 4 && force_strength <= 6:
        return "This jedi is known to have an average bond with the force.";
      case force_strength <= 3:
        return "This jedi is known to be quite weak with the force.";
      default:
        return "This jedi's force capabilities are unknown.";
    }
  };

  const saber = (saber_combat) => {
    switch (true) {
      case saber_combat >= 7:
        return "This jedi is known to wield a lightsaber very well.";
      case saber_combat >= 4 && saber_combat <= 6:
        return "This jedi is known to be average in wielding a lightsaber.";
      case saber_combat <= 3:
        return "This jedi is known to be quite sloppy in their lightsaber wielding.";
      default:
        return "This jedi's lightsaber capabilities are unknown.";
    }
  };

  return (
    <div>
      <Nav />
      <h1 className="coolShadow">Star Wars</h1>
      {jedi ? (
        <div className="jedi-cards-container">
          <div
            className="jedi-card"
            style={{ boxShadow: getShadowColor(jedi.saber_color) }}
          >
            <img
              src="https://cdn3.iconfinder.com/data/icons/avatars-add-on-pack-2/48/v-46-512.png"
              alt="jedi-outline"
              height={120}
            />
            <h3>{jedi.name}</h3>
            <p>Force Strength: {jedi.force_strength}</p>
            <p>{force(jedi.force_strength)}</p>
            <p>Saber Combat Skills: {jedi.saber_combat}</p>
            <p>{saber(jedi.saber_combat)}</p>
            <p>Lightsaber Color: {jedi.saber_color}</p>
            <br />
            {editMode ? (
              <div className="edit-form-container">
                <form onSubmit={handleEdit}>
                  <label htmlFor="name">Name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <label htmlFor="force_strength">Force Strength (1-10):</label>
                  <input
                    type="number"
                    id="force_strength"
                    name="force_strength"
                    min="1"
                    max="10"
                    value={formData.force_strength}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <label htmlFor="saber_combat">
                    Saber Combat Skills (1-10):
                  </label>
                  <input
                    type="number"
                    id="saber_combat"
                    name="saber_combat"
                    min="1"
                    max="10"
                    value={formData.saber_combat}
                    onChange={handleInputChange}
                    required
                  />
                  <br />
                  <label htmlFor="saber_color">Lightsaber Color:</label>
                  <select
                    id="text"
                    name="saber_color"
                    value={formData.saber_color}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="purple">Purple</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="white">White</option>
                  </select>
                  <br />
                  <button type="submit">Save Changes</button>
                  <br />
                  <button type="button" onClick={() => setEditMode(false)}>
                    Cancel
                  </button>
                </form>
              </div>
            ) : (
              <>
                <button onClick={() => setEditMode(true)}>Edit Jedi</button>
                <br />
                <button className="delete" onClick={handleDelete}>
                  Delete Jedi
                </button>
              </>
            )}
          </div>
        </div>
      ) : (
        <p className="text1">Loading Jedi data...</p>
      )}
    </div>
  );
};

export default Card;
