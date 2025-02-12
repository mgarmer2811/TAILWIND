"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-800 p-4 text-white">
            <div className="flex justify-between items-center">
                <div className="text-lg font-bold">LOGO</div>
                <div className="hidden md:flex flex-1 justify-center space-x-4">
                    <a href="#" className="hover:text-blue-400">
                        Inicio
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        Servicios
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        Contacto
                    </a>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="flex flex-col mt-4 space-y-2 md:hidden">
                    <a href="#" className="hover:text-blue-400">
                        Inicio
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        Servicios
                    </a>
                    <a href="#" className="hover:text-blue-400">
                        Contacto
                    </a>
                </div>
            )}
        </nav>
    );
}
