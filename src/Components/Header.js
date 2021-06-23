import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Header extends Component {
    
    render() {
        return (
            <header className='header'>
                <div className='header__logo'>
                    <img src="https://Alphasud.github.io/CharlesDenneulin_11_17062021/LOGO.png" alt="Logo" />
                </div>
                <div className='header__links'>
                    <NavLink exact activeClassName='active' to="/CharlesDenneulin_11_17062021/">Accueil</NavLink>
                    <NavLink activeClassName='active' to="/CharlesDenneulin_11_17062021/about">A Propos</NavLink>
                </div>
            </header>        
        )
    }
}