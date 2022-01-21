import React from "react";
import { ContactItem } from "../ContactItem/ContactItem";
import PropTypes from "prop-types";
import {ContactListStyled, ContactListDivStyled} from "./ContactList.styled";

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ContactListDivStyled>
    <ContactListStyled>
      {contacts.map((contact) => ContactItem(contact, onDeleteContact))}
    </ContactListStyled>
  </ContactListDivStyled>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired).isRequired)
    .isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
