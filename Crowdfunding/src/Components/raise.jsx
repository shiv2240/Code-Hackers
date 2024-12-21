import { useState } from "react";
import { ref, push } from "firebase/database";
import { db } from "../config/firebase.js"; // Import Realtime Database instance
import "../styles/raise.css";
import Navbar_Page from "../Components/navbar_page.jsx";
import Footer from "../Components/footer";

const Raise = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    reason: "",
    context: "",
  });
  const [image, setImage] = useState(null);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const raiseRequestsRef = ref(db, "raiseRequests");


      const newRaiseRef = await push(raiseRequestsRef, {
        ...formData,
        imageName: image?.name || "No image uploaded",
        createdAt: new Date().toISOString(),
      });

      alert(`Data submitted successfully! Key: ${newRaiseRef.key}`);
    } catch (error) {
      alert(`Error adding data: ${error.message}`);
    }

    setShowForm(false);
    setFormData({ title: "", reason: "", context: "" });
    setImage(null);
  };

  return (
    <>
      <Navbar_Page /> 
      <p className = "raise-request">Click here to raise a request</p>
      <div className="raise-container">
      
        {!showForm ? (
          <button className="plus-button" onClick={handleButtonClick}>
            +
          </button>
        ) : (
          <form className="details-form" onSubmit={handleSubmit}>
            <label>
              Title:
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Situation"
                required
              />
            </label>
            <label>
              Reason:
              <input
                type="text"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                placeholder="Relatable Reason"
                required
              />
            </label>
            <label>
              Context:
              <textarea
                name="context"
                value={formData.context}
                onChange={handleInputChange}
                rows="4"
                placeholder="Share your conditions"
                required
              ></textarea>
            </label>
            <div
              className="drop-zone"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              {image ? (
                <p>{image.name}</p>
              ) : (
                <p>Drag an image here to upload</p>
              )}
            </div>
            <button className="submitbutton" type="submit">Submit</button>
          </form>
        )}
      </div>
        <Footer/>
    </>
  );
};

export default Raise;
