import { FaPython, FaDatabase } from 'react-icons/fa';
import { DiDjango } from 'react-icons/di';
import { SiTensorflow, SiScikitlearn, SiNumpy, SiPandas } from 'react-icons/si';
import { motion } from "framer-motion";


export default function Skills() {
    return (
        <motion.div
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:100}}
        transition={{duration:1}}
        viewport={{ once: true }}
        >
        <section className="px-5 md:px-20 py-20 bg-primary" id="skills">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">SKILLS</h1>
                <div className="w-16 h-1 bg-cyan-800 mx-auto mt-2"></div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row w-full gap-8 justify-center">
                    {/* Python - Django */}
                    <div className="skill">
                        <FaPython className="text-2xl mb-1 mr-2 text-blue-500" />
                        <h3 className="skill-name">Python</h3>
                        {/* Skill Progress Bar */}
                        <div className="skill-bar">
                            <div className="bg-blue-500 h-1 rounded-full" style={{ width: '90%' }}></div>
                        </div>
                        <p className='ml-10'>90%</p>
                        </div>

                    <div className="skill">
                        <DiDjango className="text-3xl mb-1 mr-2 text-green-500" />
                        <h3 className="skill-name">Django</h3>
                        {/* Skill Progress Bar */}
                        <div className="skill-bar">
                            <div className="bg-green-500 h-1 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <p className='ml-10'>80%</p>
                    </div>

                    
                </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center mt-8">
                {/* Row 2 */}
                <div className="flex flex-col md:flex-row w-full gap-8 justify-center">
                    {/* FastAPI - MySQL */}
                    
                    <div className="skill">
                        <FaPython className="text-3xl mb-1 mr-2 text-yellow-500" /> {/* Use the Python icon for Flask */}
                        <h3 className="skill-name">FastAPI</h3>
                        {/* Skill Progress Bar */}
                        <div className="skill-bar">
                            <div className="bg-yellow-500 h-1 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <p className='ml-10'>80%</p>
                    </div>

                    <div className="skill">
                        <FaDatabase className="text-2xl mb-1 mr-2 text-purple-500" />
                        <h3 className="skill-name">MySQL</h3>
                        {/* Skill Progress Bar */}
                        <div className="skill-bar">
                            <div className="bg-purple-500 h-1 rounded-full" style={{ width: '70%' }}></div>    
                        </div>
                        <p className='ml-10'>70%</p>
                    </div>

                </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center mt-8">
                {/* Row 3 */}
                <div className="flex flex-col md:flex-row w-full gap-8 justify-center">
                    {/* Pandas - NumPy */}
                    <div className="skill">
                        <SiPandas className="text-3xl mb-1 mr-2 text-green-500" />
                        <h3 className="skill-name">Pandas</h3>
                        {/* Skill Progress Bar */}
                        <div className="skill-bar">
                            <div className="bg-green-500 h-1 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <p className='ml-10'>80%</p>
                        
                    </div>

                    <div className="skill">
                        <SiNumpy className="text-3xl mb-1 mr-2 text-blue-500" />
                        <h3 className="skill-name">NumPy</h3>
                        {/* Skill Progress Bar */}
                        <div className="skill-bar">
                            <div className="bg-blue-500 h-1 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <p className='ml-10'>70%</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap gap-8 justify-center mt-8">
                {/* Row 4 */}
                <div className="flex flex-col md:flex-row w-full gap-8 justify-center">
                    {/* Scikit-learn - TensorFlow */}
                    <div className="skill">
                        <SiScikitlearn className="text-3xl mb-1 mr-2 text-green-500" />
                        <h3 className="skill-name">Scikit-learn</h3>
                        {/* Skill Progress Bar */}
                        <div className="skill-bar">
                            <div className="bg-green-500 h-1 rounded-full" style={{ width: '80%' }}></div>
                        </div>
                        <p className='ml-10'>80%</p>
                    </div>

                    <div className="skill">
                        <SiTensorflow className="text-3xl mb-1 mr-2 text-blue-500" />
                        <h3 className="skill-name">TensorFlow</h3>
                        {/* Skill Progress Bar */}
                        <div className="skill-bar">
                            <div className="bg-blue-500 h-1 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                        <p className='ml-10'>70%</p>
                    </div>
                </div>
            </div>

        </section>
        </motion.div>
    );
}
