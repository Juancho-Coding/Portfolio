export const en_nav_dict = {
  My_Portfolio: 'My Portfolio',
  Home: 'Home',
  About: 'About',
  Skills: 'Skills',
  Projects: 'Projects',
  lets_talk: "Let's talk",
  section: 'Sections',
  pdf_popover: 'Download CV',
  message_404:
    'The page you are looking for might have been removed had its name changed or is temporarily unavailable',
  message_404_button: 'Go to Home',
  title_problem: 'The Challenge',
  title_architecture: 'Architecture',
  title_key_decisions: 'Key Decisions',
  title_impact: 'Impact',
  title_stack: 'Stack and Delivery',
  title_roadmap: 'On the Roadmap',
  live_demo: 'Live Demo',
  back_top: 'Back to top',
}

export const en_presentation_dict = {
  greeting: "Hi, I'm ",
  tagline: `I connect the physical and digital worlds — turning sensor data into real-time decisions through
  backend systems built with Node.js, TypeScript, and industrial protocols`,
}

export const en_about_dict = {
  about: 'About me',
  about_text1: `I'm a backend developer with 6+ years building software that bridges hardware and web applications. I work with Node.js, TypeScript, and PostgreSQL to
  expose real-time data through REST APIs and WebSockets — and I talk to the physical world through industrial protocols like MQTT, Modbus, and OPC\n`,
  about_text2: `Most backend developers have never integrated a PLC or a sensor. That combination of modern backend and instrumentation is what makes my profile uncommon 
  — and it's my edge in IoT, industrial software, and real-time systems`,
}

export const en_skills_dict = {
  skill: 'Skills',
  database: 'Databases',
  other: 'Others',
  skill_title_backend: 'Backend & Runtime',
  skill_database: 'Database & Cache',
  skill_realtime: 'Real-Time & IoT',
}

export const en_projects_dict = {
  project: 'Featured Projects',
  description: `Real-world systems I've built — from real-time IoT backends to industrial hardware integration`,
  button_live: 'Live Demo',
  button_github: 'GitHub',
  button_details: 'Read More',
  project_iot: 'Real-Time IoT Monitoring Dashboard',
  project_iot_description: `Multi-tenant IoT platform for real-time sensor monitoring. Decoupled MQTT ingestion, Redis pub/sub bus, React dashboard. Deployed on a Hetzner VPS with automated CI/CD`,
  project_dashboard_title: 'Calibration Lab Management System',
  project_dashboard_description: `Desktop application that manages the full operational workflow of a calibration lab — work orders, barcode-labeled meter intake, automated Excel reporting, and real-time metrics — working alongside 3 calibration and testing benches. 4 years in production, evolved through 5 lab expansions`,
  project_calbench_title: 'Water Meter Calibration & Testing Suite',
  project_calbench_description: `3 systems that control pumps, valves, and sensors in real time to automate water meter calibration — eliminating manual errors and enabling tests the lab couldn't perform before`,
  project_cinema_title: 'Cinema Booking System',
  project_cinema_description: `Full-stack seat reservation app with real-time availability updates via WebSockets, JWT authentication, and automated ticket delivery through PDF generation and email.`,
}

