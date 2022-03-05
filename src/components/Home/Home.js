import React, {useState} from 'react';
import './Home.css'
import SideBar from "./SideBar/SideBar";
import Content from "./Content/Content";
import Cart from "./Cart/Cart";

const Home = () => {
    const [cart, setCart] = useState();

    return (
        <section className='home'>
            <SideBar/>
            <Content/>
            <Cart/>
        </section>
    );
};

export default Home;