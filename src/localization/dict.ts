export const en_nav_dict = {
  My_Portfolio: 'My Portfolio',
  Home: 'Home',
  About: 'About',
  Skills: 'Skills',
  Projects: 'Projects',
  lets_talk: "Let's talk",
  pdf_popover: 'Download CV',
  message_404:
    'The page you are looking for might have been removed had its name changed or is temporarily unavailable',
  message_404_button: 'Go to Home',
}

export const en_presentation_dict = {
  greeting: "Hi, I'm ",
  tagline: `Backend developer with frontend skills — I create systems that perform and scale.
Whether it’s APIs, databases, or user interfaces, I write code that solves real problems.`,
}

export const en_about_dict = {
  about: 'About me',
  about_text1: `I’m a passionate **software developer** with a strong focus on backend systems, infrastructure, and solid knowledge and experience in frontend development using **React**.
I craft reliable, scalable, and maintainable solutions with technologies like **Node.js, Docker, JavaScript, and TypeScript**, always aiming to solve real-world problems efficiently.\n`,
  about_text2: `On the frontend, I deliver intuitive and responsive user interfaces, while on the backend, I ensure robust system architecture and smooth data flows.
I stay current with evolving technologies, continuously improving my skills in areas like **Python** and containerization to keep delivering at high standards.
If you’re looking for someone who’s driven, adaptable, and ready to contribute across the stack — from the UI to the database — you’re in the right place`,
}

export const en_skills_dict = {
  skill: 'Skills',
  database: 'Databases',
  other: 'Others',
}

export const en_projects_dict = {
  project: 'Projects',
  description: `Here you will find some projects I've done \nduring my career, some about software development,\nothers about electronics, go ahead and click one`,
  button_live: 'Live Demo',
  button_github: 'GitHub',
  button_details: 'Details',
  project_calbench_title: 'Calibration Bench for Domestic Water Meters',
  project_calbench_description: `This standalone software has been developed to execute calibration procedures on both residential and commercial water meters.
  Its main objective is to assist the technician through a guided, step-by-step process at each stage, ensuring compliance with current regulations.
  During calibration, the system allows the configuration of parameters such as flow rate, pressure, and temperature, and it directly controls the hardware
  components involved — including hydraulic pumps, valves, and actuators — to automate the water flow and positioning required for each test. 
  
  In parallel, the software automatically records electrical signals from sensors and measurement devices, processes the collected data, and generates technical calibration
  reports in PDF format. These documents, along with the test results, are stored in a PostgreSQL database, ensuring data integrity, traceability, and availability
  for future reference
  
  > **Stack**: LabVIEW, PostgresQL, SQLite, .NET  
  > **Communication Protocols**: OPC, Modbus, MQTT

  *Since this project was developed under a confidentiality agreement with the client, the source code is not publicly available.  If you’d like to learn more, feel free to reach out to me*
  `,
  project_cinema_title: 'Cinema Reservation System',
  project_cinema_description: `
Cinema Reservation System is a full-stack web application designed to simplify and enhance the movie ticket
booking experience. Users can browse movies by date, view available showtimes, and reserve seats with real-time
updates powered by WebSockets. The system includes a simulated checkout process with credit card validation, and
provides tickets via PDF download or email delivery. Built with a focus on seamless UX and reliable performance,
the app ensures that seat availability is always accurate and up to date.

> **Frontend**: React, React Router, TypeScript, MUI, Socket.IO, Mobile Responsive  
> **Backend**: Node.js, Express, TypeScript, Socket.IO, Nodemailer  
> **Database**: PostgreSQL  
> **Other Tools**: Docker, JWT for authentication, PDF generation

Building this system sharpened my ability to manage real-time data, coordinate frontend-backend communication, and design secure, user-friendly full-stack solutions  

*This project is running on Vercel and the backend is running in a private Docker server*`,
  project_dashboard_title:
    'Management and Dashboard Application for Calibration Laboratory',
  project_dashboard_description: `
This application was developed for a calibration lab specializing in household water meters. It streamlines operations through features like work order creation,
device intake, client and user management, and detailed entry of metrological data. An integrated analytics dashboard shows real-time insights into pending tasks,
operator performance, and key device metrics. The system also enables generating detailed Excel reports and printing labels with Zebra printers,
improving traceability. Designed for both admins and technicians, it offers an intuitive and efficient way to manage daily lab workflows.

> **Frontend**: Electron, React, React Router, TypeScript, MUI  
> **Backend**: Node.js, Express, TypeScript  
> **Database**: PostgreSQL  
> **Other Tools**: ExcelJS, JWT, BCrypt, Worker Threads, Child Processes, Electron Builder

*Since this project was developed under a confidentiality agreement with the client, the source code is not publicly available.  If you’d like to learn more, feel free to reach out to me*
`,
  project_chatclone_title: 'ChatGPT clone Page',
  project_chatclone_description: `
This is a web-based chat application that mimics the functionality of ChatGPT. Users can send messages and receive AI-generated responses in real-time. 
The application leverages the ChatGPT API to provide conversational capabilities, making it an interactive and engaging tool for users.

The project focuses on delivering a seamless user experience with a clean and intuitive interface. It also ensures efficient communication with the API for fast and accurate responses.

> **Frontend**: React, TypeScript, TailwindCSS  
> **Backend**: Node.js, Express, TypeScript  
> **API**: OpenAI ChatGPT API  
> **Other Tools**: Docker, JWT for authentication

#### *This project showcases my ability to integrate third-party APIs and build responsive, user-friendly web applications.*`,
}

