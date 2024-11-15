import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io";


export default function Footer() {

    return <div className="py-4 text-center bg-gray-800 ">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-white mt-2">
            <p className="text-sm ">
                &copy; {new Date().getFullYear()} Soorya Rajkumar. All Rights Reserved.
            </p>
            <div className="mt-4 flex justify-center">
            <a href="https://www.linkedin.com/in/soorya-rajkumar/" className='pr-3' aria-label="LinkedIn">
                <IoLogoLinkedin size={28}/>
                </a>
                <a href="https://github.com/R-Soorya" aria-label="GitHub">
                <IoLogoGithub size={28}/>
                </a>
                </div>
         </div>

        </div>
}