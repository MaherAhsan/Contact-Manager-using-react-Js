import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddContact = ({ contacts, setContacts }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === "" || contactInfo.trim() === "") {
      return;
    }
    const newContact = {
      id: uuidv4(),
      name: name,
      contactInfo: contactInfo,
    };

    setContacts([...contacts, newContact]);
    setName("");
    setContactInfo("");
    navigate("/");
  };

  return (
    <>
      <div className="container w-50 mt-1 pl-3 d-flex justify-content-between">
        <h2>Add Contact</h2>
        <Link to="/">
          <button className="btn btn-primary mb-3">Back</button>
        </Link>
      </div>
      <form className="container w-50" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="font-weight-bold">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="font-weight-bold">Number or Email</label>
          <input
            type="text"
            placeholder="Number or Email"
            className="form-control"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default AddContact;