export const en_iot_system_dict = {
  status: 'In Production',
  title: 'Multi-Tenant IoT Telemetry Platform',
  subtitle:
    'Decoupled MQTT ingestion with a Redis-based internal bus, running in production for a public water utility',
  badges: 'Node.js&TypeScript&PostgreSQL&Redis&MQTT&Docker',
  link1: 'Live Demo',
  link2: 'Backend Repo',
  link3: 'Frontend Repo',
  hero_text:
    'A multi-tenant IoT telemetry backend, designed to be reused across projects rather than rebuilt for each client. Its first production deployment was delivered through a Colombian engineering firm and now powers real-time water-quality monitoring for a public utility in Cundinamarca: 11 field devices measuring flow, pressure, temperature, turbidity, and pH, where no remote telemetry existed before.&The public demo runs a separate showcase instance with three simulated tenants — healthcare, agrotech, and pharmaceutical — so you can explore the multi-tenant experience without touching real customer data.',
  challenge_title:
    'Continuous remote monitoring for distributed field infrastructure',
  challenge_content: `The engineering firm I built this for needed to collect data from field sensors deployed at their clients' sites — increasingly a common ask from companies looking to centralize IoT telemetry without dispatching personnel.&Before this system, they relied on a free public IoT platform that could subscribe to MQTT topics and display readings, and little else. No administration layer, no multi-project organization, no control over signal scaling, no room to customize behavior per client.&Their first customer on the new platform, a public water utility in Cundinamarca, had a more fundamental gap: no remote telemetry at all. Water-quality conditions at their sites were only known when someone was physically there — between visits, the system was a black box. The two needs were different in kind. The firm needed a platform to grow with — multi-tenant, extensible, theirs. The utility needed what they had never had: continuous, remote visibility of what their sensors were seeing.`,
  challenge_content_item1_text1: 'Client',
  challenge_content_item1_text2: 'Integration Company, Water Utility',
  challenge_content_item2_text1: 'Need',
  challenge_content_item2_text2:
    'Field telemetry infrastructure without vendor dependency',
  challenge_content_item3_text1: 'Sensors',
  challenge_content_item3_text2: '60 sensors across 11 Devices',
  challenge_content_item4_text1: 'Connectivity',
  challenge_content_item4_text2: 'Cellular',
  challenge_content_item5_text1: 'Refresh Rate',
  challenge_content_item5_text2: 'Minimum 1 point per minute',
  challenge_general1_title: 'Role',
  challenge_general1_content: 'Backend and Frontend Dev',
  challenge_general2_title: 'Stack',
  challenge_general2_content:
    'Node.js, TypeScript, PostgreSQL, Redis, MQTT, Docker',
  challenge_general3_title: 'Deployment',
  challenge_general3_content: 'Online VPS',
  challenge_general4_title: 'User',
  challenge_general4_content: 'Water Supply Company',
  challenge_general5_title: 'Client',
  challenge_general5_content: 'Tech Integration Company',
  architecture_title: 'Independent Server and Worker to collect data',
  architecture_content: `The system runs as two independent Node.js/TypeScript processes coordinated over Redis. An Express backend owns the REST API, authentication, and CRUD over the domain model (projects, devices, sensors, users, templates).&A separate worker process owns MQTT: it subscribes to broker topics, applies per-sensor scaling to the raw signals, and publishes results to Redis. The two processes never talk directly. PostgreSQL is the source of truth for the domain; Redis carries the moving parts — latest readings, sensor metadata cached for the worker, and the pub/sub channel that bridges the worker and the API.&Today the frontend polls the backend every 10 seconds for the active device's readings. A Socket.IO push layer is the next step, wiring the real-time data to the browser so the dashboard reflects new readings as they arrive.`,
  key_decision_title:
    'Key architectural decisions — why the system is shaped this way',
  key_decision_item1_title: 'Separating the MQTT worker from the REST API',
  key_decision_item1_summary:
    'Two processes with different lifecycles, coordinated over Redis.',
  key_decision_item1_content:
    "Telemetry ingestion and HTTP request handling have different lifecycles and different failure modes. A broker disconnection shouldn't take down the API; a backend deploy shouldn't drop incoming sensor data. Splitting them into two processes keeps each responsibility contained and makes each independently deployable and restartable.",
  key_decision_item2_title:
    'Redis pub/sub as the internal bus, not a durable queue',
  key_decision_item2_summary:
    'Ephemeral telemetry favors simplicity over guaranteed delivery.',
  key_decision_item2_content:
    'For real-time telemetry, a missed reading matters less than added operational complexity. Redis pub/sub gives the two processes a clean decoupling without introducing a message broker to run, monitor, and back up. If the workload ever required guaranteed delivery — say, for command-and-control back to the devices — a durable queue would be the right upgrade path.',
  key_decision_item3_title: 'Per-sensor polynomial scaling in the worker',
  key_decision_item3_summary:
    'Raw sensor values become engineering units at ingestion time.',
  key_decision_item3_content:
    "Field sensors often report raw counts, voltages, or unscaled values that need a calibration curve to become meaningful engineering units. The scaling coefficients live per-sensor in PostgreSQL and are cached in Redis, so the worker applies them at ingestion time without a database round-trip per message. Doing this in the worker — the only process that sees the raw stream — means downstream consumers (the API, the dashboard, any future integration) all see the same corrected values. It also means calibration drift can be corrected by updating coefficients in the database instead of touching hardware in the field. This is a habit carried over from years of instrumentation work; it's rarely a first instinct for a generalist backend, but it's the difference between a system that shows numbers and a system that shows measurements.",
  key_decision_item4_title:
    'Explicit schema migrations with dbmate, not an ORM',
  key_decision_item4_summary:
    'Versioned SQL migrations, applied before the app touches the database.',
  key_decision_item4_content:
    'Tables are never created implicitly. Versioned SQL migrations live at the repo root and must be applied before the app or its tests can talk to a database. A one-shot migration service in Docker Compose runs before the backend and worker start. PostgreSQL is the runtime database in every environment; SQLite implementations remain for the unit test suite. Keeping schema management outside of application code makes production changes deliberate and reviewable.',
  key_decision_item5_title: 'Single composition root for wiring',
  key_decision_item5_summary:
    'One file where the entire dependency graph is explicit.',
  key_decision_item5_content:
    'All dependency wiring happens in one file. For an application this size, an explicit object graph is easier to reason about than framework indirection, and any change to a dependency lives in one place rather than scattered across decorators or providers.',
  impact_item1_title: 'Water Utility Company',
  impact_item1_content:
    'The utility now has continuous, remote visibility of its pumping stations for the first time. Flow, pressure, temperature, turbidity, and pH from 11 field devices are available in a dashboard instead of requiring a site visit, which is a foundational change in how the utility can approach its operations — even before any specific process improvement is measured on their end.',
  impact_item2_title: 'Engineering Integration Company',
  impact_item2_content:
    "For the engineering firm that commissioned the work, the shift is strategic. They moved from renting a limited third-party IoT service to owning a platform they control end to end: multi-tenant, extensible, and shaped by their own roadmap rather than a vendor's. The water utility is the first tenant in production; the same platform is designed to onboard additional clients without additional infrastructure work.",
  impact_keypoint1_title: 'Field Devices Installed',
  impact_keypoint1_content: 11,
  impact_keypoint2_title: 'Sensor Types Measured',
  impact_keypoint2_content: '6+',
  impact_keypoint3_title: 'Tenant in production · platform ready for more',
  impact_keypoint3_content: 1,

  stack_title: 'Every category of the stack and how it ships to production',
  stack_item1_title: 'RUNTIME',
  stack_item1_chips: 'Node.js 20+&TypeScript&Express 5',
  stack_item2_title: 'DATA',
  stack_item2_chips: 'PostgreSQL 16&Redis 7&SQLite (tests)',
  stack_item3_title: 'INGESTION',
  stack_item3_chips: 'MQTT&Dedicated Worker Process',
  stack_item4_title: 'SCHEMA and TESTING',
  stack_item4_chips: 'dbmate&Vitest&316 unit tests',
  stack_item5_title: 'CI / CD',
  stack_item5_chips:
    'GitHub Actions&Lint&Typecheck&Multi-arch build&GHCR&Automated deploy on tag',
  stack_item6_title: 'HOSTING',
  stack_item6_chips: 'Hetzner VPS&Docker Compose&Traefik with TLS',
  roadmap_title: "What's next in development",
  roadmap_item1_title: 'Socket.IO push to the browser',
  roadmap_item1_content:
    'Replace the current 10-second polling with real-time updates through the existing Redis channel.',
  roadmap_item2_title: 'User-configurable alarms and thresholds',
  roadmap_item2_content:
    'Per-sensor alerting with configurable rules and notifications.',
  roadmap_item3_title: 'PostgreSQL repository integration tests',
  roadmap_item3_content:
    'Match the coverage already in place for SQLite implementations.',
}

