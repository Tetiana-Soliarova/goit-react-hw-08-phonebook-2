import  { Component } from 'react'
import { createPortal } from 'react-dom'
import styles from './modal.module.css';
import Register from '../Register/Register'

const modalRoot = document.querySelector('#modalRegister-root')

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.code === 'Escape') {
        this.props.onClose(e)
      }
    })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', (e) => {
      console.log(e.code)
      if (e.code === 'Escape') {
        this.props.onClose(e)
      }
    })
  }

  render() {
    return createPortal(
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <Register/>
        </div>
      </div>,
      modalRoot,
    )
  }
}
