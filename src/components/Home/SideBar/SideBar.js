import React from 'react';
import Logo from '../../../assets/Home/logo.png'
import {Link, NavLink} from "react-router-dom";
import Pizza from "../../../assets/icons/pizza.png";
import Sets from "../../../assets/icons/sets.png";
import Wok from "../../../assets/icons/wok.png";
import Rolls from "../../../assets/icons/rolls.png";
import Sushi from "../../../assets/icons/sushi.png";
import Salad from "../../../assets/icons/salad.png";
import Soup from "../../../assets/icons/soup.png";
import CornDog from "../../../assets/icons/corndog.png";
import Drinks from "../../../assets/icons/drinks.png";
import Sale from "../../../assets/icons/sale.png";
import Soon from "./Soon";

const SideBar = () => {
    return (
        <aside className='home__sidebar'>
            <div className='home__sidebar-top'>
                <Link to='/'>
                    <img className='home__sidebar-logo' src={Logo} alt="Romsem Logo"/>
                </Link>
                <h1 className='home__sidebar-title'>Romsem</h1>
            </div>
            <ul className='home__sidebar-list'>
                <li className='home__sidebar-list-item'>
                    <img src={Pizza} alt="pizza"/>
                    <NavLink className='home__sidebar-link' to="/pizza">
                        Пицца</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Sets} alt="sets"/>
                    <NavLink className='home__sidebar-link' to="/sets">
                        Сеты</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Wok} alt="wok"/>
                    <NavLink className='home__sidebar-link' to="/wok">
                        WOK</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Rolls} alt="rolls"/>
                    <NavLink className='home__sidebar-link' to="/rolls">
                        Роллы</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Sushi} alt="sushi"/>
                    <NavLink className='home__sidebar-link' to="/sushi">
                        Суши</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Salad} alt="salad"/>
                    <NavLink className='home__sidebar-link' to="/salad">
                        Салаты</NavLink>
                    <Soon/>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Soup} alt="soup"/>
                    <NavLink className='home__sidebar-link' to="/soup">
                        Супы</NavLink>
                    <Soon/>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={CornDog} alt="corndog"/>
                    <NavLink className='home__sidebar-link' to="/corndog">
                        Корн доги</NavLink>
                    <Soon/>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Drinks} alt="drinks"/>
                    <NavLink className='home__sidebar-link' to="/drinks">
                        Напитки</NavLink>
                </li>
                <li className='home__sidebar-list-item'>
                    <img src={Sale} alt="sale"/>
                    <NavLink className='home__sidebar-link' to="/sale">
                        Акции</NavLink>
                    <Soon/>
                </li>
            </ul>
        </aside>
    );
};

export default SideBar;