export const en_dashboard_dict = {
  title: 'Management and Dashboard Application for Calibration Laboratory',
  title_summary: 'Overview',
  summary: `This desktop application was developed for a laboratory specializing in the calibration of residential and
  commercial water meters. Its main goal is to integrate the lab’s administrative tasks with the technical calibration
  procedures, fully digitizing the calibration service from start to finish. It ensures that all information related to
  users and clients is stored and properly linked to the calibration results_Users are divided into administrators and 
  technicians/operators. Each role has access to specific features: administrators have full control over all application
  options, while technicians can only receive meters and generate inspection documents. Once a work order is created and
  the meters are entered for calibration, they are registered in the system so that the technician can begin the lab procedures
`,
  objetives_challenges_title: `Objetives and Challenges`,
  objectives_title: 'Objectives',
  objectives_content: `💡 Provide laboratory administrators with an efficient tool to track the work performed and the calibrated
  water meters_💡 Generate daily, weekly, and monthly reports to establish performance metrics, improve processes, and maintain a
  historical record of laboratory conditions_💡 Replace manual systems and spreadsheets with a centralized and reliable digital
  solution_ 💡Enable future integration with other systems or tools through a modular and scalable architecture`,
  challenges_title: 'Challenges',
  challenges_content: `🛠️ Integrate hardware like Zebra and TSC label printers with Electron to generate the labels required to
  maintain traceability during the process_🛠️ Generate Excel documents containing the required information from the meters received_
  🛠️ Integration between Electron and native system features, such as file access, image upload and printing`,
  solutions_title: `Core Features Implemented`,
  solutions_title_1: `Management of metrological parameters`,
  solutions_description_1: `Every calibration starts with precision — this feature ensures no test begins without the right metrological parameters`,
  solutions_content_1: `A dedicated section was implemented to input the metrological parameters of the received water meters,
  aiming to properly configure the calibration tests. This section acts as an index that consolidates all brands and models of meters
  registered to date, allowing for quick selection when generating new work orders`,
  solutions_title_2: `Work Order Management and Meter Intake`,
  solutions_description_2: `From intake to labeling: each meter begins its calibration journey with full traceability and automated documentation`,
  solutions_content_2: `In this section, work orders are managed by specifying the client, the type and quantity of meters, and the
  calibration tests to be performed. Once the order is created, the incoming meters are registered in the system, including relevant
  information such as observations from the initial inspection. Based on this data, the system automatically generates intake documentation,
  inspection results, and internal labels required to track each device throughout the calibration process`,
  solutions_title_3: `Customer Management`,
  solutions_description_3: `Centralize Customer Information for Accurate Certificates and Reports`,
  solutions_content_3: `Section containing the customer's information, which will be included in the calibration certificates and the laboratory operation reports`,
  solutions_title_4: `Laboratory Status Analysis and Tracking Dashboard`,
  solutions_description_4: `Visualize and Track Your Laboratory's Performance at a Glance`,
  solutions_content_4: `The main Dashboard window provides a summary of the laboratory's current status, including the number of pending work orders,
  meters awaiting calibration, and the percentage of completed orders. Additionally, it features a query section that allows filtering calibrated meters by
  parameters such as date, serial number, or work order. A date-range-filtered table is also included, showing the number of meters calibrated by each technician,
  along with a pie chart that visually details this information`,
  solutions_title_5: `Report Generation`,
  solutions_description_5: `Generate Detailed Excel Reports for Complete Calibration Traceability`,
  solutions_content_5: `In this section, Excel reports are generated for meters calibrated within a user-defined time range. Each report includes the working conditions
  during testing, the calibration results, customer information, and statistics related to test execution time and recorded readings`,
  structure_title: `Stack Used`,
  backend: `Backend`,
  frontend: `Frontend`,
  database: `Database`,
  frontend_structure: `Frontend developed as a Single Page Application (SPA) using **React and Typescript**, embedded in the main **Electron** BrowserWindow.
- Includes a Login page to authenticate users before granting access to the application
- Features and sections are enabled based on **user roles**, enforcing proper access control
- The UI layout is structured in three main areas:
  - Navigation panel (left): Fixed side menu for accessing the different sections of the app
  - Main content area (center): Dynamically renders each section’s UI using **MUI components** like tables, charts, and panels
  - Auxiliary panel (right): Shows user info and a section for admin-managed reminders
- Implemented **forms with field validation** to ensure data integrity and usability
- Used **Electron IPC** (Inter-Process Communication) to access desktop features like the file system and external resources
- Integrated toast **notifications as real-time feedback** for user actions (e.g. saving, submitting, errors)
- Added **visual UI feedback** such as hover effects, active states, and click animations to improve user experience`,
  backend_structure: `Developed with **Node.js, Express, and TypeScript**
  - The project follows a **modular structure** organized into folders such as controllers, routes, validators, and utilities, allowing for clear separation of concerns
  - Exposes a **RESTful API** that communicates with the frontend through HTTP requests. It uses **express-validator** for request validation, and implements **JWT-based authentication** and role-based access control
  - Uses **PostgreSQL** as the database engine, accessed via the pg library. Operations are performed using raw SQL, with critical actions wrapped in **transactions** to ensure data integrity
  - Through **Electron Preload Scripts and IPC**, the backend can access system resources such as the file system. This enables folder and file selection, and label printing through local printers using **child processes**
  - Utilizes the **exceljs** library to manipulate Excel templates and insert images. Templates are filled using **Worker Threads** to prevent blocking the main thread during heavy processing
  - The entire application is packaged as a **standalone desktop solution using Electron Builder**, enabling distribution without external dependencies`,
  database_structure: `**PostgreSQL** was used as the relational database system due to its reliability and strong performance. A normalized schema was designed with multiple tables linked through
  **primary and foreign keys**, ensuring data integrity and a clear logical structure. **Transactions** are used for critical operations to maintain consistency, and indexes are applied on key
   fields to improve query performance. This structure supports complex queries, report generation, and full traceability of the calibration process`,
  label_image1: `Job order form`,
  label_image2: `Dashboard, Pending orders`,
  label_image3: `Generate report`,
  label_image4: `Meter's metrological info form`,
  label_image5: `Analitics' dashboard menu`,
  label_image6: `Folder and printer form`,
  label_image7: `Technician workload`,
  back_top: 'Back to Top',
}

