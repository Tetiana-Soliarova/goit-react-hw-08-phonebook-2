import { Component } from 'react';
import styles from './form.module.css';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { connect } from 'react-redux';
import {changeFilter}  from '../../redux/contacts/contacts-actions'
import Alert from '../Alert/alert';
import { CSSTransition } from 'react-transition-group';
import fade from './Fade.module.css';
import Filter from '../Filter/Filter';
import filterFade from '../../FilterFade.module.css';
import { getLoading, getContacts } from "../../redux/contacts/contacts-selectors";

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
    error: false,
    
  }

componentDidMount() {
    this.props.fetchContact();
}


  //метод который обновляет состояние
  hendleNameChange = (event) => {
    const { name, value } = event.currentTarget
    this.setState({ [name]: value })
  }

  //метод который Submit form
  hendleSubmit = (event) => {
    event.preventDefault()
    if (
      this.props.contacts.find(
        (items) => items.name === event.target.elements[0].value,
      )
    ) {
      this.setState({
        error: true,
      })

      return setTimeout(() => {
        this.setState({
          error: false,
        })
      }, 2500)
    }
    this.props.onSubmit(this.state)

    this.reset()
  }

  //очистка форми
  reset = () => {
    this.setState({ name: '', number: '' })
  }



  render() {
    return (
      <div>
        <div className={styles.container}>
          <CSSTransition
            in={this.state.error}
            timeout={250}
            classNames={fade}
            unmountOnExit
          >
            <Alert />
          </CSSTransition>

          <form onSubmit={this.hendleSubmit}>
            <label className={styles.label}>
              Name
              <input
                className={styles.input}
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.hendleNameChange}
              />
            </label>

            <label className={styles.label}>
              Number
              <input
                className={styles.input}
                name="number"
                type="tel"
                value={this.state.number}
                onChange={this.hendleNameChange}
              />
            </label>
            <button className={styles.buttomForm} type="submit">
              Add contact
            </button>
          </form>
        </div>
        <CSSTransition
          in={this.props.contacts.length > 1}
          timeout={250}
          classNames={filterFade}
          unmountOnExit
          onExiting={() => this.props.clearFilter()}
        >
          <Filter />
        </CSSTransition>
        {this.props.isLoading && <h1  className={styles.loading}>Загружаем...</h1>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts:  getContacts(state),
  isLoading: getLoading(state),
  
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
  clearFilter: () => dispatch(changeFilter("")),
  fetchContact: () => dispatch(contactsOperations.fetchContact()),
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
