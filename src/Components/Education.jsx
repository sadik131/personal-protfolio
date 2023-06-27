import React, { useRef } from 'react';
import classes from "../Components/Style/About/Experience.module.css"
import { BiCaretDownCircle } from "react-icons/bi"
import { useScroll, motion } from 'framer-motion';

const Education = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    const Education = ({ title, address, time, artical,subject }) => {
        return <li className={classes.list}>
            <BiCaretDownCircle className={classes.icon} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1>{title}</h1>
                <div className={classes.location}>
                    <span>{time}</span>|
                    <span>{address}</span>
                    <p>{subject}</p>
                </div>
                <p className={classes.text}>{artical}</p>
            </motion.div>
        </li>
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Education</h1>
            <div ref={ref} className={classes.experience}>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className={classes.scrollbar} />
                <ul>
                    <Education
                        title="Bachelor Of Science In Computer Science"
                        address="Massachusetts Institute Of"
                        time="2016-2020"
                        subject="Technology (MIT)"
                        artical="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                    />
                    <Education
                        title="Bachelor Of Science In Computer Science"
                        address="Massachusetts Institute Of"
                        time="2016-2020"
                        subject="Technology (MIT)"
                        artical="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                    />
                    <Education
                        title="Bachelor Of Science In Computer Science"
                        address="Massachusetts Institute Of"
                        time="2016-2020"
                        subject="Technology (MIT)"
                        artical="Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."
                    />
                </ul>
            </div>
        </div>
    );
}

export default Education;
