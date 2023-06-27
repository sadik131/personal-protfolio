import React from 'react';
import Layout from '../Layout';
import AnimateText from '../AnimateText';
import classes from "../Style/About/About.module.css"
import AboutMe from '../AboutMe';
import Devloper from '../Devloper';
import NumberCount from '../NumberCount';
import Skill from '../Skill';
import Experience from '../Experience';
import Education from '../Education';

const About = () => {
    return (
        <Layout className={classes.container}>
            <AnimateText text="Passion Fuels Purpose!" />
            <div className={classes.grid}>
                <AboutMe className={classes.gridCol} />
                <Devloper className={classes.gridCol} />
                <NumberCount />
            </div>
            <Skill></Skill>
            <Experience></Experience>
            <Education></Education>
        </Layout>
    );
}

export default About;
