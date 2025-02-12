"use client";

import { useRouter } from "next/navigation";

export default function Home() {
    const router = useRouter();

    return (
        <div>
            <h1>Ejercicio 1</h1>
            <button onClick={() => router.push("/ejercicio1")}>
                Ir a ejercicio 1
            </button>
            <br />
            <br />
            <h1>Ejercicio 2</h1>
            <button onClick={() => router.push("/ejercicio2")}>
                Ir al ejercicio 2
            </button>
            <br />
            <br />
            <h1>Ejercicio 3</h1>
            <button onClick={() => router.push("/ejercicio3")}>
                Ir al ejercicio 3
            </button>
            <br />
            <br />
            <h1>Ejercicio 4</h1>
            <button onClick={() => router.push("/ejercicio4")}>
                Ir al ejercicio 4
            </button>
            <br />
            <br />
            <h1>Ejercicio 5</h1>
            <button onClick={() => router.push("/ejercicio5")}>
                Ir al ejercicio 5
            </button>
        </div>
    );
}
