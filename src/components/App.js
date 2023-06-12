import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import EditContact from "./EditContact";

function App() {
  const [contacts, setContacts] = useState([]);
  const handleDelete = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    setContacts(updatedContacts);
  };

  useEffect(() => {
    const storedContacts = localStorage.getItem("myContacts");
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);
  useEffect(() => {
    if (contacts.length === 0) {
      localStorage.removeItem("myContacts");
    } else {
      localStorage.setItem("myContacts", JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ContactList contacts={contacts} onDelete={handleDelete} />
            }
          />
          <Route
            path="/add"
            element={
              <AddContact contacts={contacts} setContacts={setContacts} />
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditContact contacts={contacts} setContacts={setContacts} />
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
