import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './camera.css'

const cameraVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

const imgVariant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 2,
            duration: 2
        }
    }
}

const h1Variant = {
    initial: {
        y: '-300vw'
    },
    animate: {
        y: 0,
        transition: {
            delay: 3,
            duration: 2
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            duration: 2
        }
    }
}

const h2Variant = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delay: 5,
            duration: 2
        }
    },
    exit: {
        y: '200vw',
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

function Camera() {
    return (
        <motion.div variants={cameraVariant} initial="initial" animate="animate" exit="exit" className="camera">
            <motion.img variants={imgVariant} src="/images/img2.jpg" alt="" />
            <motion.h1 variants={h1Variant}>Pro camera system</motion.h1>
            <motion.h2 variants={h2Variant}>A new era for Night photography.</motion.h2>

            <Link to='/camera2'>
                <motion.button variants={btnVariant} initial="hidden" animate="visible" exit={{opacity: 0, transition: {duration: 1,ease: 'easeInOut'}}}>Go</motion.button>
            </Link>
        </motion.div>
    )
}

export default Camera
