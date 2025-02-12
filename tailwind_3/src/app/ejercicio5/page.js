import React from "react";

export default function Dashboard() {
    return (
        <div className="h-screen flex">
            <div className="w-60 bg-gray-300 p-4">
                <ul className="space-y-3">
                    <li>
                        <a
                            href="#"
                            className="block p-2 bg-gray-400 text-black"
                        >
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block p-2 bg-gray-400 text-black"
                        >
                            Usuarios
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block p-2 bg-gray-400 text-black"
                        >
                            Reportes
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block p-2 bg-gray-400 text-black"
                        >
                            Configuración
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-5 bg-gray-100">
                <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white p-3 border border-gray-400">
                        Tarjeta 1
                    </div>
                    <div className="bg-white p-3 border border-gray-400">
                        Tarjeta 2
                    </div>
                    <div className="bg-white p-3 border border-gray-400">
                        Tarjeta 3
                    </div>
                </div>

                {/* Tabla */}
                <div className="mt-5 bg-white p-3 border border-gray-400">
                    <table className="w-full border border-gray-500">
                        <thead>
                            <tr className="bg-gray-400">
                                <th className="border border-gray-500 p-2">
                                    ID
                                </th>
                                <th className="border border-gray-500 p-2">
                                    Nombre
                                </th>
                                <th className="border border-gray-500 p-2">
                                    Estado
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map((id) => (
                                <tr key={id} className="hover:bg-gray-200">
                                    <td className="border border-gray-500 p-2">
                                        {id}
                                    </td>
                                    <td className="border border-gray-500 p-2">
                                        Usuario {id}
                                    </td>
                                    <td className="border border-gray-500 p-2">
                                        Activo
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
