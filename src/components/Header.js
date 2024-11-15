import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';
import { AiFillCaretUp } from "react-icons/ai";

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Detect scroll position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true); // Show button when scrolled more than 100px
            } else {
                setIsScrolled(false); // Hide button when back to the top
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to the top
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <header className="flex justify-between items-center py-7 px-14 bg-primary">
            {/* Logo */}
            <a
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900"
                href="#"
            >
                Soorya
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center">
                <ul className="flex gap-8 text-center">
                    <li><a href="/" className="hover:text-cyan-950">Home</a></li>
                    <li><a href="#about" className="hover:text-cyan-950">About</a></li>
                    <li><a href="#experience" className="hover:text-cyan-950">Experience</a></li>
                    <li><a href="#projects" className="hover:text-cyan-950">Projects</a></li>
                    <li><a href="#contact" className="hover:text-cyan-950">Contact</a></li>
                </ul>
            </nav>

            {/* Connect Button */}
            <div className="hidden md:block">
                <a href="#contact">
                    <button className="text-white px-5 py-1 font-bold bg-sky-900 duration-300 hover:bg-cyan-700 rounded-xl">
                        Connect
                    </button>
                </a>
            </div>

            {toggleMenu && (
                <nav className="block md:hidden">
                    <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col mobile-nav justify-center">
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#experience">Experience</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            )}
            <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="block md:hidden"
                aria-label="Toggle menu"
            >
                <Bars3Icon className="h-5" />
            </button>

            {/* Back to Top Button */}
            {isScrolled && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-sky-950 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 duration-300"
                    aria-label="Back to top"
                >
                    <AiFillCaretUp />
                </button>
            )}
        </header>
    );
}
