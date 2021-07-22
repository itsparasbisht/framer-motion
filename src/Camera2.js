import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './camera2.css'

const baseVariant = {
    initial: {
        
    },
    animate: {
        
        transition: {
            staggerChildren: 1.5
        }
    },
    exit: {
        y: '-200vw',
        transition: {
            duration: 2
        }
    }
}

const h3Variant = {
    initial: {
        x: '-100vw'
    },
    animate: {
        x: 0,
        transition: {
            duration: 2
        }
    }
}

const btnVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 9
        }
    }
}

function Camera2() {
    return (
        <motion.div className="camera2" variants={baseVariant} initial="initial" animate="animate" exit="exit">
            <img src="/images/img2.jpg" alt="" />
            <motion.h3 variants={h3Variant}>
                87% better <br /> low-light photos
            </motion.h3>
            <motion.h3 variants={h3Variant}>
                5x optical <br /> zoom range
            </motion.h3>
            <motion.h3 variants={h3Variant}>
                New sensor-shift <br /> optical image <br /> stabilisation
            </motion.h3>

            <Link to='/display'>
                <motion.button variants={btnVariant} initial="hidden" animate="visible" exit={{opacity: 0, transition: {duration: 1,ease: 'easeInOut'}}}>Go</motion.button>
            </Link>
        </motion.div>
    )
}

export default Camera2
