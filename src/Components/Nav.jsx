import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Socal from './Socal';
import classes from "../Components/Style/Nav/Nav.module.css"
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';


const Nav = () => {
    const { pathname } = useLocation()
    const [openNav, setOpenNav] = useState(false)

    const CustomLink = ({ href, title, style = "" }) => {

        return <Link onClick={()=>setOpenNav(!openNav)} className={classes.link} to={href}>{title}
            <span className={`${href === pathname ? style : classes.activeLink}`}>&nbsp;</span>
        </Link>
    }

    // navbur function



    return (
        <div className={classes.container}>
            <div className={classes.mobile}>
                <CustomLink
                    href="/"
                    title="Home"
                    style={`${classes.linkClass}`}
                >
                </CustomLink>
                <CustomLink
                    href="/about"
                    title="About"
                    style={`${classes.linkClass}`}
                >
                </CustomLink>
                <CustomLink
                    href="/project"
                    title="Project"
                    style={`${classes.linkClass}`}
                >
                </CustomLink>
                <CustomLink
                    href="/artical"
                    title="Artical"
                    style={`${classes.linkClass}`}
                >
                </CustomLink>
            </div>
            <div className={classes.hamburgerMenu}>
                <GiHamburgerMenu
                    onClick={() => setOpenNav(!openNav)}
                    className={classes.icon} />
            </div>

            {/* mobile navbar */}

            {openNav && <motion.div>
                <div>
                    <RxCross2
                        onClick={() => setOpenNav(!openNav)}
                        className={classes.cross} />
                </div>
                <div className={classes.phon}>
                    <CustomLink
                        href="/"
                        title="Home"
                        style={`${classes.mobilelinkClass}`}
                    >
                    </CustomLink>
                    <CustomLink
                        href="/about"
                        title="About"
                        style={`${classes.mobilelinkClass}`}
                    >
                    </CustomLink>
                    <CustomLink
                        href="/project"
                        title="Project"
                        style={`${classes.mobilelinkClass}`}
                    >
                    </CustomLink>
                    <CustomLink
                        href="/artical"
                        title="Artical"
                        style={`${classes.mobilelinkClass}`}
                    >
                    </CustomLink>
                </div>
            </motion.div>}

            <motion.span
                whileHover={{
                    background: ["#020024", "#00d4ff", "#6a929a", "#443769", "#8daf55", "#7a4624"]
                }}
                transition={{ duration: 3 }}
                className={classes.logo}
            >SR</motion.span>
            <Socal></Socal>
        </div>
    );
}

export default Nav;
