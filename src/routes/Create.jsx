import { useState } from "react";
import Nav from "../components/Nav";
import supabase from "../utils/supabase";

const Create = () => {
  const [formData, setFormData] = useState({
    name: "",
    force_strength: "",
    saber_combat: "",
    saber_color: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiKey =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR1a3dwZ2RieWp6Y3pmaWRpZ3d4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODg3NjYxMSwiZXhwIjoyMDE0NDUyNjExfQ.cv1MN9jpDGyKefsfLfGQX38IWmWSMDmckK4sWSuP4BM";
      const { data, error } = await supabase
        .from("Jedi")
        .insert([formData], { headers: { apikey: apiKey } });

      if (error) {
        console.error("Error saving Jedi data:", error);
      } else {
        console.log("Jedi data saved successfully:", data);
        alert("Success! Go checkout your jedi in the gallery!");
        setFormData({
          name: "",
          force_strength: "",
          saber_combat: "",
          saber_color: "",
        });
      }
    } catch (error) {
      console.error("Error saving Jedi data:", error);
    }
  };

  return (
    <div>
      <Nav />
      <h1 className="coolShadow">Star Wars</h1>
      <h2 className="text1">Create a new Jedi!</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter in your jedis name"
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
          placeholder="Input a number 1-10"
          min="1"
          max="10"
          value={formData.force_strength}
          onChange={handleInputChange}
          required
        />
        <br />
        <label htmlFor="saber_combat">Saber Combat Skills (1-10):</label>
        <input
          type="number"
          id="saber_combat"
          name="saber_combat"
          placeholder="Input a number 1-10"
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
          <option value="">Select a color</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="purple">Purple</option>
          <option value="yellow">Yellow</option>
          <option value="orange">Orange</option>
          <option value="white">White</option>
        </select>

        <br />
        <button type="submit">Create Jedi</button>
      </form>
    </div>
  );
};

export default Create;
