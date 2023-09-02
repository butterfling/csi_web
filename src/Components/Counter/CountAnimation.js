import React, { useState, useEffect } from 'react';
import './CountAnimation.css';
import { motion } from 'framer-motion';

function CountUpAnimation() {
    const [animations, setAnimations] = useState([
        { icon: "fa fa-calendar-o", endValue: 8, text: 'Best Student Chapter' },
        { icon: 'fas fa-smile-beam', endValue: 500, text: 'Smiling Faces', textsuffix: "+", },
        { icon: "fa fa-star", endValue: 7, text: 'National Hackathons' },
        { icon: "fa fa-user", endValue: 800, text: 'Events', textsuffix: "+", },
    ]);

    useEffect(() => {
        const interval = 1000;
        animations.forEach((anim, index) => {
            const valueDisplay = document.querySelectorAll('.num')[index];
            const endValue = parseInt(valueDisplay.getAttribute('data-val'));
            const duration = Math.floor(interval / endValue);
            let startValue = 0;

            const counter = setInterval(() => {
                startValue += 1;
                valueDisplay.textContent = startValue;
                if (startValue === endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    }, []);

    return (
        <div className="count_wrapper object-center pt-20 flex place-content-center ml-auto mt-5">
            {animations.map((anim, index) => (
                <motion.div
                    key={index}
                    className="count_container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 * index, duration: 0.5 }}
                >
                    <i className={anim.icon}></i>
                    <div className='d-flex justify-content-center align-items-center '>
                    <span className="num" data-val={anim.endValue}>000</span>{anim.endValue==7?"": <h1 className='plus' style={{color:"white"}}>+</h1>}</div>
                    <span className="text">{anim.text}</span>
                </motion.div>
            ))}
        </div>
    );
}

export default CountUpAnimation;