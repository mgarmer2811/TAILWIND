export default function Bordes() {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4"></h3>
                    <p className="mb-4">Redondea las esquinas de un elemento</p>
                    <div className="m-4">
                        <p className="rounded-lg border-2 border-black">
                            Este texto esta redondeao
                        </p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4">
                <div className="bg-gray-300">
                    <h3 className="text-xl font-semibold mb-4">border-2</h3>
                    <p className="mb-4">
                        Aplica un borde alrededor del componente
                    </p>
                    <p className="border-2 border-black">Elemento con borde</p>
                </div>
            </div>
        </div>
    );
}
