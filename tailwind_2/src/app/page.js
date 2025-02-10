export default function GridExercise() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="grid grid-cols-3 gap-4 bg-white p-6 rounded-xl shadow-lg">
                <div className="col-span-2 bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    1
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    2
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    3
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    4
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    5
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    6
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    7
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    8
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    9
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    10
                </div>
                <div className="bg-blue-300 flex items-center justify-center p-4 rounded-lg">
                    11
                </div>
                <div className="bg-blue-300 row-span-2 flex items-center justify-center p-4 rounded-lg">
                    12
                </div>
            </div>

            <button className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg">
                Reiniciar diseño
            </button>
        </div>
    );
}