export const en_calibration_dict = {
  title: 'Calibration Bench for Domestic and Comercial Water Meters',
  title_summary: 'Overview',
  summary: `This standalone software has been developed to execute calibration procedures for residential and commercial water
  meters, completely transforming the traditional process by automating each stage. Its primary goal is to guide the technician
  clearly and precisely, minimizing manual intervention, reducing errors, and optimizing the time required for each test, all
  while ensuring compliance with current regulations._
  During the process, the system allows configuration of key parameters such as flow rate, pressure, and temperature, and directly
  controls hardware components like hydraulic pumps, valves, and actuators to automate water flow and position the equipment as 
  needed. Upon completion, the software automatically records electrical signals captured by sensors and measurement devices,
  generates detailed calibration certificates in PDF format—meeting industry standards—and securely stores the results in a PostgreSQL
  database. This facilitates traceability, enables retrieval of historical data, and produces comprehensive reports for internal
  analysis, enhancing transparency and data-driven decision-making`,
  objetives_challenges_title: `Objetives and Challenges`,
  objectives_title: 'Objectives',
  objectives_content: `💡 Streamline and automate the calibration process of residential and commercial water meters, reducing 
  human error and increasing operational efficiency_💡 Automate the recording of electrical signals and trend analysis, ensuring
  compliance with current regulations and speeding up the generation of calibration certificates_💡 Automatically generate calibration
  certificates based on customizable templates, allowing clients to adapt them to their specific needs_💡 Systematize the entire
  workflow of the calibration laboratory, reducing the time required per test and increasing production capacity_💡 Minimize errors
  caused by manual data entry, improving the accuracy and reliability of results_💡 Simplify the technical tasks of metrology personnel,
  making their work easier through intuitive and guided tools_💡 Modernize and enhance the instrumentation station of the calibration
  lab by incorporating technologies that optimize performance and control`,
  challenges_title: 'Challenges',
  challenges_content: `🛠️ Integrar el software con hardware industrial como bombas, válvulas y sensores, utilizando protocolos de
  comunicación como Modbus y OPC_🛠️ Diseñar una lógica de ejecución modular que permita reutilizar procedimientos comunes entre
  diferentes tipos de ensayos sin duplicar código_🛠️ Incorporar componentes externos a LabVIEW para generar documentos en Excel,
  crear archivos PDF y controlar la impresión de etiquetas_🛠️ Establecer comunicación entre LabVIEW y un dispositivo portátil como
  una tablet para permitir el registro remoto de las condiciones de los medidores`,
  back_top: 'Back to Top',
  solutions_title: `Core Features Implemented`,
}

export const en_contact_dict = {
  title: 'Contact Information',
  name: `Name`,
  name_hint: "Who I'm talking to",
  mail: `Email`,
  mail_hint: 'How will I contact you',
  message: `Message`,
  message_hint: `Let's talk`,
  send: `SEND`,
}
