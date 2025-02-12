export default function Alineacion() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">flex</h3>
                    <p className="mb-4">Define un contenedor flexible</p>
                    <div className="flex">
                        <div className="bg-blue-500 text-white p-4">
                            Elemento 1
                        </div>
                        <div className="bg-red-500 text-white p-4">
                            Elemento 2
                        </div>
                        <div className="bg-green-500 text-white p-4">
                            Elemento 3
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">
                        justify-center
                    </h3>
                    <p className="mb-4">Justifica los elementos al centro</p>
                    <div className="flex justify-center gap-4">
                        <div className="bg-blue-500 text-white p-4">
                            Elemento 1
                        </div>
                        <div className="bg-red-500 text-white p-4">
                            Elemento 2
                        </div>
                        <div className="bg-green-500 text-white p-4">
                            Elemento 3
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">items-center</h3>
                    <p className="mb-4">
                        Alinea los elementos de un contenedor flex al centro
                    </p>
                    <div className="flex items-center gap-4 h-32 bg-gray-100">
                        <div className="bg-blue-500 text-white p-4">
                            Elemento 1
                        </div>
                        <div className="bg-red-500 text-white p-4">
                            Elemento 2
                        </div>
                        <div className="bg-green-500 text-white p-4">
                            Elemento 3
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">m-auto</h3>
                    <p className="mb-4">
                        Aplica un margen automatico a todos los lados del
                        componente
                    </p>
                    <div className="bg-blue-500 text-white p-4 m-auto w-64">
                        Elemento centrado con margen automático
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">flex-col</h3>
                    <p className="mb-4">
                        Coloca los elementos hijos en columna
                    </p>
                    <div className="flex flex-col items-center space-y-4 bg-gray-100 p-4">
                        <div className="bg-blue-500 text-white p-4 w-32">
                            Elemento 1
                        </div>
                        <div className="bg-red-500 text-white p-4 w-32">
                            Elemento 2
                        </div>
                        <div className="bg-green-500 text-white p-4 w-32">
                            Elemento 3
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
