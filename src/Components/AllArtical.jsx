import React, { useRef } from 'react';
import classes from "./Style/Artical/AllArtical.module.css"
import { Link } from 'react-router-dom';
import image1 from "./assets/react.png"
import { useMotionValue, motion } from 'framer-motion';

const AllArtical = () => {

    const MovingImg = ({ title, img, href }) => {

        const x = useMotionValue(0)
        const y = useMotionValue(0)
        const ref = useRef(null)

        const mouseMove = (event) => {
            ref.current.style.display = "inline-block"
            x.set(event.pageX)
            y.set(-10)
        }

        const mouseLeave = (event) => {
            ref.current.style.display = "none"
            x.set(0)
            y.set(0)
        }
        return <>
            <Link
                onMouseMove={mouseMove}
                onMouseLeave={mouseLeave}
                className={classes.link} href={href}>
                <h2 className={classes.h2}>{title}</h2>
                <motion.img 
                style={{
                    x:x,
                    y:y
                }}
                ref={ref} className={classes.image} src={img} alt="" />
            </Link>
        </>
    }

    const Artical = ({ title, time, href, img }) => {
        return <>
            <div className={classes.artical}>
                <MovingImg
                    title={title}
                    img={img}
                    href={href}
                />
                <span className={classes.time}>{time}</span>
            </div>
        </>
    }
    return (
        <div className='container'>
            <div className={classes.component}>
                <h1 className={classes.heading}>All Articals</h1>
                <Artical
                    href="www.google.com"
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={image1}
                    time="January 27, 2023"

                />
                <Artical
                    href="www.google.com"
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={image1}
                    time="January 27, 2023"

                />
                <Artical
                    href="www.google.com"
                    title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                    img={image1}
                    time="January 27, 2023"

                />
            </div>
        </div>
    );
}

export default AllArtical;
