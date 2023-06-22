import React from 'react';
import classes from '../Components/Style/Footer.module.css';
import { AiOutlineHeart } from 'react-icons/ai';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <div className={classes.container}>
            <div className={classes.underline}></div>
            <div className={classes.copy}>
                <h2>{currentYear} &copy; All Rights Reserved.</h2>
                <h2>Design By <AiOutlineHeart className={classes.icon}/> Supto</h2>
                <h2>Say Hello</h2>
            </div>
        </div>
    );
}

export default Footer;
