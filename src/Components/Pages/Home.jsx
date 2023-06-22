import React from 'react';
import bg from "../assets/developer-pic-1.webp"
import AnimateText from '../AnimateText';
import classes from "../Style/Home/Home.module.css"

const Home = () => {
    return (
        <div className={classes.container}>
            <div className={classes.banner}>
                <img src={bg} alt="" />
            </div>
            <div className={classes.textFild}>
                <AnimateText text="Turning Vision Into Reality With Code And Design. " />
                <p className={classes.info}>As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                <div>
                    <button className={classes.resume}>Resume</button>
                    <button className={classes.contact}>Contact</button>
                </div>
            </div>
        </div>
    );
}

export default Home;
