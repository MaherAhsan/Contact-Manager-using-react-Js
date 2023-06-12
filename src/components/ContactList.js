import React from "react";
import ContactCard from "./ContactCard";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, onDelete }) => {
  const handleDelete = (contactId) => {
    onDelete(contactId);
  };

  return (
    <>
      <div className="container w-50 mt-1 pl-3 d-flex justify-content-between">
        <h2>Contact List</h2>
        <Link to="/add">
          <button className="btn btn-primary mb-3">Add Contact</button>
        </Link>
      </div>
      <ul className="list-group container w-50 mt-1 pl-3">
        {contacts.map((contact) => (
          <ContactCard
            contact={contact}
            key={contact.id}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </>
  );
};

export default ContactList;
