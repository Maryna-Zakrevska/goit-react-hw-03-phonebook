import React from "react";
import PropTypes from "prop-types";
import { ContactItemStyled, ContactDeleteButtonStyled } from "./ContactItem.styled";

export const ContactItem = ({ id, name, number }, onDeleteContact) => {
  return (
    <ContactItemStyled key={id}>
      <span>{name}</span>&nbsp;<span>{number}</span>
      <ContactDeleteButtonStyled onClick={() => onDeleteContact(id)}>
        Delete
      </ContactDeleteButtonStyled>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