export const en_calibration_suite = {
  status: 'In Production · 4+ years',
  title: 'Industrial Test-Bench Suite for Water Meter Calibration',
  subtitle: `Three industrial test benches that turned a paper-and-Excel calibration process into an automated,
    certified workflow — and unlocked two new laboratory service lines`,
  badges: 'LabVIEW&PLC&OPC UA&PostgreSQL&MQTT&Thermal Label Printing',
  hero_text: `A water utility's meter calibration laboratory in Colombia needed to replace a manual, paper-and-Excel calibration process — and needed capabilities it had never offered before. Over four years I designed and built three PLC-integrated test benches from the ground up, covering standard calibration, specialized homologation testing, and large-diameter meters — all sharing a reusable, standards-driven test architecture.`,
  link1: 'See architecture',
  link2: 'Key decisions',
  link3: 'Management Suite',
  challenge_title: 'Three Test Benches, Three Different Problems',
  challenge_content: `When the calibration lab brought me in, 
  its standard meter-calibration process was entirely manual: technicians opened and closed valves by hand to route 
  water into tanks and through the meters, read gauges, and copied numbers onto paper — later transcribing them into 
  an Excel template to produce a certificate. The process was slow, dependent on the technician's attention to 
  avoid transcription errors, and had no path to scale beyond what a person could physically read and write in 
  real time.&Two other gaps had nothing to do with modernizing an existing process — they were capabilities the 
  lab simply couldn't offer yet. Homologation testing (durability, static pressure, intrinsic error, and other 
  standardized certification tests) and large-diameter meter calibration both required dedicated benches that 
  didn't exist. Without them, that business stayed on the table.&Over four years, I built three independent 
  test-bench systems to close these gaps: an automated calibration bench for standard meters, a homologation 
  bench for specialized certification testing, and a macro-meter bench for large-diameter units. Each system 
  integrates with its own set of industrial PLCs, sensors, and actuators, and each automates the same core 
  promise: guide the technician through the procedure, capture readings without manual transcription, and 
  generate the certificate automatically.`,
  challenge_content_item1_text1: 'Client',
  challenge_content_item1_text2: `A water utility's meter calibration laboratory in Colombia`,
  challenge_content_item2_text1: 'Systems',
  challenge_content_item2_text2: '3 independent test-bench systems',
  challenge_content_item3_text1: 'Capacity',
  challenge_content_item3_text2:
    'Standard calibration · Homologation (20 positions) · Macro-meter (6 positions)',
  challenge_content_item4_text1: 'Hardware',
  challenge_content_item4_text2:
    'Industrial PLCs, valves, actuators, flow, temperature and pressure sensors',
  challenge_content_item5_text1: 'Protocols',
  challenge_content_item5_text2: 'OPC UA, MQTT',
  challenge_content_item6_text1: 'Timeline',
  challenge_content_item6_text2: '4+ years in production',
  challenge_general1_title: 'Role',
  challenge_general1_content: 'Backend and Frontend Dev',
  challenge_general2_title: 'Stack',
  challenge_general2_content:
    'Node.js, TypeScript, PostgreSQL, Redis, MQTT, Docker',
  challenge_general3_title: 'Deployment',
  challenge_general3_content: 'Online VPS',
  challenge_general4_title: 'User',
  challenge_general4_content: 'Water Supply Company',
  challenge_general5_title: 'Client',
  challenge_general5_content: 'Tech Integration Company',
  architecture_title:
    'Automation logic and reports generation working together',
  architecture_content: `Each bench is a self-contained system: its own PC, its own 
  PostgreSQL instance, its own MQTT broker, its own PLC. This isolation is 
  deliberate — a failure or maintenance window on one bench never blocks the 
  others. Inside each bench, LabVIEW orchestrates the test sequence, reads 
  sensor and actuator state from the PLC through an OPC server, exchanges 
  structured messages with the operator's tablet over MQTT, persists results to 
  PostgreSQL, and generates the calibration certificate through an Excel template 
  that the lab lead maintains directly`,
  architecture_annotation: 'Tests as compositions of reusable processes',
  key_decision_title:
    'Key architectural decisions — why the system is shaped this way',
  key_decision_item1_title: 'Independent, self-contained benches',
  key_decision_item1_summary:
    'Every bench self-hosts its own database and broker — deployment and maintenance one at a time.',
  key_decision_item1_content: `From day one, the plan was a suite — not a single bench. 
  That shaped a core decision: keep each bench fully self-contained, with its own PC, 
  PostgreSQL instance, and MQTT broker. A centralized architecture — one shared server, 
  one common database — would have been simpler to build, but it would have made every 
  bench depend on that server's uptime, and would have blocked calibration whenever the 
  management PC went into maintenance. Isolation was the tradeoff: cross-bench queries 
  are not possible directly, but the lab does not need them — historical data lives in 
  each bench's local system.`,
  key_decision_item2_title: 'Reusable processes over duplicated test logic',
  key_decision_item2_summary:
    'Tests are compositions of shared processes — the same abstraction that keeps development lean and fixes propagate.',
  key_decision_item2_content: `While mapping out the tests with the lab lead, the same shapes kept appearing 
    across different tests: the same flow-and-reading loop stopped by volume, the 
    same pressure cycle, the same purge-and-vacuum preparation. I modeled that 
    observation directly in code — a catalog of reusable processes, and each test 
    declared as an ordered list of processes to run. A fixed base class handles the 
    surrounding structure — preparation, execution, finalization, document generation — 
    while the child test defines only what runs inside execution. New tests are 
    compositions of existing processes when the standards allow it, and a fix or 
    improvement to one process propagates to every test that uses it.`,
  key_decision_item3_title:
    'A hardware abstraction layer with a simulator implementation',
  key_decision_item3_summary:
    'One interface for hardware access — swappable between the real PLC and an emulated source..',
  key_decision_item3_content: `The test logic never talks to the PLC directly. It goes through a Hardware 
    Abstraction Layer that exposes one interface, with two interchangeable implementations
     behind it: one that reads and writes through the OPC server, and one that emulates 
     the same signals — analog sensor values, digital level sensors, pump and valve states
      — with configurable inputs. It is not hardware-in-the-loop, but it is enough to 
      develop, debug, and validate new procedures without occupying the physical bench, 
      and to test changes safely before deploying to a bench in production. The layer 
      also opens a clean migration path: swapping the OPC-based implementation for a 
      direct Modbus one would not require touching the test logic.`,
  key_decision_item4_title: 'User-owned certificate templates',
  key_decision_item4_summary:
    'The software fills the raw numbers; the lab lead owns the certificate layout and calculations.',
  key_decision_item4_content: `Calibration certificates change over time — layouts get updated, calculations get 
    refined, new regulatory requirements add fields. From the start, I did not want to 
    be in the loop for any of that. LabVIEW report generation was on the table as the 
    straightforward option, but it would have locked the certificate format inside the 
    code. Instead, the software writes the raw test data into a sheet of an Excel 
    workbook, and the lab lead owns a second sheet that reads from the raw sheet — 
    formulas, layout, logos, legal text, rounding, units, everything. When the test 
    finishes, LabVIEW asks Excel through ActiveX to print that sheet to PDF. The only 
    contract with the software is the sheet name and how many pages to print — 
    everything else is theirs.`,
  key_decision_item5_title: 'Reading capture from anywhere on the bench',
  key_decision_item5_summary:
    'The operator does not walk to the PC — the tablet holds a bidirectional MQTT channel with LabVIEW.',
  key_decision_item5_content: `The reading capture runs on a handheld device wherever the meter is on the bench — 
    today, a rugged Zebra unit with a built-in barcode scanner, but the software works 
    on any browser-capable device. The device speaks MQTT directly to a local Mosquitto 
    broker on the bench PC over WebSockets. LabVIEW publishes the test context — meters, 
    positions, serials, previous readings — and the browser renders the page from it; the 
    operator's inputs come back on a separate topic. Mosquitto is easy to set up on the 
    bench PC, and the pub/sub model leaves room for adding more consumers in the future 
    without changing how LabVIEW publishes.`,
  impact_item1_title: 'Four years in production, two new service lines',
  impact_item1_content: `The manual bottleneck is gone. Readings are captured on a handheld device at the 
    meter, not transcribed later — so the transcription errors that used to reach the 
    certificate are removed by design — and the certificate is generated automatically 
    at the end of each run. Beyond modernizing the calibration process that already 
    existed, the suite unlocked two service lines the laboratory did not offer before: 
    homologation testing and large-diameter meter calibration. Four years in, the 
    three benches run side by side across shifts under a support model of roughly 
    ten trivial interventions per year, with a recovery file per run that lets any 
    certificate be reprinted if needed. The lab lead controls the certificate 
    templates directly, so format and regulatory changes happen without a software release.`,
  impact_item2_title: '',
  impact_item2_content: '',
  impact_keypoint1_title: 'micro-meter bench, doubled-line expansion',
  impact_keypoint1_content: '40 water meters per batch',
  impact_keypoint2_title: 'Specialized tests for the homologation service',
  impact_keypoint2_content: '8+ special tests',
  impact_keypoint3_title: 'large-diameter meter calibration, new capability',
  impact_keypoint3_content: '6 macro meters per batch',

  stack_title: 'An on-premise industrial stack, one instance per bench',
  stack_item1_title: 'RUNTIME & ORCHESTRATION',
  stack_item1_chips: 'LabVIEW&LabVIEW OOP (LVOOP)&State machines',
  stack_item2_title: 'DATA PERSISTENCE',
  stack_item2_chips: 'PostgreSQL 16&Excel Workbook (Templates)',
  stack_item3_title: 'HARDWARE INTEGRATION',
  stack_item3_chips:
    'Hardware Abstraction Layer&OPC UA&Industrial PLCs&Sensors and Actuators',
  stack_item4_title: 'OPERATOR INTERFACE',
  stack_item4_chips:
    'Local web server&MQTT (Mosquitto)&M2Mqtt(via .NET interop)',
  stack_item5_title: 'REPORTING & OUTPUT',
  stack_item5_chips: 'Excel + ActiveX&PDF&Thermal label printer',
  roadmap_title:
    'The suite works and the client has not asked for evolution. These is an initiative I would take on my own time',
  roadmap_item1_title: 'Direct Modbus integration',
  roadmap_item1_content:
    'Replacing the licensed OPC server with a direct Modbus implementation behind the HAL — no change to the test logic',
  roadmap_item2_title: 'Portable rewrite to a modern web stack',
  roadmap_item2_content:
    'Rebuilding the orchestration in Node.js + Electron. The main goal is containerized deployment — one docker-compose spinning up the app, the database, and the broker per bench.',
  gallery_item1: 'Welcome screen of the Homologation Software',
  gallery_item2: 'Handheld UI to capture readings',
  gallery_item3: 'Execution of a test in Macro meters software',
  gallery_item4: 'Intrinsic error test running on the micro-meter bench',
  gallery_item5: 'Specialized test — static pressure',
  gallery_item6: 'Micro-meter bench in operation',
}

