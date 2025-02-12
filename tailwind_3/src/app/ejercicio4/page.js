export default function BlogPage() {
    return (
        <div className="container mx-auto p-4">
            <header className="text-center mb-8">
                <h1 className="text-3xl font-bold">Título</h1>
                <p className="text-gray-600">Texto debajo de título</p>
            </header>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    {[1, 2, 3].map((article) => (
                        <div
                            key={article}
                            className="bg-gray-100 p-6 rounded-lg shadow-md mb-4"
                        >
                            <h2 className="text-2xl font-bold mb-2">
                                Artículo {article}
                            </h2>
                            <p className="text-gray-700">
                                Este es un resumen del artículo {article}. Lee
                                más para descubrir detalles interesantes.
                            </p>
                        </div>
                    ))}
                </div>
                <aside className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-4">
                        Enlaces Relacionados
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                Enlace 1
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                Enlace 2
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                Enlace 3
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="text-blue-500 hover:underline"
                            >
                                Enlace 4
                            </a>
                        </li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}
