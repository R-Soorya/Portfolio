// src/ExperiencePage.jsx
import React from 'react';
import { motion } from "framer-motion";


const ExperiencePage = () => {
  return (
    <motion.div 
    initial={{y:100,opacity:0}}
    whileInView={{y:0,opacity:100}}
    transition={{duration:1}}
    viewport={{ once: true }}

    className="max-w-full mx-auto px-4 sm:px-6 lg:px-40 py-20 bg-primary" id='experience'>
      <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">EXPERIENCE</h1>
                <div className="w-16 h-1 bg-cyan-800 mx-auto mt-2"></div>
            </div>

      <div className="space-y-10">
        {/* Job 1 */}
        <div className="bg-primary shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium text-gray-800">
              <h2 className="text-xl font-bold text-gray-900">Software Developer Intern</h2>
              <p className="text-gray-500">SNS iNNovation Hub (iHub)</p>
            </div>
            <span className="text-sm text-gray-400">August 2024 – October 2024</span>
          </div>
          <ul className="mt-4 text-gray-700 list-disc pl-6">
            <li>Developed backend architecture for real-time Generative AI applications using Django, building RESTful APIs.</li>
            <li>Integrated advanced open-source and proprietary models, improving response accuracy by 30%, and implemented Retrieval Augmented Generation (RAG) for optimal information retrieval.</li>
            <li>Gained hands-on experience working on multiple projects, applying various AI techniques to address real-world problems effectively.</li>
          </ul>
        </div>

        {/* Job 2 */}
        <div className="bg-primary shadow-lg rounded-lg p-6">
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium text-gray-800">
              <h2 className="text-xl font-bold text-gray-900">Machine Learning Intern</h2>
              <p className="text-gray-500">Net Tel Solutions India Pvt Ltd</p>
            </div>
            <span className="text-sm text-gray-400">April 2023 - May 2023</span>
          </div>
          <ul className="mt-4 text-gray-700 list-disc pl-6">
            <li>Gained hands-on experience by working on Machine Learning and Deep Learning Projects.</li>
            <li>Implemented data preprocessing techniques, including data cleaning, normalization, and feature engineering, to prepare datasets for model training.</li>
            <li>Utilized popular Machine Learning library (scikit-learn) and Deep Learning library (TensorFlow) for model development.</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
