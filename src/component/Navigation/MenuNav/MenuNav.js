import React from 'react'
//import { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styleNav from './stylesNav.module.css'
import { connect } from 'react-redux'
import { getIsAuthenticated } from '../../../redux/auth/auth-selector'

const MenuNav = ({ isAuthenticated }) => (
  <div>
    <NavLink
      to="/"
      exact
      className={styleNav.link}
      activeClassName={styleNav.activeLink}
    >
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        exact
        className={styleNav.link}
        activeClassName={styleNav.activeLink}
      >
        Телефонный справочник
      </NavLink>
    )}
  </div>
)

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps)(MenuNav)
