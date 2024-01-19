# README PORTFOLIO

Welcome to the repository for my personal portfolio website! This repository contains the source code and assets for my online portfolio, showcasing my skills, projects, and experiences. Feel free to explore the code.

## Table of Contents

-   [Introduction](#introduction)
-   [Features](#features)
-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)

## Introduction

This repository houses the codebase for my personal portfolio website. The website is designed to provide a comprehensive overview of my skills, projects, and experiences. It serves as an interactive and visually appealing representation of my work.

## Features

-   **Responsive Design**: The website is designed to be responsive and accessible across various devices and screen sizes.
-   **Project Showcase**: A dedicated section to showcase my projects with descriptions and links.
-   **Skills and Technologies**: Highlighting the skills and technologies I am proficient in.
-   **Contact Information**: Easily accessible contact information for potential collaboration and networking.
-   **Interactive Elements**: Engaging and interactive elements to enhance user experience.

## Installation

1. Clone the repository: `https://github.com/Juancho-Coding/Portfolio.git`
2. Navigate to the project directory.
3. Install all the dependencies running `npm install`. Remember, you need to have nodejs installed.
4. Run the server `npm run vite`.

## Usage

Feel free to use this repository as a template for your own portfolio website. Update the content, add your projects, and customize the styling to reflect your personal brand.

**Some Notes**

1. As this project will be doployed to Github Pages, some changes must be made:
    - React Router is used but the main component is HashRouter ( instead of the common BrowserRouter).
    - In package.json the homepage element was added for compatibility.
2. Added a little script to copy the assets folder from src to dist. Some assets are loaded dinamically so this is necessary.
3. Change the code in emailApi.ts to match your server side email api.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as needed for your own portfolio.

Thank you for visiting my portfolio repository! If you have any questions or feedback, feel free to reach out.

\[Juan Pablo\]
