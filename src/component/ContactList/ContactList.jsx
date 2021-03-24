import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import ContactItem from "./ContactItem";
import popTransition from "./pop.module.css";
import style from "./contactStyles.module.css";
import * as contactsOperations from "../../redux/contacts/contacts-operations";
import { getVisibleItems } from "../../redux/contacts/contacts-selectors";

const ContactList = ({ contacts, deleteContact, clearFilter }) => {
  return (
    <div>
      <h2 className={style.title}>Contacts</h2>
      <TransitionGroup component="ul" className={style.contactList}>
        {contacts.map(({ id, name, number }) => (
          <CSSTransition key={id} timeout={250} classNames={popTransition}>
            <ContactItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={() => deleteContact(id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: getVisibleItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => dispatch(contactsOperations.deleteTodo(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContact()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
