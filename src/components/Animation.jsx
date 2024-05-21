import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const ImageTextContainer = ({ imageSrc, textContent }) => {
    const imageWidth = 200;
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    };

    return (
        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex space-x-10 items-center">
            <motion.img
                src={imageSrc}
                initial={{ opacity: 0, x: -imageWidth }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                alt="Fading Image"
                style={{ width: imageWidth }}
            />
            <div className="text-center text-4xl font-bold">{textContent}</div>
        </motion.div>
    );
};


export const TextFadeUpAnimation = ({ textContent }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-100px 0px',
    });

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    };

    return (
        <motion.div ref={ref} variants={textVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="text-center">
            {textContent}
        </motion.div>
    );
};
