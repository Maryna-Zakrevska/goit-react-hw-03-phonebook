import React, { Component } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { PhonebookMainTitleStyled, PhonebookTitleStyled } from "./App.styled";
import { saveContact, loadContact } from "Utils/localStorage";

const LS_KEY = "saved-phonebook-contacts";

export default class App extends Component {
  state = {
    contacts: [
    ],
    filter: "",
  };

  componentDidMount() {
    const localSavedContacts = loadContact(LS_KEY);
    if (localSavedContacts?.length > 0) {
      this.setState({ contacts: localSavedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const prevContacts = prevState.contacts;
    const newContacts = this.state.contacts;
    if (newContacts !== prevContacts) {
      saveContact(LS_KEY, newContacts?.length > 0 ? newContacts : []);
    }
  }

  onChangeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));
  };

  isSaved = (newName) => {
    const { contacts } = this.state;
    const contact = contacts.find(({ name }) => name.toLowerCase() === newName.toLowerCase());
    if (contact) {
      alert(`${contact.name} is already in the contacts`);
    } else {
      return true;
    }
  };

  onAddContactSubmit = ({ name, number }) => {
    if (!this.isSaved(name)) return;
    const contact = { id: nanoid(), name, number };
    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  deleteContact = (contactId) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));
  };

  render() {
    const contacts = this.getVisibleContacts();
    return (
      <div>
        <div>
          <PhonebookMainTitleStyled>Phonebook</PhonebookMainTitleStyled>
          <ContactForm onSubmit={this.onAddContactSubmit} />
        </div>

        <PhonebookTitleStyled>Contacts</PhonebookTitleStyled>
        <Filter onChange={this.onChangeFilter} />
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  }
}
