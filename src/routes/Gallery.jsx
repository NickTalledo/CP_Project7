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
    <div>
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

// import React, { useState, useEffect } from "react";
// import supabase from "../utils/supabase";
// import Nav from "../components/Nav";

// const Gallery = () => {
//   const [jediData, setJediData] = useState([]);
//   const [editingJediId, setEditingJediId] = useState(null);
//   const [editFormData, setEditFormData] = useState({
//     name: "",
//     force_strength: "",
//     saber_combat: "",
//     saber_color: "",
//   });

//   useEffect(() => {
//     const fetchJediData = async () => {
//       try {
//         const { data, error } = await supabase.from("Jedi").select("*");

//         if (error) {
//           console.error("Error fetching Jedi data:", error);
//         } else {
//           setJediData(data);
//         }
//       } catch (error) {
//         console.error("Error fetching Jedi data:", error);
//       }
//     };

//     fetchJediData();
//   }, []);

//   const handleEdit = (jedi) => {
//     setEditingJediId(jedi.id);
//     setEditFormData({
//       name: jedi.name,
//       force_strength: jedi.force_strength,
//       saber_combat: jedi.saber_combat,
//       saber_color: jedi.saber_color,
//     });
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const { data, error } = await supabase
//         .from("Jedi")
//         .update({
//           name: editFormData.name,
//           force_strength: editFormData.force_strength,
//           saber_combat: editFormData.saber_combat,
//           saber_color: editFormData.saber_color,
//         })
//         .eq("id", editingJediId);

//       // Handle update success/error

//       // Reset editing state after updating
//       setEditingJediId(null);
//       setEditFormData({
//         name: "",
//         force_strength: "",
//         saber_combat: "",
//         saber_color: "",
//       });
//     } catch (error) {
//       console.error("Error updating Jedi data:", error);
//     }
//   };

//   const getShadowColor = (saberColor) => {
//     switch (saberColor.toLowerCase()) {
//       case "red":
//         return "0 4px 8px rgba(255, 0, 0, 0.8)";
//       case "blue":
//         return "0 4px 8px rgba(0, 0, 255, 0.8)";
//       case "green":
//         return "0 4px 8px rgba(0, 255, 0, 0.8)";
//       case "orange":
//         return "0 4px 8px rgba(255, 165, 0, 0.8)";
//       case "yellow":
//         return "0 4px 8px rgba(255, 255, 0, 0.8)";
//       case "purple":
//         return "0 4px 8px rgba(128, 0, 128, 0.8)";
//       case "white":
//         return "0 4px 8px rgba(255, 255, 255, 0.8)";
//       default:
//         return "0 4px 8px rgba(0, 0, 0, 0.2)";
//     }
//   };

//   return (
//     <div>
//       <Nav />
//       <h1 className="coolShadow">Star Wars</h1>
//       <h2 className="text1">The Jedi Gallery!</h2>

//       <div className="jedi-cards-container">
//         {jediData.map((jedi) => (
//           <div
//             className="jedi-card"
//             style={{ boxShadow: getShadowColor(jedi.saber_color) }}
//             key={jedi.id}
//           >
//             <img
//               src="https://cdn3.iconfinder.com/data/icons/avatars-add-on-pack-2/48/v-46-512.png"
//               alt="jedi-outline"
//               height={120}
//             />
//             <h3>{jedi.name}</h3>
//             <p>Force Strength: {jedi.force_strength}</p>
//             <p>Saber Combat Skills: {jedi.saber_combat}</p>
//             <p>Lightsaber Color: {jedi.saber_color}</p>
//             {editingJediId === jedi.id ? (
//               <form onSubmit={handleUpdate}>
//                 {/* Edit form fields */}
//                 <label htmlFor="editName">Name:</label>
//                 <input
//                   type="text"
//                   id="editName"
//                   name="name"
//                   value={editFormData.name}
//                   onChange={(e) =>
//                     setEditFormData({ ...editFormData, name: e.target.value })
//                   }
//                   required
//                 />
//                 <br />
//                 <label htmlFor="editForceStrength">
//                   Force Strength (1-10):
//                 </label>
//                 <input
//                   type="number"
//                   id="editForceStrength"
//                   name="force_strength"
//                   min="1"
//                   max="10"
//                   value={editFormData.force_strength}
//                   onChange={(e) =>
//                     setEditFormData({
//                       ...editFormData,
//                       force_strength: e.target.value,
//                     })
//                   }
//                   required
//                 />
//                 <br />
//                 <label htmlFor="editSaberCombatSkills">
//                   Saber Combat Skills (1-10):
//                 </label>
//                 <input
//                   type="number"
//                   id="editSaberCombatSkills"
//                   name="saber_combat"
//                   min="1"
//                   max="10"
//                   value={editFormData.saber_combat}
//                   onChange={(e) =>
//                     setEditFormData({
//                       ...editFormData,
//                       saber_combat: e.target.value,
//                     })
//                   }
//                   required
//                 />
//                 <br />
//                 <label htmlFor="editSaberColor">Lightsaber Color:</label>
//                 <select
//                   id="editSaberColor"
//                   name="saber_color"
//                   value={editFormData.saber_color}
//                   onChange={(e) =>
//                     setEditFormData({
//                       ...editFormData,
//                       saber_color: e.target.value,
//                     })
//                   }
//                   required
//                 >
//                   <option value="">Select a color</option>
//                   <option value="red">Red</option>
//                   <option value="blue">Blue</option>
//                   <option value="green">Green</option>
//                   <option value="purple">Purple</option>
//                   <option value="yellow">Yellow</option>
//                   <option value="orange">Orange</option>
//                   <option value="white">White</option>
//                 </select>
//                 <br />
//                 <button type="submit">Save</button>
//               </form>
//             ) : (
//               <button onClick={() => handleEdit(jedi)}>Edit</button>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;
