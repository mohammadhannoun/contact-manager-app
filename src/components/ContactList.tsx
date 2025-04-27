import React from "react";
import ContactItem from "./ContactItem";
import { Contact } from "../App";

interface ContactListProps {
  contacts: Contact[];
  deleteContact: (index: number) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, deleteContact }) => {
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts added yet.</p>
      ) : (
        contacts.map((contact, index) => (
          <ContactItem
            key={index}
            index={index}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))
      )}
    </div>
  );
};

export default ContactList;
