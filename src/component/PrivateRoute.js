import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { getToken } from '../redux/auth/auth-selector'

const PrivateRoute = ({
  component: Component,
  //isAuthenticated,
  token,
  ...routeProps
}) => (
  <Route
    {...routeProps}
    render={(props) =>
      token ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
)

const mapStateToProps = (state) => ({
  token: getToken(state),
})

export default connect(mapStateToProps)(PrivateRoute)
