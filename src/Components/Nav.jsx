import React from 'react';
import { Link } from 'react-router-dom';
import Socal from './Socal';
import classes from "../Components/Style/Nav/Nav.module.css"

const Nav = () => {
    const link = [
        <div>
            <Link className={classes.link} id="1" to="/">Home</Link>
            <Link className={classes.link} id="2" to="/about">About</Link>
            <Link className={classes.link} id="3" to="/project">Project</Link>
            <Link className={classes.link} id="4" to="/artical">Artical</Link>
        </div>
    ]
    return (
        <div className={classes.container}>
            {link}
            <span className={classes.logo}>SR</span>
            <Socal></Socal>
        </div>
    );
}

export default Nav;
