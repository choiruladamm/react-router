/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

const ContactItem = ({ contact }) => {
  const name =
    contact.first || contact.last ? (
      <>
        {contact.first} {contact.last}
      </>
    ) : (
      <i>No Name</i>
    );

  return (
    <li key={contact.id}>
      <NavLink
        to={`contacts/${contact.id}`}
        className={({ isActive, isPending }) =>
          isActive ? "active" : isPending ? "pending" : ""
        }
      >
        {name} {contact.favorite && <span>★</span>}
      </NavLink>
    </li>
  );
};

export default ContactItem;
