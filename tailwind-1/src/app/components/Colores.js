export default function Colores() {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">Colores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">bg-blue-500</h3>
                    <p className="mb-4">Fondo de color azul</p>
                    <div className="bg-blue-500">.</div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">text-center</h3>
                    <p className="mb-4">Alinea el texto al centro</p>
                    <p className="text-center">Este texto esta centrado</p>
                    <p>Este texto NO esta centrado</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">bg-red-500</h3>
                    <p className="mb-4">Fondo de color rojo</p>
                    <div className="bg-red-500">.</div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">text-white</h3>
                    <p className="mb-4">Texto de color blanco</p>
                    <p className="text-white">Esto es de color blanco</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">
                        text-green-500
                    </h3>
                    <p className="mb-4">Texto de color verde</p>
                    <p className="text-green-500">Esto es de color verde</p>
                </div>
            </div>
        </div>
    );
}
