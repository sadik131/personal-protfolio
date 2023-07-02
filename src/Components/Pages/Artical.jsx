import React from 'react';
import Layout from '../Layout';
import classes from "../Style/Artical/artical.module.css"
import AnimateText from '../AnimateText';
import thumbnet from "../assets/crypto-screener-cover-image.webp"
import { SingelCard } from '../Hooks/SortCard';
import AllArtical from '../AllArtical';

const Artical = () => {
    return (
        <div>
            <Layout className={classes.container}>
                <AnimateText text="Words Can Change The World! " />
                <div className={classes.main}>
                    <SingelCard
                        heading="Build A Custom Pagination Component In Reactjs From Scratch"
                        text="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        thumbnail={thumbnet}
                        time="10"
                    />
                    <SingelCard
                        heading="Build A Custom Pagination Component In Reactjs From Scratch"
                        text="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                        thumbnail={thumbnet}
                        time="10"
                    />
                </div>
                <AllArtical></AllArtical>
            </Layout>
        </div>
    );
}

export default Artical;
