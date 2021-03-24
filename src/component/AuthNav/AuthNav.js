import React from 'react';
import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import router from '../../routes';
import styleAuthNav from './stylesAuthNav.module.css'
//import Modal from '../Modal/Modal'

class AuthNav extends Component{
/*state = {
    shovModal: false,

  };
    toggleModalCloseOpen = (e) => {
    //const largeImageURL = e.target.dataset.sourse
    this.setState((state) => ({ showModal: !state.showModal, <Modal/>}))
  }
*/
    render() {
       
        return (
            <ul>
                <NavLink
                    to={router.register}
                    exact
                    className={styleAuthNav.link}
                    activeClassName={styleAuthNav.activeLink}
                    //onClick={this.toggleModalCloseOpen}
                >
                    Регистрация
        </NavLink>
        
                <NavLink
                    to={router.login}
                    exact
                    className={styleAuthNav.link}
                    activeClassName={styleAuthNav.activeLink}
                    //onClick={this.toggleModalCloseOpen}
                >
                    Вход
        </NavLink>
            </ul>
        )
    }
};
export default AuthNav;