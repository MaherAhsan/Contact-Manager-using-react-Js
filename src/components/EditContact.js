import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const EditContact = ({ contacts, setContacts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  useEffect(() => {
    const contact = contacts.find((contact) => contact.id === id);
    if (contact) {
      setName(contact.name);
      setContactInfo(contact.contactInfo);
    }
  }, [contacts, id]);

  const handleEditContact = (e) => {
    e.preventDefault();
    if (name.trim() === "" || contactInfo.trim() === "") {
      return;
    }
    const updatedContacts = contacts.map((contact) =>
      contact.id === id ? { ...contact, name, contactInfo } : contact
    );
    setContacts(updatedContacts);
    navigate("/");
  };

  return (
    <>
      <div className="container w-50 mt-1 pl-3 d-flex justify-content-between">
        <h2>Edit Contact</h2>
        <Link to="/">
          <button className="btn btn-primary mb-3">Back</button>
        </Link>
      </div>
      <form className="container w-50" onSubmit={handleEditContact}>
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

export default EditContact;