export const en_management_lab_dict = {
  status: 'In Production · 4 years',
  title: 'Calibration Lab Management System',
  subtitle: `Desktop operations platform for a water-meter calibration lab — a 
  Node.js + Electron rebuild of the legacy LabVIEW system.`,
  badges:
    'Electron&Node.js&TypeScript&React&PostgreSQL&ExcelJS&Thermal Label Printing',
  hero_text: `A desktop operations platform for a water-meter calibration laboratory, 
  built in Node.js and Electron to replace an aging LabVIEW management app I had 
  originally built for the same lab. Proposed as part of a broader upgrade contract, 
  the rebuild introduced the reporting, metrics and document generation the legacy 
  system could not deliver — and has run in production for 4 years across 5 lab 
  expansions.`,
  link1: 'See architecture',
  link2: 'Key decisions',
  link3: 'Test-Bench Suite',
  challenge_title: "A working test bench isn't a working lab",
  challenge_content: `The first LabVIEW system I built for this laboratory did 
  exactly what the contract asked for: it ran the water-meter test bench and 
  produced calibration certificates. It worked. But over the years, as the lab's 
  operation matured, it became clear that running a test bench and running a 
  laboratory are two different problems — and the LabVIEW app was only solving 
  the first.&The management side lived in the same LabVIEW UI as the bench: 
  functional but limited. There was no proper reporting for calibrated-meter 
  batches, no operational metrics or usage statistics, and no way to generate 
  the intake and delivery documents operators still produced by hand. As the lab 
  took on more customers and more meter models, those gaps turned from 
  inconvenience into daily friction.&When the next expansion contract came in — 
  two new test benches to build — I proposed rebuilding the management layer 
  from scratch on a modern stack: a Node.js + Electron desktop application backed 
  by PostgreSQL, running on a dedicated management PC per bench. The bench 
  software would stay in LabVIEW — that was the right tool for hardware control. 
  The lab software would move to a stack shaped for the actual problem: forms, 
  workflows, data, reports and users.`,
  challenge_content_item1_text1: 'Client',
  challenge_content_item1_text2: `A water utility's meter calibration laboratory in Colombia`,
  challenge_content_item2_text1: 'Legacy stack',
  challenge_content_item2_text2: 'LabVIEW · monolithic bench + management UI',
  challenge_content_item3_text1: 'Missing capabilities',
  challenge_content_item3_text2:
    'Batch reporting · usage metrics · intake & delivery documents',
  challenge_content_item4_text1: 'In production',
  challenge_content_item4_text2: '4 years · through 5 lab expansions',
  challenge_content_item5_text1: 'Trigger',
  challenge_content_item5_text2:
    'Next lab expansion — two new benches on the way',
  challenge_general1_title: 'Role',
  challenge_general1_content: 'Backend and Frontend Dev',
  challenge_general2_title: 'Stack',
  challenge_general2_content:
    'Node.js, TypeScript, PostgreSQL, Redis, MQTT, Docker',
  challenge_general3_title: 'Deployment',
  challenge_general3_content: 'Online VPS',
  challenge_general4_title: 'User',
  challenge_general4_content: 'Water Supply Company',
  challenge_general5_title: 'Client',
  challenge_general5_content: 'Tech Integration Company',
  architecture_title:
    'A local Express backend with a React client, packaged as a desktop app',
  architecture_content: `The rebuild isn't an Electron app in the SPA-wrapper 
  sense. The main process runs a Node.js Express backend — REST endpoints, 
  business logic, PostgreSQL access, printer integrations — and the React 
  renderer is a SPA that consumes it over HTTP on localhost, the same way it 
  would consume a remote server. IPC is reserved for what HTTP can't do: native 
  OS dialogs for file and folder selection. Electron packages the two into one 
  desktop binary, which is what lets the whole thing ship on-premise without a 
  server.`,
  architecture_annotation: 'Tests as compositions of reusable processes',
  key_decision_title:
    'Key architectural decisions — why the system is shaped this way',
  key_decision_item1_title: 'Express backend in the main process',
  key_decision_item1_summary:
    'Business logic sits behind an HTTP API on localhost. IPC is used only for OS-level dialogs.',
  key_decision_item1_content: `The main process runs a Node.js Express backend that exposes REST 
  endpoints for authentication, business logic, PostgreSQL access and printer integration. The 
  React renderer consumes those endpoints over HTTP on localhost, the same way a browser client 
  consumes any remote server. IPC is used only for native operations the browser context cannot 
  perform directly — file and folder selection dialogs handled by the operating system. Keeping 
  the two channels separate along their responsibilities means the backend is self-contained and 
  could run outside Electron with minimal changes to the transport layer.`,
  key_decision_item2_title: 'Worker Threads for reports and label printing',
  key_decision_item2_summary:
    'Long-running tasks are offloaded from the main thread so the HTTP API stays responsive.',
  key_decision_item2_content: `The Express backend runs on Node's single-threaded event loop, 
  and its job is to serve requests without delay. Two operations in this system do not fit that 
  constraint: generating Excel reports over ranges of calibrated meters, which involves database 
  reads and row-by-row workbook construction, and driving thermal label printers over TCP with 
  ZPL or TSC commands, which blocks on I/O with external hardware. Both are delegated to Worker 
  Threads spawned from the main process. The HTTP layer remains free to answer the renderer 
  while these tasks run in parallel, and errors in the workers surface back through structured 
  messages without affecting API availability.`,
  key_decision_item3_title: 'Electron as the delivery mechanism',
  key_decision_item3_summary:
    'Chosen for on-premise packaging of a Node backend and a React client into a single installable binary.',
  key_decision_item3_content: `The laboratory operates on a controlled internal network with 
  sensitive calibration data that cannot leave the site. A remote web application was not an 
  option, and hosting a local server alongside a separate React build would have meant installing 
  Node, dependencies and a web server on each Management PC, then maintaining them independently 
  from the UI. Electron packages the Express backend and the React client into a single desktop 
  binary that installs like any Windows application and requires no separate server. The choice 
  is operational rather than architectural — the backend inside is a standard Node service, and 
  Electron is the vehicle that lets it ship to on-premise environments with minimal setup.`,
  key_decision_item4_title: 'Shared PostgreSQL with write-boundary separation',
  key_decision_item4_summary:
    'Bench and Management share one database but never write to the same tables; coordination lives in the schema, not in code.',
  key_decision_item4_content: `Each test bench has a single PostgreSQL database that both the 
  LabVIEW bench software and the Node Management System connect to. Rather than adding a 
  coordination layer between the two processes, the write responsibilities are separated at the 
  schema level: the Management System writes orders, meters and users; the bench writes test 
  results. Each side reads what it needs from the other's tables. Where multiple rows must be 
  written together — order intake, batch registration of meters — the operation runs inside a 
  transaction to keep the write atomic. The result is a simple integration boundary that lets 
  two independent processes cooperate without messaging infrastructure between them.`,
  impact_item1_title: 'Five expansions, one codebase',
  impact_item1_content: `Four years after the rebuild, the Management System runs the day-to-day 
  of the laboratory: 7-8 operators and the lab manager work with it across two shifts, orders move 
  from intake to certificate through the same workflow, and the reports the legacy system never 
  produced are now the first thing the manager opens to check throughput and backlog.&The 
  captured report window — nearly seventeen thousand meters in ten weeks on a single bench — is 
  the kind of volume the old LabVIEW UI could not have surfaced. The system has absorbed five 
  lab expansions without a rewrite: two new benches, each with its own deployment, and three 
  feature expansions driven by upgrades to the bench software. The client has kept the product 
  in continuous support and continues to request work against it.`,
  impact_item2_title: '',
  impact_item2_content: '',
  impact_keypoint1_title:
    'Meters calibrated in a single 10-week window (one bench)',
  impact_keypoint1_content: '16.838',
  impact_keypoint2_title: 'Years in production, no bug-induced downtime',
  impact_keypoint2_content: '4 years',
  impact_keypoint3_title: 'Independent deployments across the lab',
  impact_keypoint3_content: '3 instances',
  impact_keypoint4_title: 'Meter models in the active catalog',
  impact_keypoint4_content: '30+ references',

  stack_title:
    'A solo build, kept intentionally minimal — libraries chosen for stability',
  stack_item1_title: 'RUNTIME & PACKAGING',
  stack_item1_chips: 'Electron&Node.js&TypeScript&electron-builder',
  stack_item2_title: 'BACKEND',
  stack_item2_chips: 'ExpressJS&Worker Threads&bcrypt',
  stack_item3_title: 'DATA PERSISTENCE',
  stack_item3_chips: 'PostgreSQL',
  stack_item4_title: 'OPERATOR INTERFACE',
  stack_item4_chips: 'React&React Router&Material UI',
  stack_item5_title: 'REPORTING & OUTPUT',
  stack_item5_chips: 'ExcelJS&ZPL / TSC',
  roadmap_title: `The system runs in a stable, low-change regime — no active roadmap under contract. These are the areas I'd revisit as own initiative if I returned to it today`,
  roadmap_item1_title: 'Automated testing',
  roadmap_item1_content:
    'A Vitest suite around the business logic in the Express handlers and the Excel-generation workers.',
  roadmap_item2_title: 'Update delivery',
  roadmap_item2_content:
    'Replace the manual app.asar replacement with electron-updater against a release channel, so the three PCs pull updates on their own.',
  gallery_item1:
    'Administrator dashboard — active orders, calibration throughput and sensor-recalibration reminders on a single screen',
  gallery_item2:
    'Order creation — client, meter reference from the catalog, and sample counts per test type',
  gallery_item3:
    'Active work queue — each row tracks progress by test type against the total samples in the order',
  gallery_item4:
    'Meter reference catalog — physical and metrological properties are immutable once saved',
  gallery_item5:
    'Reporting module — 16,838 meters calibrated on a single bench over a 10-week window, broken down by operator and reference',
  gallery_item6:
    'Site configuration — printer targets and network folders for certificates, backups and templates',
}

export const en_contact_dict = {
  title: 'Send me a message',
  name: `Name`,
  name_hint: "Who I'm talking to",
  mail: `Email`,
  mail_hint: 'How will I contact you',
  message: `Message`,
  message_hint: `Let's talk`,
  send: `Send Email`,
  reply: 'I usually reply within 24 hours',
}
