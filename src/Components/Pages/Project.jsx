import React from 'react';
import Layout from '../Layout';
import AnimateText from '../AnimateText';
import classes from "../Style/Project/project.module.css"
import { motion } from 'framer-motion';
import grocery from "../assets/grocery.png"
import shikho from "../assets/concol.png"
import mobile from "../assets/proect.png"
import doctor from "../assets/doctor.png"
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Project = () => {

    // bigCard
    const BigCard = ({ heading, title, text, thumbnail, link, gitLInk }) => {
        return <Link to={link} target='_blank'>
            <div className={classes.card}>
                <div className={classes.background} />
                <motion.img
                    whileHover={{ scale: 1.02 }}
                    className={classes.thumbnail} src={thumbnail} alt="" />
                <div className={classes.card_body}>
                    <h3 className={classes.headingText}>{title}</h3>
                    <h2 className={classes.secendText}>{heading}</h2>
                    <p className={classes.text}>{text}</p>
                    <div className={classes.cardFooter}>
                        <Link to={gitLInk} target="_blank">
                            <AiFillGithub className={classes.icon} /></Link>
                        <Link to={link} target='_blank' className={classes.footerButton}>Visite Project</Link>
                    </div>
                </div>
            </div>
        </Link>
    }
    // singel card
    const SingelCard = ({ heading, title, thumbnail, link, gitLInk }) => {
        return <div className={classes.singelCard}>
                <div className={classes.singelBackground} />
                <motion.img
                    whileHover={{ scale: 1.02 }} className={classes.singelThumbnail} src={thumbnail} alt="" />
                <div className={classes.singelCardBody}>
                    <h3 className={classes.singelHeadingText}>{title}</h3>
                    <h2 className={classes.SingelSecendText}>{heading}</h2>
                    <div className={classes.singelCardFooter}>
                        <a href={link} target='_blank' className={classes.singelFooterButton}>Visite Project</a>
                        
                    </div>
                </div>
            </div>
    }

    return (
        <div>
            <Layout className={classes.container}>
                <AnimateText text="Imagination Trumps Knowledge! "></AnimateText>
                <div className={classes.main}>
                    <BigCard
                        heading="Shikho Project simple form"
                        title="Sikho Project"
                        thumbnail={shikho}
                        text="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        link="https://shiko.vercel.app/"
                        gitLInk="https://github.com/sadik131/shiko"
                    />
                    {/* singel cards */}
                    <div className={classes.singelCards}>
                        <SingelCard
                            heading="Doctors Portal Application"
                            title="Doctors Portal Project"
                            link="https://doctors-potal-client.vercel.app/"
                            thumbnail={doctor}
                        />
                        <SingelCard
                            heading="10 Project Application"
                            title="React Project"
                            thumbnail={grocery}
                            link="https://melodic-vacherin-cf23a5.netlify.app/"
                        />
                    </div>
                    <BigCard
                        heading="Mobile Shop Application"
                        title="Mobile Shop"
                        thumbnail={mobile}
                        text="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        link="https://mobile-shop-project-eight.vercel.app/"
                        gitLInk="https://github.com/sadik131/mobile_Shop_project"
                    />
                </div>
            </Layout>
        </div>
    );
}

export default Project;
