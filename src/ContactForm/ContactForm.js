import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  ContactFormStyled,
  ContactFormLabelStyled,
  ContactFormInputStyled,
  ContactFormButtonStyled,
} from "./ContactForm.styled";

export default class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: "",
    number: "",
  };

  addContact = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: form.elements.name.value.trim(),
      number: form.elements.number.value.trim(),
    };
    this.setState(data, () => this.props.onSubmit(this.state));
    form.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <div>
        <ContactFormStyled onSubmit={this.addContact}>
          <ContactFormLabelStyled>
            Name
            <ContactFormInputStyled
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </ContactFormLabelStyled>
          <ContactFormLabelStyled>
            Number
            <ContactFormInputStyled
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </ContactFormLabelStyled>
          <ContactFormButtonStyled type="submit">Add contact</ContactFormButtonStyled>
        </ContactFormStyled>
      </div>
    );
  }
}
