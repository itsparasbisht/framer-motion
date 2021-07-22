import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'
import './details.css'

const btnVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 10
        }
    }
}

const baseVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
            when: "beforeChildren",
            staggerChildren: 2
        }
    },
    exit: {
        y: '-200vw',
        transition: {
            delay: 0,
            duration: 2.5
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
            duration: 1
        }
    },
    exit: {
        y: '-100vw',
        transition: {
            duration: 2
        }
    }
}

const h3Variant = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: {
            duration: 1
        }
    },
    exit: {
        x: '-100vw',
        transition: {
            duration: 2
        }
    }
}

const chipVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 1.5,
        }
    },
    exit: {
        x: '200vw',
        transition: {
            delay: 0,
            duration: 2
        }
    }
}

const paraVariant = {
    hidden: {
        y: '200vw'
    },
    visible: {
        y: 0,
        transition: {
            duration: 1.5,
        }
    },
    exit: {
        y: '-200vw',
        transition: {
            delay: 0.5,
            duration: 2
        }
    }
}


function Details() {
    return (
        <motion.div variants={baseVariant} initial="hidden" animate="visible" exit="exit" className="details">
            <motion.h1 variants={h1Variant}>A14 Bionic</motion.h1>
            <motion.h3 variants={h3Variant}>The only thing even close was our last chip.</motion.h3>
            <motion.p variants={paraVariant}>
                A14 Bionic is the first 5-nanometre chip in the industry, with advanced components literally atoms wide. New ISP powers Dolby Vision recording - something no pro movie camera, let alone any other phone, can do.
            </motion.p>
            <motion.img variants={chipVariant} src="/images/chip.jpg" alt="" />

            <Link to='/camera'>
                <motion.button variants={btnVariant} initial="hidden" animate="visible" exit={{opacity: 0, transition: {duration: 1,ease: 'easeInOut'}}}>Go</motion.button>
            </Link>
        </motion.div>
    )
}

export default Details
