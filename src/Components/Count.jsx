import React, { useEffect, useRef } from 'react';
import classes from '../Components/Style/About/numberCount.module.css';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

const Count = ({ count, text }) => {

    const AnimateNumber = ({number}) => {
        const ref = useRef()
        const motionValue = useMotionValue(0)
        const springValue = useSpring(motionValue, { duration: 3000 })
        const inView = useInView(ref)

        useEffect(()=>{
            if(inView){
                motionValue.set(number)
            }
        },[inView,motionValue])

        useEffect(()=>{
            springValue.on("change",(latest)=>{
                if(ref.current && latest.toFixed(0) <= number){
                    ref.current.textContent = latest.toFixed(0)
                }
            })
        },[])

        return <h2 ref={ref}></h2>
    }

    return (
        <div>
            <span className={classes.title}>
            <AnimateNumber number={count}/> +
            </span>
            <h4 className={classes.text}>{text}</h4>

        </div>
    );
}

export default Count;
