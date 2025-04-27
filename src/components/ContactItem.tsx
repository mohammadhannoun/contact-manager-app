import React from "react";
import { Contact } from "../App";

interface ContactItemProps {
  contact: Contact;
  index: number;
  deleteContact: (index: number) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, index, deleteContact }) => {
  return (
    <div className="contact-item">
      <p>
        {index + 1}. {contact.name} ({contact.email})
      </p>
      <button onClick={() => deleteContact(index)}>Delete</button>
    </div>
  );
};

export default ContactItem;
