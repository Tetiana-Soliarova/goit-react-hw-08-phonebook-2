import React from 'react'
import { connect } from 'react-redux'
import { getUserName } from '../../../redux/auth/auth-selector'
import styleUserMenu from './styleUserMenu.module.css'
import { logOut } from '../../../redux/auth/auth-operations'

const UserMenu = ({ name, onLogaut }) => {
  return (
    <div className={styleUserMenu.container}>
      <span className={styleUserMenu.name}>Добро пожаловать, {name} </span>
      <button type="button" onClick={onLogaut}>
        Выйти
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: getUserName(state),
})

const mapDispatchToProps = {
  onLogaut: logOut,
}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
