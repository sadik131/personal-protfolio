import React from 'react';
import { motion } from 'framer-motion';
import classes from "../Components/Style/About/skill.module.css"

const Skill = () => {

    const SkillSection = ({ title, x, y }) => {
        return <motion.div
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }}
            className={classes.skill}>
            {title}
        </motion.div>
    }

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>Skill</h1>
            <div className={classes.gradient}>
                <SkillSection x="" y="" title="web"></SkillSection>
                <SkillSection x="-55vh" y="-30vh" title="html"></SkillSection>
                <SkillSection x="-88vh" y="-0vh" title="css"></SkillSection>
                <SkillSection x="-55vh" y="30vh" title="javascript"></SkillSection>
                <SkillSection x="55vh" y="30vh" title="react"></SkillSection>
                <SkillSection x="85vh" y="00vh" title="MERN"></SkillSection>
                <SkillSection x="55vh" y="-30vh" title="Mongodb"></SkillSection>
                <SkillSection x="-6vh" y="-45vh" title="fireBase"></SkillSection>
            </div>
        </div>
    );
}

export default Skill;
