export default function Tipografia() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">text-xl</h3>
                    <p className="mb-4">Define un tamaño de texto grande</p>
                    <p className="text-xl">Este texto es grande</p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">font-bold</h3>
                    <p className="mb-4">Aplica negrita al texto</p>
                    <p className="font-bold">Este texto es en negrita</p>
                </div>
            </div>
        </div>
    );
}
