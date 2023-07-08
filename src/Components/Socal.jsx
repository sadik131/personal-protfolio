import React from 'react';
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import classes from "../Components/Style/Nav/icon.module.css"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Socal = () => {

    return (
        <div className={classes.mobile}>
            <motion.a
                whileHover={{ scale: 1.2 }}
                className={classes.link}>
                <Link to="https://twitter.com/SuptoSarka48161" target='_blank'>
                    <AiOutlineTwitter
                        className={classes.icon} />
                </Link>
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.2 }}
                className={classes.link}>
                <Link to="https://github.com/sadik131" target='_blank'>
                    <AiFillGithub className={classes.icon} />
                </Link>
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.2 }}
                className={classes.link}>
                <Link to="https://www.linkedin.com/in/salatus-sadik-1a22a3212/" target='_blank'>
                    <AiFillLinkedin className={classes.icon} />
                </Link>
            </motion.a>
            <motion.a
                whileHover={{ scale: 1.2 }}
                className={classes.link}>
                <Link to="https://www.facebook.com/naim.sarker.716" target='_blank'>
                <BsFacebook className={classes.icon} />
                </Link>
            </motion.a>
        </div>
    );
}

export default Socal;
