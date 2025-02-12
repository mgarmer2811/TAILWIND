export default function Card() {
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-sm mx-auto">
            <h2 className="text-xl font-bold mb-2">Título de la Tarjeta</h2>
            <p className="text-gray-600 mb-4">
                Esta es una descripción corta de la tarjeta.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Acción
            </button>
        </div>
    );
}
