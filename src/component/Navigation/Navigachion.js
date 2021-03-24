import React from 'react'
import { connect } from 'react-redux'
import { getIsAuthenticated } from '../../redux/auth/auth-selector'
import MenuNav from './MenuNav/MenuNav'
import AuthNav from './AuthNav/AuthNav'
import UserMenu from './UserMenu/UserMenu'
import styles from './styles.module.css'

const Navigation = ({ isAuthenticated }) => (
  <ul className={styles.ulConteiner}>
    <MenuNav />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </ul>
)

const mapStateToProps = (state) => ({
  isAuthenticated: getIsAuthenticated(state),
})

export default connect(mapStateToProps, null)(Navigation)
