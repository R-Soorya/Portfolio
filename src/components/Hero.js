import HeroImg from '../assets/profile.png';
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import {TypeAnimation} from 'react-type-animation'
import { motion } from "framer-motion";

export default function Hero() {
    return <section className='flex flex-col md:flex-row px-5 py-28 pb-40 justify-center bg-primary' id='hero'>
        <motion.div 
        initial={{ scale:0.5, opacity:0}}
        animate={{ scale:1, opacity:1}}
        transition={{duration:0.5, delay:0.5}}

        className='md:w-1/2 flex flex-col '>
            <h1  className='text-6xl font-hero-font text-slate-900 mt-14'> Soorya Rajkumar
                <p className='text-2xl text-gray-500 mt-3'> I'm a {" "}
                <TypeAnimation
                sequence={[
                    "Software Developer",
                    1000,
                    "Machine Learning Engineer",
                    1000,
                    "Generative AI Engineer",
                    1000
                ]}
                repeat={Infinity}
                />
                </p> 
            </h1>
            <div className='py-8'>
            <a className='btn' href="https://drive.google.com/file/d/14_nNn3u_n0NIcyqGIWugh_SxVCrtofge/view?usp=sharing">Download Resume</a>
            </div>
            <div className='flex'>
                <a href="https://www.linkedin.com/in/soorya-rajkumar/" className='pr-3 hover:text-cyan-950' aria-label="LinkedIn">
                <IoLogoLinkedin size={28}/>
                </a>
                <a href="https://github.com/R-Soorya" className='hover:text-cyan-950' aria-label="GitHub">
                <IoLogoGithub size={28}/>
                </a>
            </div>
        </motion.div>
        <img className='md:w-1/4 opacity-50' src={HeroImg} alt='profile'/>
    </section> 
}