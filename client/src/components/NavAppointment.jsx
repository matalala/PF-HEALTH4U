import React from "react";
import style from "./Nav.module.css";
import logo from "./image/logo.png";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function NavAppointment(){

const history = useHistory()
    
const {users,logout,loading}= useAuth()
console.log(users)
   

    const handleLogOut = async () =>{
        await logout()
        history.push("/")
    }
 
    return (
      <header>
          <nav className={style.navbar}>
             <div className={style.navi}>
                <img className={style.img} src={logo}/>
                <div>
                   <ul id={style.navul}>
                      <li><a href="index.html">Specialties</a></li>
                      <li><a href="index.html">My Appointments</a></li>
                      <li><a href="/account">Account</a></li>
                      <li><a href="index.html">Cart</a></li>
                      <button className={style.boton} onClick={handleLogOut}>Sign Out</button>

                    </ul>
                </div>
             </div>
            </nav>
         </header>
    )
}