import React, { useRef } from 'react';
import classes from "../Components/Style/About/Experience.module.css"
import { BiCaretDownCircle } from "react-icons/bi"
import { useScroll, motion } from 'framer-motion';

const Experience = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })

    const Experience = ({ title, address, time, artical }) => {
        return <li className={classes.list}>
            <BiCaretDownCircle className={classes.icon} />
            <motion.div
            initial={{y:50}}
            whileInView={{y:0}}
            transition={{duration:0.5}}
            >
                <h1>{title}</h1>
                <div className={classes.location}>
                    <span>{time}</span>|
                    <span>{address}</span>
                </div>
                <p className={classes.text}>{artical}</p>
            </motion.div>
        </li>
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Experience</h1>
            <div ref={ref} className={classes.experience}>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className={classes.scrollbar} />
                <ul>

                    <Experience
                        title="Software Engineer"
                        address="Mountain View, CA"
                        time="2022-Present"
                        artical="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
                    />
                    <Experience
                        title="Software Engineer"
                        address="Mountain View, CA"
                        time="2022-Present"
                        artical="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
                    />
                    <Experience
                        title="Software Engineer"
                        address="Mountain View, CA"
                        time="2022-Present"
                        artical="Worked on a team responsible for developing a new mobile app feature that allowed users to create and share short-form video content, including designing and implementing a new user interface and developing the backend infrastructure to support the feature."
                    />
                </ul>
            </div>
        </div>
    );
}

export default Experience;
