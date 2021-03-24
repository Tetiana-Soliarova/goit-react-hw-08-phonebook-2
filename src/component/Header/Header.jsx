import React from "react";
import style from "./logo.module.css";
import fade from "./fade.module.css";
import foto from "./phonebook.jpg";
import { CSSTransition } from "react-transition-group";
import Navigation from "../Navigation/Navigachion";


function Header() {
  return (
    <header className={style.header}>
      <Navigation />
      <hr/>
      <CSSTransition
        in={true}
        appear={true}
        timeout={500}
        classNames={fade}
        unmountOnExit
      >
        <h1 className={style.title}>
          <img src={foto} alt="" width="150px" />
          Phonebook
        </h1>
      </CSSTransition>
    </header>
  );
}
export default Header;
