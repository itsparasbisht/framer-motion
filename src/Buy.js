import { motion } from 'framer-motion'
import React from 'react'
import './buy.css'

const baseVariant = {
    hidden: {
        y: '-200vw'
    },
    visible: {
        y: 0,
        transition: {
            delay: 0,
            duration: 2,
            staggerChildren : 2
        }
    },
    exit: {

    }
}

const imgVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 3,
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
            duration: 2
        }
    }
}

function Buy() {
    return (
        <motion.div className="buy" variants={baseVariant} initial="hidden" animate="visible" exit="exit">
            <motion.img variants={imgVariant} src="/images/img4.jpg" alt="" />
            <motion.h1>Buy your iphone <br /> now.</motion.h1>
            <motion.h3>get instant cashback on using apple cards.</motion.h3>

            <motion.button variants={btnVariant} className="buy__btn">buy now</motion.button>
            <motion.button variants={btnVariant} className="buy__store">view store</motion.button>
        </motion.div>
    )
}

export default Buy
