"use client";

import Colores from "../components/Colores";
import Alineacion from "../components/Alineacion";
import Tipografia from "../components/Tipografia";
import Bordes from "../components/Bordes";
import Sombra from "../components/Sombra";

const clasesTailwind = {
    categorias: [
        {
            nombre: "Colores",
            clases: [
                {
                    nombre: "bg-blue-500",
                    descripcion: "Fondo de color azul",
                    ejemplo: "Fondo azul",
                },
                {
                    nombre: "text-center",
                    descripcion: "Alinea el texto al centro",
                    ejemplo: "Texto centrado",
                },
                {
                    nombre: "bg-red-500",
                    descripcion: "Fondo de color rojo",
                    ejemplo: "Fondo rojo",
                },
                {
                    nombre: "text-white",
                    descripcion: "Texto de color blanco",
                    ejemplo: "Texto blanco",
                },
                {
                    nombre: "text-green-500",
                    descripcion: "Texto de color verde",
                    ejemplo: "Texto verde",
                },
            ],
        },
        {
            nombre: "Alineación",
            clases: [
                {
                    nombre: "flex",
                    descripcion: "Define un contenedor flexible",
                    ejemplo: "Contenedor flexible",
                },
                {
                    nombre: "justify-center",
                    descripcion: "Justifica los elementos al centro",
                    ejemplo: "Elementos centrados",
                },
                {
                    nombre: "items-center",
                    descripcion:
                        "Alinea los elementos de un contenedor flex al centro",
                    ejemplo: "Elementos alineados al centro",
                },
                {
                    nombre: "m-auto",
                    descripcion: "Aplica margen automático para centrar",
                    ejemplo: "Elemento centrado",
                },
                {
                    nombre: "flex-col",
                    descripcion: "Coloca los elementos hijos en columna",
                    ejemplo: "Elementos en columna",
                },
            ],
        },
        {
            nombre: "Espaciado",
            clases: [
                {
                    nombre: "m-4",
                    descripcion: "Aplica un margen de 1rem (16px)",
                    ejemplo: "Elemento con margen",
                },
                {
                    nombre: "p-4",
                    descripcion: "Aplica un padding de 1rem (16px)",
                    ejemplo: "Elemento con padding",
                },
                {
                    nombre: "p-8",
                    descripcion: "Padding de 2rem (32px)",
                    ejemplo: "Elemento con padding grande",
                },
                {
                    nombre: "space-x-4",
                    descripcion: "Espaciado horizontal entre elementos",
                    ejemplo: "Espaciado entre elementos",
                },
                {
                    nombre: "space-y-4",
                    descripcion: "Espaciado vertical entre elementos",
                    ejemplo: "Espaciado entre elementos",
                },
            ],
        },
        {
            nombre: "Tipografía",
            clases: [
                {
                    nombre: "text-xl",
                    descripcion: "Define un tamaño de texto grande",
                    ejemplo: "Texto grande",
                },
                {
                    nombre: "font-bold",
                    descripcion: "Aplica un peso de fuente negrita",
                    ejemplo: "Texto en negrita",
                },
            ],
        },
        {
            nombre: "Bordes",
            clases: [
                {
                    nombre: "rounded-lg",
                    descripcion: "Redondea las esquinas de un elemento",
                    ejemplo: "Esquinas redondeadas",
                },
                {
                    nombre: "border-2",
                    descripcion: "Añade un borde de 2px",
                    ejemplo: "Elemento con borde",
                },
            ],
        },
        {
            nombre: "Sombra",
            clases: [
                {
                    nombre: "shadow-lg bg-blue-500",
                    descripcion: "Aplica una sombra grande",
                    ejemplo: "Elemento con sombra",
                },
            ],
        },
    ],
};

export default function Glossary() {
    return (
        <div>
            <Colores></Colores>
            <Alineacion></Alineacion>
            <Tipografia></Tipografia>
            <Bordes></Bordes>
            <Sombra></Sombra>
        </div>
    );
}
