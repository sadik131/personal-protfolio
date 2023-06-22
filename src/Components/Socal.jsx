import React from 'react';
import { AiOutlineTwitter ,AiFillGithub ,AiFillLinkedin} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs';
import classes from "../Components/Style/Nav/icon.module.css"


const Socal = () => {
    return (
        <div>
            <AiOutlineTwitter className={classes.icon}/>
            <AiFillGithub className={classes.icon}/>
            <AiFillLinkedin className={classes.icon}/>
            <BsFacebook className={classes.icon}/>
        </div>
    );
}

export default Socal;
