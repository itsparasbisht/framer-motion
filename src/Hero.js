import React from 'react'
import './hero.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

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
        y: '-50vw'
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
            delay: 3,
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
            delay: 3,
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
    }
}

function Hero() {
    return (
        <motion.div className="hero">
            <motion.img
                variants={imgVariant}
                initial="hidden"
                animate="visible"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apple_logo_white.svg/1724px-Apple_logo_white.svg.png"
                alt="apple logo"
                exit={{opacity: 0, transition: {duration: 0.1,ease: 'easeInOut'}}}
            />
            <motion.div
                variants={sliderVariant}
                initial="hidden"
                animate="visible"
                className="hero__slider"
                exit={{opacity: 0, transition: {duration: 1, ease: 'easeInOut'}}}
            >
                <motion.h1 variants={h1Variant} exit={{x: "-100vw",transition: {duration: 1,ease: 'easeInOut'}}}>Introducing, all new</motion.h1>
                <motion.h3 variants={h3Variant} exit={{x: "-100vw",transition: {duration: 2,ease: 'easeInOut'}}}>iPhone 12 and iPhone 12 Pro Max</motion.h3>
                <motion.img variants={heroMainVariant} src="/images/img1.jpg" alt="" className="hero__mainImg" exit={{opacity: 0, transition: {duration: 1,ease: 'easeInOut'}}} />
            </motion.div>

            <Link to='/details'>
                <motion.button variants={btnVariant} initial="hidden" animate="visible" exit={{opacity: 0, transition: {duration: 1,ease: 'easeInOut'}}}>Go</motion.button>
            </Link>

        </motion.div>
    )
}

export default Hero
