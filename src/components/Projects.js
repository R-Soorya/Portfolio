import car from '../assets/car.jpg';
import crop from '../assets/crop.jpg';
import learnify from '../assets/learnify.jpg';
import ipl from '../assets/ipl.jpg';
import diabetes from '../assets/diabetes.jpg';
import outfit from '../assets/outfit.jpg';

import { motion } from "framer-motion";

export default function Projects() {
    return (
        <motion.div
            initial={{y: 100, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 1}}
            viewport={{ once: true }}
        >
            <section className="px-5 py-20" id='projects'>
                <div>
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800">PROJECTS</h1>
                        <div className="w-16 h-1 bg-cyan-800 mx-auto mt-2"></div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 justify-center items-center">
                    <div className="flex flex-col md:flex-row justify-center gap-28">
                        <div className="relative w-full md:w-1/3">
                            <img src={learnify} alt="learnify" className="w-full shadow-lg shadow-blue-900" />
                            <div className='link'>
                                <a
                                    href="https://github.com/R-Soorya/Learnify"
                                    className="mr-10  bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href="https://drive.google.com/drive/folders/13xDYPIx0tCUZ4lH1CqI_tbMZ6Hh1V-XE?usp=drive_link"
                                    className="bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    Demo video
                                </a>
                            </div>
                            
                        </div>
                        <div className="relative w-full md:w-1/3">
                            <img src={outfit} alt="outfit" className="w-full shadow-lg shadow-neutral-900" />
                            <div className="link">
                                <a
                                    href="https://github.com/R-Soorya/AI-Fashion-Assistant-Django"
                                    className="mr-10 bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href="https://drive.google.com/drive/folders/1rXXAhOL87Z7z7G9x52YybOkOIZ0fsSsD?usp=drive_link"
                                    className="bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    Demo video
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-28">
                        <div className="relative w-full md:w-1/3">
                            <img src={car} alt="car" className="w-full shadow-lg shadow-slate-400" />
                            <div className="link">
                                <a
                                    href="https://github.com/R-Soorya/Car-Price-Prediction"
                                    className="mr-10 bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href="https://drive.google.com/drive/folders/1XNNDZC0Q08R51GvARjaeL-SJnnMyRj-m?usp=drive_link"
                                    className="bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    Demo video
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full md:w-1/3">
                            <img src={crop} alt="crop" className="w-full shadow-lg shadow-lime-900" />
                            <div className="link">
                                <a
                                    href="https://github.com/R-Soorya/Crop-Recommendation"
                                    className="mr-10 bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href="https://drive.google.com/drive/folders/1m-fi3gPTNuUKKPtdvTQfcA9FYsW08b7O?usp=drive_link"
                                    className="bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    Demo video
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-28">
                        <div className="relative w-full md:w-1/3">
                            <img src={ipl} alt="ipl" className="w-full shadow-lg shadow-gray-400" />
                            <div className="link">
                                <a
                                    href="https://github.com/R-Soorya/IPL-Prediction"
                                    className="mr-10 bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href="https://drive.google.com/drive/folders/1QlIEP1CtMOiQXspJtU-92ygE-r4SqItG?usp=drive_link"
                                    className="bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    Demo video
                                </a>
                            </div>
                        </div>
                        <div className="relative w-full md:w-1/3">
                            <img src={diabetes} alt="diabetes" className="w-full shadow-lg shadow-cyan-900" />
                            <div className="link">
                                <a
                                    href="https://github.com/R-Soorya/Diabetes-Prediction"
                                    className="mr-10 bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href="https://drive.google.com/drive/folders/1xUv0eo1nKS21-XfRFwRc3UN58Bog4LBb?usp=drive_link"
                                    className="bg-white hover:bg-teal-200 text-cyan-950 font-bold py-2 px-4 rounded-full"
                                >
                                    Demo video
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </motion.div>
    );
}
