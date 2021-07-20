import React from 'react'
import './hero.css'
import { motion } from 'framer-motion'

const imgVariant = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2,
        }
    }
}

const sliderVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 3,
            duration: 2,
            when: "beforeChildren"
        }
    }
}

const h1Variant = {
    hidden: {
        y: '-20vw'
    },
    visible: {
        y: 0,
        transition: {
            duration: 2,
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
            delay: 1,
            duration: 2,
        }
    }
}
const heroMainVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 2,
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
    },
    hover: {
        backgroundColor: 'blue',
        borderColor: 'blue',
        cursor: 'pointer',
    }
}

function Hero() {
    return (
        <motion.div className="hero">
            <motion.img
                variants={imgVariant}
                initial="hidden"
                animate="visible"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="apple logo"
            />
            <motion.div
                variants={sliderVariant}
                initial="hidden"
                animate="visible"
                className="hero__slider"
            >
                <motion.h1 variants={h1Variant}>Introducing</motion.h1>
                <motion.h3 variants={h3Variant}>iPhone 12 Pro and iPhone 12 Pro Max</motion.h3>
                <motion.img variants={heroMainVariant} src="/images/img1.jpg" alt="" className="hero__mainImg" />
            </motion.div>
            <motion.button variants={btnVariant} initial="hidden" animate="visible" whileHover="hover">Go</motion.button>
        </motion.div>
    )
}

export default Hero
