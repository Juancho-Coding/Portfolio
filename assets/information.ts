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
        image: "project1_thumb.jpg",
        id: "1",
        github: "",
        demo: "",
    },
    {
        title: "ChatGPT Clone",

        description: `
Experience the power of a ChatGPT-inspired project! Unlock a world of possibilities by registering on the platform
and diving into the chat. Ask any general questions or request code snippets effortlessly. Your journey begins now –
**sign up** and explore without sharing personal or sensitive information. Elevate your experience with our feature-rich
platform!

> - Register and login with credentials validation using JWT
> - Public and protected routes in NodeJS with ExpressJS
> - Use of mongoDB and mongoose to store user chats
> - Extensive use of REST APIs and openAI API

> **Stack** Frontend: React, MUI.
> Backend: NodeJS, Typescript, MongoDB, Mongoose
`,
        image: "chatclone_thumb.jpg",
        id: "2",
        github: "https://github.com/Juancho-Coding/Chatbot-clone",
        demo: "",
    },
    {
        title: "Cleaning folder CLI",
        description: `
This is a simple command line interface that helps us to delete the
unwanted folder of the projects developed with NodeJS when were are
making backups, AKA **node_modules**

> **Stack** Pure NodeJS
`,
        image: "cli_thumb.jpg",
        id: "3",
        github: "https://github.com/Juancho-Coding/Utility-backup-cli",
        demo: "",
    },
    {
        title: "This Portfolio 😎",
        description: `
If you like this portfolio, feel free to check the code and use as you want.
This page is mainly built with React an MUI, in the github page you will 
find the instructions to clone the repository and
run it in a local environment`,
        image: "portfolio_thumb.jpg",
        id: "4",
        github: "https://github.com/Juancho-Coding/Portfolio",
        demo: "",
    },
];
