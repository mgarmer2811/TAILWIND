export default function Grid() {
    const elements = [];

    for (let i = 1; i <= 9; i++) {
        elements.push(
            <div key={i} className="bg-gray-200 p-4 rounded-lg text-center">
                {i}
            </div>
        );
    }

    return <div className="grid grid-cols-3 gap-4 p-8">{elements}</div>;
}
