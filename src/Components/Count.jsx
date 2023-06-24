import React from 'react';
import classes from '../Components/Style/About/numberCount.module.css';

const Count = ({count,text}) => {
    return (
        <div>
            <h2 className={classes.title}>{count}+</h2>
            <h4 className={classes.text}>{text}</h4>

        </div>
    );
}

export default Count;
