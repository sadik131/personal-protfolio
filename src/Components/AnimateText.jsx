import React from 'react';
import { motion } from 'framer-motion';

const AnimateText = ({ text }) => {

    const quote = {
        initial:{
            opacity:0
        },
        animate:{
            opacity:1,
            transition:{
                delay:0.5,
                staggerChildren:0.08
            }
        }
    }

    const singelWord = {
        initial:{
           y:50,
           opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:1
            }
        }
    }

    return (
        <div className='animateText'>
            <motion.h1
                className='heading-text'
                variants={quote}
                initial="initial"
                animate="animate"
            >
                {text.split(" ").map((word, index) => (
                    <motion.span variants={singelWord }className='word-animate' key={index}>{word}</motion.span>
                ))}
            </motion.h1>
        </div>
    );
}

export default AnimateText;
