import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './display.css'

const btnVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 6
        }
    }
}

const baseVariant = {
    hidden: {
        
    },
    visible: {
        transition: {
            
        }
    },
    exit: {

    }
}

const imgVariant = {
    hidden: {
        y: '100vw'
    },
    visible: {
        y: 0,
        transition: {
            duration: 2
        }
    }
}

const h1Variant = {
    hidden: {
        y: '-100vw'
    },
    visible: {
        y: 0,
        transition: {
            delay: 1,
            duration: 2
        }
    }
}

const h3Variant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 4,
            duration: 2
        }
    }
}

function Display() {
    return (
        <motion.div className="display" variants={baseVariant} initial="hidden" animate="visible" exit="exit">
            <motion.img variants={imgVariant} src="/images/img3.png" alt="" />
            <motion.h1 variants={h1Variant}>Less bezel, more screen.</motion.h1>

            <Link to='/details'>
                <motion.button variants={btnVariant} initial="hidden" animate="visible" exit={{opacity: 0, transition: {duration: 1,ease: 'easeInOut'}}}>Go</motion.button>
            </Link>

            <div className="display__specs">
                <div>
                    <motion.h3 variants={h3Variant}>Super Retina XDR display</motion.h3>
                    <motion.h3 variants={h3Variant}>17 cm / 6.7‑inch (diagonal) all‑screen OLED display</motion.h3>
                </div>
                
                <div>
                    <motion.h3 variants={h3Variant}>2778x1284-pixel resolution at 458 ppi</motion.h3>
                    <motion.h3 variants={h3Variant}>1,200 nits max brightness</motion.h3>
                </div>
            </div>
        </motion.div>
    )
}

export default Display
