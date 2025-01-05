import HeroImg from '../assets/profile1.png';
import { motion } from "framer-motion";


export default function About() {
    return (
        <section className="flex flex-col-reverse px-2 py-16 md:flex-row pt-20 justify-center" id="about">
            <motion.div 
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:100}}
                transition={{duration:1}}
                viewport={{ once: true }}
                className="pt-8 pb-20 md:pr-16 md:w-1/3 flex justify-center md:justify-start">
                <img src={HeroImg} alt="profile" />
            </motion.div>
            <motion.div 
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:100}}
                transition={{duration:0.5}}
                viewport={{ once: true }}
                className="md:w-1/2 pt-5">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">ABOUT</h1>
                    <div className="w-16 h-1 bg-cyan-800 mx-auto mt-"></div>
                </div>
                <div className="outfit-200">
                    <p className="pb-5">
                        Tech Enthusiast, Building the Future with Cutting-Edge Solutions
                        <br /><br />
                    </p>
                    <div className="md:flex">
                        <div className="pr-20">
                            <ul>
                                <li className="pb-6">
                                    <strong>Email:</strong> <span>r.soorya03@gmail.com</span>
                                </li>
                                <li className="pb-6">
                                    <strong>Phone:</strong> <span>+91 63857 61316</span>
                                </li>
                                <li className="pb-6">
                                    <strong>City:</strong> <span>Coimbatore, Tamil Nadu, India</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className="pb-6">
                                    <strong>Degree:</strong> <span>Bachelors in Technology</span>
                                </li>
                                {/* <li className="pb-6">
                                    <strong>Website:</strong> <span>---------------------</span>
                                </li> */}
                                <li className="pb-6">
                                    <strong>Freelance:</strong> <span>Available</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="pb-8">
                        <br />
                        Software developer with hands-on experience in Python, focused on providing AI-driven solutions to solve real-world problems. 
                        Skilled in leveraging AI technologies to enhance predictive capabilities and develop impactful applications.
                        Passionate about using AI to drive innovation, optimize processes, and improve user experiences.
                        With a strong interest in Python, Machine Learning, and Generative AI, I am committed to continuous learning and advancing software development practices through cutting-edge solutions.
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
