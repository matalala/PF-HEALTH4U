import React from "react";
import style from "./Nav.module.css";
import logo from "../../image/logo.png";
import { Link, useHistory } from "react-router-dom";


function Nav() {

   return (
      <header>
         <nav className={style.navbar}>
            <div className={style.navi}>
               <img className={style.img} src={logo} />
               <div>
                  <ul id={style.navul}>
                     <li><a href="index.html">About us</a></li>

                     <li><a href="index.html">Get your membership</a></li>
                     <li><a href="/register">Sign up</a></li>
                     <a href="/login"><button className={style.boton}>Sign in</button></a>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   )
}

export default Nav;

