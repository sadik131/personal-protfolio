import React from 'react';
import Layout from '../Layout';
import AnimateText from '../AnimateText';
import classes from "../Style/Project/project.module.css"
import { motion } from 'framer-motion';
import thumbnet from "../assets/crypto-screener-cover-image.webp"
import { AiFillGithub } from 'react-icons/ai';

const Project = () => {

    // bigCard
    const BigCard = ({ heading, title, text, thumbnail }) => {
        return <div className={classes.card}>
            <div className={classes.background} />
            <motion.img
                whileHover={{ scale: 1.02 }}
                className={classes.thumbnail} src={thumbnail} alt="" />
            <div className={classes.card_body}>
                <h3 className={classes.headingText}>{title}</h3>
                <h2 className={classes.secendText}>{heading}</h2>
                <p className={classes.text}>{text}</p>
                <div className={classes.cardFooter}>
                    <AiFillGithub className={classes.icon} />
                    <button className={classes.footerButton}>Visite Project</button>
                </div>
            </div>
        </div>
    }
    // singel card
    const SingelCard = ({ heading, title, thumbnail }) => {
        return <div className={classes.singelCard}>
            <div className={classes.singelBackground} />
            <motion.img
                whileHover={{ scale: 1.02 }} className={classes.singelThumbnail} src={thumbnail} alt="" />
            <div className={classes.singelCardBody}>
                <h3 className={classes.singelHeadingText}>{title}</h3>
                <h2 className={classes.SingelSecendText}>{heading}</h2>
                <div className={classes.singelCardFooter}>
                    <a href='*' className={classes.singelFooterButton}>Visite Project</a>
                    <AiFillGithub className={classes.icon} />
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
                        heading="Crypto Screener Application"
                        title="Featured Project"
                        thumbnail={thumbnet}
                        text="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                    />
                    {/* singel cards */}
                    <div className={classes.singelCards}>
                        <SingelCard
                            heading="Crypto Screener Application"
                            title="Featured Project"
                            thumbnail={thumbnet}
                        />
                        <SingelCard
                            heading="Crypto Screener Application"
                            title="Featured Project"
                            thumbnail={thumbnet}
                        />
                    </div>
                    <BigCard
                        heading="Crypto Screener Application"
                        title="Featured Project"
                        thumbnail={thumbnet}
                        text="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                    />
                </div>
            </Layout>
        </div>
    );
}

export default Project;
