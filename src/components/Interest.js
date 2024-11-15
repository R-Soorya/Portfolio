import { FaRobot, FaBrain, FaCogs, FaComments} from 'react-icons/fa';
import { motion } from "framer-motion";


export default function Interests() {
    return (
        <motion.div
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:100}}
        transition={{duration:1}}
        viewport={{ once: true }}
        >
        <section className="px-5 md:px-20 py-20" id="interests">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">AREA OF INTERESTS</h1>
                <div className="w-16 h-1 bg-cyan-800 mx-auto mt-2"></div>
            </div>

            {/* Caption under the main heading */}
            <p className="text-lg text-center text-gray-500 mb-14">
                Explore my areas of interest, where I dive deep into cutting-edge technologies and innovative solutions to shape the future of AI and software development.
            </p>

            <div className="flex flex-col md:flex-row gap-10 justify-center">
                {/* Artificial Intelligence */}
                <div className="flex flex-col items-center text-center p-6 border-2 duration-300 hover:border-slate-800 rounded-lg shadow-lg">
                    <FaRobot className="text-5xl mb-4 text-green-500" />
                    <h3 className="text-xl font-semibold mb-2">ARTIFICIAL INTELLIGENCE</h3>
                </div>

                {/* Generative AI */}
                <div className="flex flex-col items-center text-center p-6 border-2 duration-300 hover:border-slate-800 rounded-lg shadow-lg">
                    <FaBrain className="text-5xl mb-4 text-yellow-500" />
                    <h3 className="text-xl font-semibold mb-2">GENERATIVE AI</h3>
                </div>

                {/* Machine Learning */}
                <div className="flex flex-col items-center text-center p-6 border-2 duration-300 hover:border-slate-800 rounded-lg shadow-lg">
                    <FaCogs className="text-5xl mb-4 text-blue-500" />
                    <h3 className="text-xl font-semibold mb-2">MACHINE LEARNING</h3>
                </div>

                {/* Deep Learning */}
                <div className="flex flex-col items-center text-center p-6 border-2 duration-300 hover:border-slate-800 rounded-lg shadow-lg">
                    <FaBrain className="text-5xl mb-4 text-purple-500" />
                    <h3 className="text-xl font-semibold mb-2">DEEP LEARNING</h3>
                </div>

                {/* Large Language Models */}
                <div className="flex flex-col items-center text-center p-6 border-2 duration-300 hover:border-slate-800 rounded-lg shadow-lg">
                    <FaComments className="text-5xl mb-4 text-teal-500" />
                    <h3 className="text-xl font-semibold mb-2">LARGE LANGUAGE MODELS</h3>
                </div>

            </div>
        </section>
        </motion.div>
    );
}
