import React from 'react';
import { AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import classes from "../Components/Style/Nav/icon.module.css"
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Socal = () => {
    
    return (
        <div>
            <motion.a
            whileHover={{scale:1.2}}
            className={classes.link}>
                <AiOutlineTwitter
                    className={classes.icon} />
            </motion.a>
            <motion.a
            whileHover={{scale:1.2}}
            className={classes.link}>
                <AiFillGithub className={classes.icon} />
            </motion.a>
            <motion.a
            whileHover={{scale:1.2}}
            className={classes.link}>
                <AiFillLinkedin className={classes.icon} />
            </motion.a>
            <motion.a
            whileHover={{scale:1.2}}
            className={classes.link}>
                <BsFacebook className={classes.icon} />
            </motion.a>
        </div>
    );
}

export default Socal;
