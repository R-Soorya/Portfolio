import React from 'react';
import { IoIosMail, IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";


export default function Connect() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "433c724a-c030-4994-bbb5-e0e932f71236");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <motion.div 
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:100}}
        transition={{duration:1}}
        viewport={{ once: true }}

        className="max-w-full mx-auto px-4 sm:px-8 lg:px-40 py-24 bg-primary" id='contact'>
            <div className="text-center mb-12">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">GET IN TOUCH</h1>
                <div className="w-16 h-1 bg-cyan-800 mx-auto mt-2"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-10">
                {/* Contact Info Section */}
                <div className="flex flex-col gap-8 sm:w-1/3">
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <FaLocationDot size={24} className='text-sky-900'/>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">Location:</h2>
                            <p className="text-gray-600">Coimbatore, Tamil Nadu, India</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <IoIosMail size={24}  className='text-sky-900'/>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">Email:</h2>
                            <p className="text-gray-600">r.soorya03@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <IoIosCall size={24} className='text-sky-900' />
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800">Call:</h2>
                            <p className="text-gray-600">+91 63857 61316</p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <form onSubmit={onSubmit} className="flex flex-col gap-4 sm:w-2/3">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-900"
                            required
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Your Email" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-900"
                            required
                        />
                    </div>
                    <input 
                        type="text" 
                        name="subject"
                        placeholder="Subject" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-900"
                        required
                    />
                    <textarea 
                        name="message"
                        placeholder="Message" 
                        rows="6" 
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-900"
                        required
                    ></textarea>
                    <button 
                        type="submit" 
                        className="w-full lg:w-auto px-6 py-3 text-white font-semibold rounded-md bg-sky-900 duration-300 hover:bg-cyan-700"
                    >
                        Submit Message
                    </button>
                    
                    {/* Confirmation Message */}
                    {result && (
                        <p className="mt-4 text-center text-gray-700 font-semibold">
                            {result}
                        </p>
                    )}
                </form>
            </div>
        </motion.div>
    );
}
