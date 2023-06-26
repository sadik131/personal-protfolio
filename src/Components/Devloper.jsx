import React from 'react';
import classes from "../Components/Style/About/About.module.css"
import owner from "../Components/assets/developer-pic-2.webp"

const Devloper = ({className=""}) => {
    return (
        <div className={`${className}`}>
            <div className={classes.banner}>
                <div className={classes.background}></div>
                <img className={classes.img} src={owner} alt="" />
            </div>
        </div>
    );
}

export default Devloper;
