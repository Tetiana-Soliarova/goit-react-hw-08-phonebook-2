import { Component } from 'react';
import {connect} from 'react-redux'
import styleRegister from '../Register/styleRegister.module.css';
import {logIn} from '../../redux/auth/auth-operations'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  }

  hendleNameChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' })
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styleRegister.demoForm}>
        <div className={styleRegister.container}>
          <h1> Страница логина</h1>
            <hr />

          <div className={styleRegister.formGroup}>
            <label htmlFor="login">Почта</label>
            <input
              type="login"
              className={styleRegister.formControl}
                        name="email"
                        onChange={this.hendleNameChange }
            />
          </div> <div className={styleRegister.formGroup}>
            <label htmlFor="password">Пароль</label>
            <input
              type="password"
              className={styleRegister.formControl}
                        name="password"
                        onChange={this.hendleNameChange }
            />
          </div>
        </div>
        <button type="submit"  onSubmit={this.handleSubmit} className={styleRegister.registerbtn}>
          Войти
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = {
  onLogin: logIn,
}

export default connect(null, mapDispatchToProps)(LoginForm);
