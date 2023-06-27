import React from 'react';
import classes from '../Components/Style/About/numberCount.module.css';
import Count from './Count';

const NumberCount = () => {
    return (
        <div className={classes.counter}>
            <Count count={50} text="Satisfied Clients"/>
            <Count count={40} text="Projects Completed"/>
            <Count count={2} text="Years Of Experience"/>
        </div>
    );
}

export default NumberCount;
