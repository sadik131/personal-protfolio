import React from 'react';
import Paragraph from './Paragraph';
import classes from "../Components/Style/About/AboutMe.module.css"

const AboutMe = ({ className = "" }) => {
    return (
        <div className={`${className}`}>
            <h3 className={classes.title}>BIOGRAPHY</h3>
            <Paragraph className={classes.text} text="Hi, I'm CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients' visions to life." />
            <Paragraph className={classes.text}  text="I believe that design is about more than just making things look pretty – it's about solving problems and creating intuitive, enjoyable experiences for users." />
            <Paragraph className={classes.text}  text="Whether I'm working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project." />
        </div>
    );
}

export default AboutMe;
