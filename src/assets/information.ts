export type ProjectInformation = {
    title: string;
    description: string;
    image: string;
    id: string;
    github: string;
    demo: string;
};

export const projects: ProjectInformation[] = [
    {
        title: "Calibration bench for domestic water metters",
        /* description: `Software que Desarrolle un programa que no solo permite la calibración
         de medidores de agua, sino que también guía al operario de manera integral durante todo el proceso
        . La clave de nuestro proyecto reside en el desarrollo cuidadoso de esta herramienta, que automatiza
        la creación de documentos PDF detallados y la gestión eficiente del almacenamiento de resultados en 
        una sólida base de datos`, */
        description: `
This is a Standalone software for executing calibration tests on residential water meters. It has two sections,
the first allows administrative tasks and data entry, while the second interacts with hardware elements to perform 
the necessary tests on the meters. Once the tests are completed, results are registered in a PDF document format.

Additionally, it communicates with a database to store metrics and results of each test.
        
> **Stack (Prior transition)** LabVIEW, PostgresQL, SQLite, .NET

> **Stack (During transition)** Frontend: React, Electron.
> Backend: NodeJS, Typescript, PostgreSQL, TypeORM, Python

#### *This project is currently being rewritten from LabVIEW to Web frameworks (Typescript, NodeJS, React)*

`,
        image: "src/assets/project1_thumb.jpg",
        id: "1",
        github: "",
        demo: "",
    },
    {
        title: "ChatGPT Clone",

        description: `Presentamos un emocionante proyecto que se asemeja a la funcionalidad de ChatGPT, 
            un asistente virtual de última generación. Este innovador desarrollo se centra en 
            la creación de un sistema inteligente capaz de comprender y generar respuestas coherentes 
            en lenguaje natural. Utilizando técnicas avanzadas de procesamiento del lenguaje natural, 
            nuestro proyecto busca ofrecer una experiencia conversacional única. Este asistente virtual 
            no solo interpreta preguntas y solicitudes, sino que también aprende y adapta sus respuestas 
            con el tiempo, proporcionando un nivel de interacción y utilidad que redefine la comunicación 
            con la inteligencia artificial`,
        image: "src/assets/react.svg",
        id: "2",
        github: "",
        demo: "",
    },
    {
        title: "Project 3",
        description: "Este es el proyecto numero 3",
        image: "src/assets/react.svg",
        id: "3",
        github: "",
        demo: "",
    },
    {
        title: "Project 4",
        description: "Este es el proyecto numero 4",
        image: "src/assets/react.svg",
        id: "4",
        github: "",
        demo: "",
    },
];
