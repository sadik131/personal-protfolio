import React from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Socal from './Socal';
import classes from "../Components/Style/Nav/Nav.module.css"

const Nav = () => {
    const {pathname} = useLocation()
    
    const CustomLink = ({ href, title, style="" }) => {
        
        return <Link className={classes.link} to={href}>{title}
        <span className={`${href === pathname ? style : classes.activeLink}`}>&nbsp;</span>
    </Link>
    }

    return (
        <div className={classes.container}>
            <div>

                <CustomLink
                    className={classes.link}
                    href="/"
                    title="Home"
                    style={`${classes.linkClass}`}
                >
                </CustomLink>
                <CustomLink
                    className={classes.link}
                    href="/about"
                    title="About"
                    style={`${classes.linkClass}`}
                >
                </CustomLink>
                <CustomLink
                    className={classes.link}
                    href="/project"
                    title="Project"
                    style={`${classes.linkClass}`}
                >
                </CustomLink>
                <CustomLink
                    className={classes.link}
                    href="/artical"
                    title="Artical"
                    style={`${classes.linkClass}`}
                >
                </CustomLink>
            </div>
            <motion.span
                whileHover={{
                    background: ["#020024", "#00d4ff", "#6a929a", "#443769", "#8daf55", "#7a4624"]
                }}
                transition={{ duration: 3}}
                className={classes.logo}
            >SR</motion.span>
            <Socal></Socal>
        </div>
    );
}

export default Nav;
