import React from 'react'
import { Component } from 'react'
import { NavLink } from 'react-router-dom'

import styleAuthNav from './stylesAuthNav.module.css'

class AuthNav extends Component {
  render() {
    return (
      <div>
        <NavLink
          to="/register"
          exact
          className={styleAuthNav.link}
          activeClassName={styleAuthNav.activeLink}
        >
          Регистрация
        </NavLink>

        <NavLink
          to="/login"
          exact
          className={styleAuthNav.link}
          activeClassName={styleAuthNav.activeLink}
        >
          Вход
        </NavLink>
      </div>
    )
  }
}
export default AuthNav
