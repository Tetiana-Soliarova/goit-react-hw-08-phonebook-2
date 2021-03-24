import React from "react";
import PropTypes from "prop-types";
import styles from "./contactStyles.module.css";

const ContactItem = ({ name, number, id, onDeleteContact }) => {
  return (
    <li className={styles.item} key={id}>
      <p className={styles.name}>{name}</p>
      <p className={styles.number}>{number}</p>

      <button
        className={styles.buttonContact}
        type="button"
        onClick={onDeleteContact}
      ></button>
    </li>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
