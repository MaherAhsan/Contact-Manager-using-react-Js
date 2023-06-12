import React from "react";
import { Link } from "react-router-dom";
import personImage from "../person.png";
import { FaTrash, FaEdit } from "react-icons/fa";

const ContactCard = ({ contact, handleDelete }) => {
  const handleDeleteClick = () => {
    handleDelete(contact.id);
  };

  return (
    <li className="list-group-item d-flex">
      <div className="w-75 d-flex">
        <img
          className="mt-1 mr-2"
          src={personImage}
          alt="My Image"
          style={{ width: "2.5rem", height: "2.5rem" }}
        />
        <div>
          <ul className="list-unstyled ml-1">
            <li className="font-weight-bold">{contact.name}</li>
            <li>{contact.contactInfo}</li>
          </ul>
        </div>
      </div>
      <div className="w-25 d-flex justify-content-end align-items-center">
        <Link to={`/edit/${contact.id}`}>
          <FaEdit
            className="fa-solid fa-pencil-alt fa-lg mr-3"
            style={{ color: "#007bff", cursor: "pointer" }}
          />
        </Link>
        <FaTrash
          className="fa-sharp fa-solid fa-trash fa-lg"
          style={{ color: "#fa0000", cursor: "pointer" }}
          onClick={handleDeleteClick}
        />
      </div>
    </li>
  );
};

export default ContactCard;
