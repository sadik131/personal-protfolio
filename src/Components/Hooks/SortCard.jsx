import { motion } from "framer-motion"
import { AiFillGithub } from "react-icons/ai"

export const SingelCard = ({ heading, text, thumbnail ,time}) => {
    return <div className="singelCard">
        <div className="singelBackground" />
        <motion.img
            whileHover={{ scale: 1.02 }} className="singelThumbnail" src={thumbnail} alt="" />
        <div className="singelCardBody">
            <h2 className="SingelSecendText">{heading}</h2>
            <p className="singelHeadingText">{text}</p>
            <h3 className="time">{time} Min Read</h3>
        </div>
    </div>
}