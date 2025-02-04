export default function Sombra() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">shadow-2xl</h3>
                    <p className="mb-4">Aplica una sombra grande</p>
                    <p className="shadow-2xl bg-blue-500 text-white p-4 rounded-lg">
                        Esto tiene sombra
                    </p>
                </div>
            </div>
        </div>
    );
}
