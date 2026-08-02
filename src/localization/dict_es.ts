export const es_nav_dict = {
  My_Portfolio: 'Mi Portafolio',
  Home: 'Inicio',
  About: 'Sobre mí',
  Skills: 'Habilidades',
  Projects: 'Proyectos',
  lets_talk: 'Hablemos',
  section: 'Secciones',
  pdf_popover: 'Descargar CV',
  message_404:
    'La página que buscas pudo haber sido eliminada, cambiado de nombre o no está disponible temporalmente',
  message_404_button: 'Ir al inicio',
  title_problem: 'El Desafío',
  title_architecture: 'Arquitectura',
  title_key_decisions: 'Decisiones Clave',
  title_impact: 'Impacto',
  title_stack: 'Stack y Despliegue',
  title_roadmap: 'En el Roadmap',
  live_demo: 'Demo en Vivo',
  back_top: 'Volver arriba',
}

export const es_presentation_dict = {
  greeting: 'Hola, soy ',
  tagline: `Conecto el mundo físico y digital — convirtiendo datos de sensores en decisiones en tiempo real a través
  de sistemas backend construidos con Node.js, TypeScript y protocolos industriales`,
}

export const es_about_dict = {
  about: 'Sobre mí',
  about_text1: `Soy desarrollador backend con más de 6 años construyendo software que conecta hardware y aplicaciones web. Trabajo con Node.js, TypeScript y PostgreSQL para
  exponer datos en tiempo real a través de APIs REST y WebSockets — y me comunico con el mundo físico mediante protocolos industriales como MQTT, Modbus y OPC\n`,
  about_text2: `La mayoría de los desarrolladores backend nunca han integrado un PLC o un sensor. Esa combinación de backend moderno e instrumentación es lo que hace mi perfil poco común
  — y es mi ventaja en IoT, software industrial y sistemas en tiempo real`,
}

export const es_skills_dict = {
  skill: 'Habilidades',
  database: 'Bases de Datos',
  other: 'Otros',
  skill_title_backend: 'Backend y Runtime',
  skill_database: 'Base de Datos y Caché',
  skill_realtime: 'Tiempo Real e IoT',
}

export const es_projects_dict = {
  project: 'Proyectos Destacados',
  description: `Sistemas reales que he construido — desde backends IoT en tiempo real hasta integración de hardware industrial`,
  button_live: 'Demo en Vivo',
  button_github: 'GitHub',
  button_details: 'Leer Más',
  project_iot: 'Panel de Monitoreo IoT en Tiempo Real',
  project_iot_description: `Plataforma IoT multi-tenant para monitoreo de sensores en tiempo real. Ingesta MQTT desacoplada, bus pub/sub con Redis, dashboard en React. Desplegada en un VPS de Hetzner con CI/CD automatizado`,
  project_dashboard_title: 'Sistema de Gestión para Laboratorio de Calibración',
  project_dashboard_description: `Aplicación de escritorio que gestiona todo el flujo operativo de un laboratorio de calibración — órdenes de trabajo, ingreso de medidores etiquetados con código de barras, reportes automáticos en Excel y métricas en tiempo real — trabajando junto a 3 bancos de calibración y pruebas. 4 años en producción, evolucionado a través de 5 expansiones del laboratorio`,
  project_calbench_title: 'Suite de Calibración y Pruebas de Medidores de Agua',
  project_calbench_description: `3 sistemas que controlan bombas, válvulas y sensores en tiempo real para automatizar la calibración de medidores de agua — eliminando errores manuales y habilitando pruebas que el laboratorio no podía realizar antes`,
  project_cinema_title: 'Sistema de Reservas de Cine',
  project_cinema_description: `Aplicación full-stack de reserva de asientos con actualizaciones de disponibilidad en tiempo real vía WebSockets, autenticación JWT y entrega automática de boletos mediante generación de PDF y correo electrónico.`,
}

export const es_iot_system_dict = {
  status: 'En Producción',
  title: 'Plataforma de Telemetría IoT Multi-Tenant',
  subtitle:
    'Ingesta MQTT desacoplada con un bus interno basado en Redis, en producción para una empresa pública de acueducto',
  badges: 'Node.js&TypeScript&PostgreSQL&Redis&MQTT&Docker',
  link1: 'Demo en Vivo',
  link2: 'Repo del Backend',
  link3: 'Repo del Frontend',
  hero_text:
    'Un backend de telemetría IoT multi-tenant, diseñado para reutilizarse entre proyectos en lugar de reconstruirse para cada cliente. Su primer despliegue en producción se entregó a través de una empresa de ingeniería colombiana y hoy impulsa el monitoreo en tiempo real de la calidad del agua para una empresa pública de acueducto en Cundinamarca: 11 dispositivos de campo que miden caudal, presión, temperatura, turbidez y pH, donde antes no existía telemetría remota.&La demo pública corre en una instancia de exhibición separada con tres tenants simulados — salud, agrotech y farmacéutica — para que puedas explorar la experiencia multi-tenant sin tocar datos reales de clientes.',
  challenge_title:
    'Monitoreo remoto continuo para infraestructura de campo distribuida',
  challenge_content: `La empresa de ingeniería para la que construí esto necesitaba recolectar datos de sensores de campo desplegados en las instalaciones de sus clientes — una solicitud cada vez más común de empresas que buscan centralizar la telemetría IoT sin enviar personal.&Antes de este sistema, dependían de una plataforma IoT pública y gratuita que podía suscribirse a tópicos MQTT y mostrar lecturas, y poco más. Sin capa de administración, sin organización multi-proyecto, sin control sobre el escalado de señales, sin margen para personalizar el comportamiento por cliente.&Su primer cliente en la nueva plataforma, una empresa pública de acueducto en Cundinamarca, tenía una brecha más fundamental: ninguna telemetría remota en absoluto. Las condiciones de calidad del agua en sus instalaciones solo se conocían cuando alguien estaba físicamente presente — entre visitas, el sistema era una caja negra. Las dos necesidades eran de naturaleza distinta. La empresa de ingeniería necesitaba una plataforma con la cual crecer — multi-tenant, extensible, propia. La empresa de acueducto necesitaba lo que nunca había tenido: visibilidad remota y continua de lo que veían sus sensores.`,
  challenge_content_item1_text1: 'Cliente',
  challenge_content_item1_text2: 'Empresa de Integración, Empresa de Acueducto',
  challenge_content_item2_text1: 'Necesidad',
  challenge_content_item2_text2:
    'Infraestructura de telemetría de campo sin dependencia de proveedor',
  challenge_content_item3_text1: 'Sensores',
  challenge_content_item3_text2: '60 sensores en 11 dispositivos',
  challenge_content_item4_text1: 'Conectividad',
  challenge_content_item4_text2: 'Celular',
  challenge_content_item5_text1: 'Frecuencia de Actualización',
  challenge_content_item5_text2: 'Mínimo 1 punto por minuto',
  challenge_general1_title: 'Rol',
  challenge_general1_content: 'Desarrollador Backend y Frontend',
  challenge_general2_title: 'Stack',
  challenge_general2_content:
    'Node.js, TypeScript, PostgreSQL, Redis, MQTT, Docker',
  challenge_general3_title: 'Despliegue',
  challenge_general3_content: 'VPS en línea',
  challenge_general4_title: 'Usuario',
  challenge_general4_content: 'Empresa de Acueducto',
  challenge_general5_title: 'Cliente',
  challenge_general5_content: 'Empresa de Integración Tecnológica',
  architecture_title: 'Servidor y Worker independientes para recolectar datos',
  architecture_content: `El sistema corre como dos procesos independientes de Node.js/TypeScript coordinados 
  sobre Redis. Un backend en Express gestiona la API REST, la autenticación y el CRUD sobre el modelo de 
  dominio (proyectos, dispositivos, sensores, usuarios, plantillas).&Un proceso worker separado gestiona 
  MQTT: se suscribe a los tópicos del broker, aplica el escalado por sensor a las señales crudas, y publica 
  los resultados en Redis. Los dos procesos nunca se comunican directamente. PostgreSQL es la fuente de 
  verdad del dominio; Redis transporta las partes dinámicas — últimas lecturas, metadatos de sensores en 
  caché para el worker, y el canal pub/sub que conecta al worker con la API.&Hoy el frontend consulta al 
  backend cada 10 segundos por las lecturas del dispositivo activo. Una capa de push con Socket.IO es el 
  siguiente paso, conectando los datos en tiempo real al navegador para que el panel refleje las nuevas 
  lecturas a medida que llegan.`,
  key_decision_title:
    'Decisiones arquitectónicas clave — por qué el sistema está diseñado así',
  key_decision_item1_title: 'Separar el worker MQTT de la API REST',
  key_decision_item1_summary:
    'Dos procesos con ciclos de vida distintos, coordinados sobre Redis.',
  key_decision_item1_content: `La ingesta de telemetría y el manejo de peticiones HTTP tienen ciclos de vida y modos de falla diferentes.
    Una desconexión del broker no debería tumbar la API; un despliegue del backend no debería perder datos 
    entrantes de sensores. Dividirlos en dos procesos mantiene cada responsabilidad contenida y hace que 
    cada uno sea desplegable y reiniciable de forma independiente.`,
  key_decision_item2_title:
    'Pub/sub de Redis como bus interno, no una cola durable',
  key_decision_item2_summary:
    'La telemetría efímera favorece la simplicidad sobre la entrega garantizada.',
  key_decision_item2_content: `Para telemetría en tiempo real, una lectura perdida importa menos que la complejidad operativa añadida.
    El pub/sub de Redis le da a los dos procesos un desacoplamiento limpio sin introducir un message broker 
    que haya que operar, monitorear y respaldar. Si la carga de trabajo alguna vez requiriera entrega 
    garantizada — por ejemplo, para comandos de control hacia los dispositivos — una cola durable sería 
    el camino de actualización correcto.`,
  key_decision_item3_title: 'Escalado polinomial por sensor en el worker',
  key_decision_item3_summary:
    'Los valores crudos de los sensores se convierten en unidades de ingeniería en el momento de la ingesta.',
  key_decision_item3_content: `Los sensores de campo suelen reportar cuentas crudas, voltajes o valores sin escalar que necesitan una 
    curva de calibración para convertirse en unidades de ingeniería con sentido. Los coeficientes de escalado 
    viven por sensor en PostgreSQL y se cachean en Redis, de modo que el worker los aplica en el momento de 
    la ingesta sin un viaje a la base de datos por mensaje. Hacer esto en el worker — el único proceso que ve 
    el flujo crudo — significa que los consumidores posteriores (la API, el panel, cualquier integración futura) 
    ven todos los mismos valores corregidos. También significa que la deriva de calibración puede corregirse 
    actualizando coeficientes en la base de datos en lugar de tocar hardware en campo. Es un hábito heredado 
    de años de trabajo en instrumentación; rara vez es el primer instinto de un backend generalista, pero es 
    la diferencia entre un sistema que muestra números y uno que muestra mediciones.`,
  key_decision_item4_title:
    'Migraciones de esquema explícitas con dbmate, no un ORM',
  key_decision_item4_summary:
    'Migraciones SQL versionadas, aplicadas antes de que la app toque la base de datos.',
  key_decision_item4_content: `Las tablas nunca se crean implícitamente. Las migraciones SQL versionadas viven en la raíz del repositorio 
    y deben aplicarse antes de que la app o sus pruebas puedan hablar con una base de datos. Un servicio de 
    migración de un solo uso en Docker Compose corre antes de que arranquen el backend y el worker. PostgreSQL 
    es la base de datos en tiempo de ejecución en todos los entornos; las implementaciones en SQLite se mantienen 
    para la suite de pruebas unitarias. Mantener la gestión del esquema fuera del código de la aplicación hace 
    que los cambios en producción sean deliberados y revisables.`,
  key_decision_item5_title: 'Una única raíz de composición para el cableado',
  key_decision_item5_summary:
    'Un archivo donde todo el grafo de dependencias es explícito.',
  key_decision_item5_content: `Todo el cableado de dependencias ocurre en un solo archivo. Para una aplicación de este tamaño, un grafo de 
    objetos explícito es más fácil de razonar que la indirección de un framework, y cualquier cambio a una 
    dependencia vive en un solo lugar en lugar de estar disperso entre decoradores o providers.`,
  impact_item1_title: 'Empresa de Acueducto',
  impact_item1_content: `La empresa de acueducto ahora tiene, por primera vez, visibilidad remota y continua de sus estaciones de 
    bombeo. Caudal, presión, temperatura, turbidez y pH de 11 dispositivos de campo están disponibles en un panel 
    en lugar de requerir una visita al sitio, lo cual es un cambio fundamental en cómo la empresa puede abordar 
    sus operaciones — incluso antes de que se mida cualquier mejora específica de proceso de su parte.`,
  impact_item2_title: 'Empresa de Integración de Ingeniería',
  impact_item2_content: `Para la empresa de ingeniería que encargó el trabajo, el cambio es estratégico. Pasaron de rentar un servicio 
    IoT de terceros limitado a ser dueños de una plataforma que controlan de principio a fin: multi-tenant, 
    extensible y moldeada por su propio roadmap en lugar del de un proveedor. La empresa de acueducto es el primer 
    tenant en producción; la misma plataforma está diseñada para incorporar clientes adicionales sin trabajo de 
    infraestructura adicional.`,
  impact_keypoint1_title: 'Dispositivos de Campo Instalados',
  impact_keypoint1_content: 11,
  impact_keypoint2_title: 'Tipos de Sensores Medidos',
  impact_keypoint2_content: '6+',
  impact_keypoint3_title: 'Tenant en producción · plataforma lista para más',
  impact_keypoint3_content: 1,

  stack_title: 'Cada categoría del stack y cómo llega a producción',
  stack_item1_title: 'RUNTIME',
  stack_item1_chips: 'Node.js 20+&TypeScript&Express 5',
  stack_item2_title: 'DATOS',
  stack_item2_chips: 'PostgreSQL 16&Redis 7&SQLite (pruebas)',
  stack_item3_title: 'INGESTA',
  stack_item3_chips: 'MQTT&Proceso Worker Dedicado',
  stack_item4_title: 'ESQUEMA Y PRUEBAS',
  stack_item4_chips: 'dbmate&Vitest&316 pruebas unitarias',
  stack_item5_title: 'CI / CD',
  stack_item5_chips:
    'GitHub Actions&Lint&Typecheck&Build multi-arquitectura&GHCR&Despliegue automático por tag',
  stack_item6_title: 'HOSTING',
  stack_item6_chips: 'VPS de Hetzner&Docker Compose&Traefik con TLS',
  roadmap_title: 'Lo que sigue en desarrollo',
  roadmap_item1_title: 'Push con Socket.IO al navegador',
  roadmap_item1_content:
    'Reemplazar el polling actual de 10 segundos con actualizaciones en tiempo real a través del canal de Redis existente.',
  roadmap_item2_title: 'Alarmas y umbrales configurables por el usuario',
  roadmap_item2_content:
    'Alertas por sensor con reglas y notificaciones configurables.',
  roadmap_item3_title: 'Pruebas de integración del repositorio PostgreSQL',
  roadmap_item3_content:
    'Igualar la cobertura ya existente para las implementaciones en SQLite.',
}

export const es_calibration_suite = {
  status: 'En Producción · 4+ años',
  title:
    'Suite de Bancos de Prueba Industriales para Calibración de Medidores de Agua',
  subtitle: `Tres bancos de prueba industriales que convirtieron un proceso de calibración en papel y Excel en un flujo de trabajo
    automatizado y certificado — y habilitaron dos nuevas líneas de servicio del laboratorio`,
  badges: 'LabVIEW&PLC&OPC UA&PostgreSQL&MQTT&Impresión de Etiquetas Térmicas',
  hero_text: `El laboratorio de calibración de medidores de una empresa de acueducto en Colombia necesitaba reemplazar 
  un proceso de calibración manual, en papel y Excel — y necesitaba capacidades que nunca había ofrecido antes. 
  Durante cuatro años diseñé y construí desde cero tres bancos de prueba integrados con PLC, cubriendo calibración 
  estándar, pruebas especializadas de homologación y medidores de gran diámetro — todos compartiendo una 
  arquitectura de pruebas reutilizable y basada en normas.`,
  link1: 'Ver arquitectura',
  link2: 'Decisiones clave',
  link3: 'Suite de Gestión',
  challenge_title: 'Tres Bancos de Prueba, Tres Problemas Distintos',
  challenge_content: `Cuando el laboratorio de calibración me contrató,
  su proceso estándar de calibración de medidores era completamente manual: los técnicos abrían y cerraban válvulas a mano para dirigir
  el agua hacia tanques y a través de los medidores, leían los indicadores, y copiaban los números en papel — para luego transcribirlos en
  una plantilla de Excel y producir un certificado. El proceso era lento, dependía de la atención del técnico para
  evitar errores de transcripción, y no tenía forma de escalar más allá de lo que una persona podía leer y escribir físicamente en
  tiempo real.&Otras dos brechas no tenían nada que ver con modernizar un proceso existente — eran capacidades que el
  laboratorio simplemente no podía ofrecer todavía. Las pruebas de homologación (durabilidad, presión estática, error intrínseco y otras
  pruebas de certificación estandarizadas) y la calibración de medidores de gran diámetro requerían ambas bancos dedicados que
  no existían. Sin ellos, ese negocio quedaba sobre la mesa.&A lo largo de cuatro años, construí tres sistemas de banco de prueba
  independientes para cerrar estas brechas: un banco de calibración automatizado para medidores estándar, un banco de
  homologación para pruebas de certificación especializadas, y un banco de macromedidores para unidades de gran diámetro. Cada sistema
  se integra con su propio conjunto de PLCs industriales, sensores y actuadores, y cada uno automatiza la misma promesa
  central: guiar al técnico a través del procedimiento, capturar lecturas sin transcripción manual, y
  generar el certificado automáticamente.`,
  challenge_content_item1_text1: 'Cliente',
  challenge_content_item1_text2: `Laboratorio de calibración de medidores de una empresa de acueducto en Colombia`,
  challenge_content_item2_text1: 'Sistemas',
  challenge_content_item2_text2: '3 sistemas de banco de prueba independientes',
  challenge_content_item3_text1: 'Capacidad',
  challenge_content_item3_text2:
    'Calibración estándar · Homologación (20 posiciones) · Macromedidores (6 posiciones)',
  challenge_content_item4_text1: 'Hardware',
  challenge_content_item4_text2:
    'PLCs industriales, válvulas, actuadores, sensores de caudal, temperatura y presión',
  challenge_content_item5_text1: 'Protocolos',
  challenge_content_item5_text2: 'OPC UA, MQTT',
  challenge_content_item6_text1: 'Cronología',
  challenge_content_item6_text2: '4+ años en producción',
  challenge_general1_title: 'Rol',
  challenge_general1_content: 'Desarrollador Backend y Frontend',
  challenge_general2_title: 'Stack',
  challenge_general2_content:
    'Node.js, TypeScript, PostgreSQL, Redis, MQTT, Docker',
  challenge_general3_title: 'Despliegue',
  challenge_general3_content: 'VPS en línea',
  challenge_general4_title: 'Usuario',
  challenge_general4_content: 'Empresa de Acueducto',
  challenge_general5_title: 'Cliente',
  challenge_general5_content: 'Empresa de Integración Tecnológica',
  architecture_title:
    'Lógica de automatización y generación de reportes trabajando juntas',
  architecture_content: `Cada banco es un sistema autocontenido: su propio PC, su propia
  instancia de PostgreSQL, su propio broker MQTT, su propio PLC. Este aislamiento es
  deliberado — una falla o ventana de mantenimiento en un banco nunca bloquea a los
  demás. Dentro de cada banco, LabVIEW orquesta la secuencia de pruebas, lee
  el estado de sensores y actuadores del PLC a través de un servidor OPC, intercambia
  mensajes estructurados con la tablet del operador vía MQTT, persiste resultados en
  PostgreSQL, y genera el certificado de calibración a través de una plantilla de Excel
  que el líder del laboratorio mantiene directamente`,
  architecture_annotation:
    'Pruebas como composiciones de procesos reutilizables',
  key_decision_title:
    'Decisiones arquitectónicas clave — por qué el sistema está diseñado así',
  key_decision_item1_title: 'Bancos independientes y autocontenidos',
  key_decision_item1_summary:
    'Cada banco aloja su propia base de datos y broker — despliegue y mantenimiento uno a la vez.',
  key_decision_item1_content: `Desde el día uno, el plan era una suite — no un solo banco.
  Eso definió una decisión central: mantener cada banco completamente autocontenido, con su propio PC,
  instancia de PostgreSQL y broker MQTT. Una arquitectura centralizada — un servidor compartido,
  una base de datos común — habría sido más simple de construir, pero habría hecho que cada
  banco dependiera de la disponibilidad de ese servidor, y habría bloqueado la calibración cada vez que el
  PC de gestión entrara en mantenimiento. El aislamiento fue el costo asumido: las consultas entre bancos
  no son posibles directamente, pero el laboratorio no las necesita — los datos históricos viven en
  el sistema local de cada banco.`,
  key_decision_item2_title:
    'Procesos reutilizables en vez de lógica de prueba duplicada',
  key_decision_item2_summary:
    'Las pruebas son composiciones de procesos compartidos — la misma abstracción que mantiene el desarrollo ágil y propaga las correcciones.',
  key_decision_item2_content: `Al mapear las pruebas junto con el líder del laboratorio, las mismas formas seguían apareciendo
    en distintas pruebas: el mismo ciclo de flujo y lectura detenido por volumen, el
    mismo ciclo de presión, la misma preparación de purga y vacío. Modelé esa
    observación directamente en código — un catálogo de procesos reutilizables, y cada prueba
    declarada como una lista ordenada de procesos a ejecutar. Una clase base fija maneja la
    estructura general — preparación, ejecución, finalización, generación de documentos —
    mientras que la prueba hija define solo lo que ocurre dentro de la ejecución. Las nuevas pruebas son
    composiciones de procesos existentes cuando las normas lo permiten, y una corrección o
    mejora a un proceso se propaga a todas las pruebas que lo usan.`,
  key_decision_item3_title:
    'Una capa de abstracción de hardware con una implementación simulada',
  key_decision_item3_summary:
    'Una interfaz para el acceso a hardware — intercambiable entre el PLC real y una fuente emulada.',
  key_decision_item3_content: `La lógica de prueba nunca habla directamente con el PLC. Pasa por una Capa de
    Abstracción de Hardware que expone una sola interfaz, con dos implementaciones intercambiables
     detrás: una que lee y escribe a través del servidor OPC, y otra que emula
     las mismas señales — valores analógicos de sensores, sensores de nivel digitales, estados de bombas y válvulas
      — con entradas configurables. No es hardware-in-the-loop, pero es suficiente para
      desarrollar, depurar y validar nuevos procedimientos sin ocupar el banco físico,
      y para probar cambios de forma segura antes de desplegarlos a un banco en producción. La capa
      también abre un camino de migración limpio: reemplazar la implementación basada en OPC por una
      directa en Modbus no requeriría tocar la lógica de prueba.`,
  key_decision_item4_title: 'Plantillas de certificado propiedad del usuario',
  key_decision_item4_summary:
    'El software completa los números crudos; el líder del laboratorio es dueño del diseño y los cálculos del certificado.',
  key_decision_item4_content: `Los certificados de calibración cambian con el tiempo — se actualizan diseños, se refinan
    cálculos, nuevos requisitos regulatorios agregan campos. Desde el inicio, no quería
    estar en el medio de nada de eso. La generación de reportes en LabVIEW estaba sobre la mesa como la
    opción más directa, pero habría dejado el formato del certificado encerrado dentro del
    código. En cambio, el software escribe los datos crudos de la prueba en una hoja de un libro
    de Excel, y el líder del laboratorio es dueño de una segunda hoja que lee de la hoja cruda —
    fórmulas, diseño, logos, texto legal, redondeo, unidades, todo. Cuando la prueba
    termina, LabVIEW le pide a Excel mediante ActiveX que imprima esa hoja a PDF. El único
    contrato con el software es el nombre de la hoja y cuántas páginas imprimir —
    todo lo demás es de ellos.`,
  key_decision_item5_title:
    'Captura de lecturas desde cualquier punto del banco',
  key_decision_item5_summary:
    'El operador no camina hasta el PC — la tablet mantiene un canal MQTT bidireccional con LabVIEW.',
  key_decision_item5_content: `La captura de lecturas corre en un dispositivo portátil donde sea que esté el medidor en el banco —
    hoy, una unidad Zebra robusta con lector de código de barras integrado, pero el software funciona
    en cualquier dispositivo con navegador. El dispositivo habla MQTT directamente con un broker Mosquitto
    local en el PC del banco a través de WebSockets. LabVIEW publica el contexto de la prueba — medidores,
    posiciones, seriales, lecturas previas — y el navegador renderiza la página a partir de eso; las
    entradas del operador regresan por un tópico separado. Mosquitto es fácil de configurar en el
    PC del banco, y el modelo pub/sub deja espacio para agregar más consumidores en el futuro
    sin cambiar cómo publica LabVIEW.`,
  impact_item1_title:
    'Cuatro años en producción, dos nuevas líneas de servicio',
  impact_item1_content: `El cuello de botella manual desapareció. Las lecturas se capturan en un dispositivo portátil junto al
    medidor, no se transcriben después — así que los errores de transcripción que solían llegar al
    certificado quedan eliminados por diseño — y el certificado se genera automáticamente
    al final de cada corrida. Más allá de modernizar el proceso de calibración que ya
    existía, la suite habilitó dos líneas de servicio que el laboratorio no ofrecía antes:
    pruebas de homologación y calibración de medidores de gran diámetro. Cuatro años después, los
    tres bancos operan en paralelo a través de turnos bajo un modelo de soporte de aproximadamente
    diez intervenciones triviales por año, con un archivo de recuperación por corrida que permite
    reimprimir cualquier certificado si es necesario. El líder del laboratorio controla las plantillas
    de certificado directamente, así que los cambios de formato y regulatorios ocurren sin una nueva versión del software.`,
  impact_item2_title: '',
  impact_item2_content: '',
  impact_keypoint1_title: 'banco de micromedidores, expansión de línea doble',
  impact_keypoint1_content: '40 medidores de agua por lote',
  impact_keypoint2_title:
    'Pruebas especializadas para el servicio de homologación',
  impact_keypoint2_content: '8+ pruebas especiales',
  impact_keypoint3_title:
    'calibración de medidores de gran diámetro, nueva capacidad',
  impact_keypoint3_content: '6 macromedidores por lote',

  stack_title: 'Un stack industrial en sitio, una instancia por banco',
  stack_item1_title: 'RUNTIME Y ORQUESTACIÓN',
  stack_item1_chips: 'LabVIEW&LabVIEW OOP (LVOOP)&Máquinas de estado',
  stack_item2_title: 'PERSISTENCIA DE DATOS',
  stack_item2_chips: 'PostgreSQL 16&Libro de Excel (Plantillas)',
  stack_item3_title: 'INTEGRACIÓN DE HARDWARE',
  stack_item3_chips:
    'Capa de Abstracción de Hardware&OPC UA&PLCs Industriales&Sensores y Actuadores',
  stack_item4_title: 'INTERFAZ DEL OPERADOR',
  stack_item4_chips:
    'Servidor web local&MQTT (Mosquitto)&M2Mqtt (vía interop de .NET)',
  stack_item5_title: 'REPORTES Y SALIDA',
  stack_item5_chips: 'Excel + ActiveX&PDF&Impresora de etiquetas térmica',
  roadmap_title:
    'La suite funciona y el cliente no ha pedido evolución. Esta es una iniciativa que asumiría en mi propio tiempo',
  roadmap_item1_title: 'Integración directa con Modbus',
  roadmap_item1_content:
    'Reemplazar el servidor OPC licenciado con una implementación directa de Modbus detrás del HAL — sin cambios en la lógica de prueba',
  roadmap_item2_title: 'Reescritura portable a un stack web moderno',
  roadmap_item2_content: `Reconstruir la orquestación en Node.js + Electron. El objetivo principal es el despliegue en contenedores — un 
    docker-compose que levante la app, la base de datos y el broker por banco.`,
  gallery_item1: 'Pantalla de bienvenida del Software de Homologación',
  gallery_item2: 'Interfaz portátil para capturar lecturas',
  gallery_item3: 'Ejecución de una prueba en el software de Macromedidores',
  gallery_item4:
    'Prueba de error intrínseco corriendo en el banco de micromedidores',
  gallery_item5: 'Prueba especializada — presión estática',
  gallery_item6: 'Banco de micromedidores en operación',
}

export const es_management_lab_dict = {
  status: 'En Producción · 4 años',
  title: 'Sistema de Gestión para Laboratorio de Calibración',
  subtitle: `Plataforma de operaciones de escritorio para un laboratorio de calibración de medidores de agua — una
  reconstrucción en Node.js + Electron del sistema legado en LabVIEW.`,
  badges:
    'Electron&Node.js&TypeScript&React&PostgreSQL&ExcelJS&Impresión de Etiquetas Térmicas',
  hero_text: `Una plataforma de operaciones de escritorio para un laboratorio de calibración de medidores de agua,
  construida en Node.js y Electron para reemplazar una envejecida aplicación de gestión en LabVIEW que yo mismo había
  construido originalmente para el mismo laboratorio. Propuesta como parte de un contrato de actualización más amplio,
  la reconstrucción introdujo los reportes, métricas y generación de documentos que el sistema
  legado no podía ofrecer — y lleva 4 años en producción a través de 5
  expansiones del laboratorio.`,
  link1: 'Ver arquitectura',
  link2: 'Decisiones clave',
  link3: 'Suite de Bancos de Prueba',
  challenge_title:
    'Un banco de pruebas funcional no es un laboratorio funcional',
  challenge_content: `El primer sistema en LabVIEW que construí para este laboratorio hacía
  exactamente lo que pedía el contrato: operaba el banco de pruebas de medidores de agua y
  producía certificados de calibración. Funcionaba. Pero con los años, a medida que la operación
  del laboratorio maduraba, quedó claro que operar un banco de pruebas y operar
  un laboratorio son dos problemas distintos — y la aplicación en LabVIEW solo resolvía
  el primero.&El lado de gestión vivía en la misma interfaz de LabVIEW que el banco:
  funcional pero limitado. No había reportes adecuados para lotes de medidores calibrados,
  ni métricas operativas o estadísticas de uso, ni forma de generar
  los documentos de ingreso y entrega que los operadores seguían produciendo a mano. A medida que el laboratorio
  sumaba más clientes y más modelos de medidores, esas brechas pasaron de ser
  una molestia a fricción diaria.&Cuando llegó el siguiente contrato de expansión —
  dos nuevos bancos de prueba por construir — propuse reconstruir la capa de gestión
  desde cero sobre un stack moderno: una aplicación de escritorio en Node.js + Electron respaldada
  por PostgreSQL, corriendo en un PC de gestión dedicado por banco. El software del
  banco se mantendría en LabVIEW — esa era la herramienta correcta para el control de hardware.
  El software del laboratorio pasaría a un stack diseñado para el problema real: formularios,
  flujos de trabajo, datos, reportes y usuarios.`,
  challenge_content_item1_text1: 'Cliente',
  challenge_content_item1_text2: `Laboratorio de calibración de medidores de una empresa de acueducto en Colombia`,
  challenge_content_item2_text1: 'Stack legado',
  challenge_content_item2_text2:
    'LabVIEW · interfaz monolítica de banco y gestión',
  challenge_content_item3_text1: 'Capacidades faltantes',
  challenge_content_item3_text2:
    'Reportes por lote · métricas de uso · documentos de ingreso y entrega',
  challenge_content_item4_text1: 'En producción',
  challenge_content_item4_text2:
    '4 años · a través de 5 expansiones del laboratorio',
  challenge_content_item5_text1: 'Detonante',
  challenge_content_item5_text2:
    'Siguiente expansión del laboratorio — dos bancos nuevos en camino',
  challenge_general1_title: 'Rol',
  challenge_general1_content: 'Desarrollador Backend y Frontend',
  challenge_general2_title: 'Stack',
  challenge_general2_content:
    'Node.js, TypeScript, PostgreSQL, Redis, MQTT, Docker',
  challenge_general3_title: 'Despliegue',
  challenge_general3_content: 'VPS en línea',
  challenge_general4_title: 'Usuario',
  challenge_general4_content: 'Empresa de Acueducto',
  challenge_general5_title: 'Cliente',
  challenge_general5_content: 'Empresa de Integración Tecnológica',
  architecture_title:
    'Un backend local en Express con un cliente en React, empaquetado como app de escritorio',
  architecture_content: `La reconstrucción no es una app de Electron en el sentido de envoltorio de SPA.
  El proceso principal corre un backend en Node.js Express — endpoints REST,
  lógica de negocio, acceso a PostgreSQL, integraciones de impresora — y el renderer
  en React es una SPA que lo consume vía HTTP en localhost, de la misma forma en que
  consumiría un servidor remoto. IPC se reserva para lo que HTTP no puede hacer: diálogos
  nativos del sistema operativo para selección de archivos y carpetas. Electron empaqueta los dos en un
  solo binario de escritorio, que es lo que permite que todo se despliegue en sitio sin un
  servidor.`,
  architecture_annotation:
    'Pruebas como composiciones de procesos reutilizables',
  key_decision_title:
    'Decisiones arquitectónicas clave — por qué el sistema está diseñado así',
  key_decision_item1_title: 'Backend Express en el proceso principal',
  key_decision_item1_summary:
    'La lógica de negocio vive detrás de una API HTTP en localhost. IPC se usa solo para diálogos a nivel de sistema operativo.',
  key_decision_item1_content: `El proceso principal corre un backend en Node.js Express que expone endpoints
  REST para autenticación, lógica de negocio, acceso a PostgreSQL e integración de impresoras. El
  renderer en React consume esos endpoints vía HTTP en localhost, de la misma forma en que un cliente de navegador
  consume cualquier servidor remoto. IPC se usa solo para operaciones nativas que el contexto del navegador no puede
  realizar directamente — diálogos de selección de archivos y carpetas manejados por el sistema operativo. Mantener
  los dos canales separados según sus responsabilidades significa que el backend es autocontenido y
  podría correr fuera de Electron con cambios mínimos en la capa de transporte.`,
  key_decision_item2_title:
    'Worker Threads para reportes e impresión de etiquetas',
  key_decision_item2_summary:
    'Las tareas de larga duración se delegan fuera del hilo principal para que la API HTTP se mantenga responsiva.',
  key_decision_item2_content: `El backend en Express corre sobre el event loop de un solo hilo de Node,
  y su trabajo es responder peticiones sin demora. Dos operaciones en este sistema no encajan con esa
  restricción: generar reportes de Excel sobre rangos de medidores calibrados, lo cual implica lecturas
  a base de datos y construcción de libros fila por fila, y controlar impresoras térmicas de etiquetas por TCP con
  comandos ZPL o TSC, lo cual bloquea en I/O con hardware externo. Ambas se delegan a Worker
  Threads generados desde el proceso principal. La capa HTTP se mantiene libre para responder al renderer
  mientras estas tareas corren en paralelo, y los errores en los workers se propagan de vuelta mediante mensajes
  estructurados sin afectar la disponibilidad de la API.`,
  key_decision_item3_title: 'Electron como mecanismo de entrega',
  key_decision_item3_summary:
    'Elegido para empaquetar en sitio un backend de Node y un cliente de React en un solo binario instalable.',
  key_decision_item3_content: `El laboratorio opera en una red interna controlada con
  datos de calibración sensibles que no pueden salir del sitio. Una aplicación web remota no era
  una opción, y alojar un servidor local junto a un build de React separado habría significado instalar
  Node, dependencias y un servidor web en cada PC de gestión, y luego mantenerlos de forma independiente
  de la interfaz. Electron empaqueta el backend de Express y el cliente de React en un solo binario
  de escritorio que se instala como cualquier aplicación de Windows y no requiere un servidor separado. La elección
  es operativa más que arquitectónica — el backend interno es un servicio Node estándar, y
  Electron es el vehículo que le permite llegar a entornos en sitio con configuración mínima.`,
  key_decision_item4_title:
    'PostgreSQL compartido con separación de límites de escritura',
  key_decision_item4_summary:
    'El banco y el sistema de gestión comparten una base de datos pero nunca escriben en las mismas tablas; la coordinación vive en el esquema, no en el código.',
  key_decision_item4_content: `Cada banco de pruebas tiene una única base de datos PostgreSQL a la que se conectan tanto el
  software de banco en LabVIEW como el Sistema de Gestión en Node. En lugar de agregar una
  capa de coordinación entre los dos procesos, las responsabilidades de escritura se separan a nivel de
  esquema: el Sistema de Gestión escribe órdenes, medidores y usuarios; el banco escribe resultados de
  pruebas. Cada lado lee lo que necesita de las tablas del otro. Donde deben escribirse múltiples filas
  juntas — ingreso de órdenes, registro por lote de medidores — la operación corre dentro de una
  transacción para mantener la escritura atómica. El resultado es un límite de integración simple que permite
  a dos procesos independientes cooperar sin infraestructura de mensajería entre ellos.`,
  impact_item1_title: 'Cinco expansiones, un solo código base',
  impact_item1_content: `Cuatro años después de la reconstrucción, el Sistema de Gestión maneja el día a día
  del laboratorio: 7-8 operadores y el gerente del laboratorio trabajan con él a través de dos turnos, las órdenes se mueven
  desde el ingreso hasta el certificado a través del mismo flujo de trabajo, y los reportes que el sistema legado nunca
  produjo son ahora lo primero que el gerente abre para revisar rendimiento y backlog.&La
  ventana de reportes capturada — casi diecisiete mil medidores en diez semanas en un solo banco — es
  el tipo de volumen que la vieja interfaz de LabVIEW no podía haber mostrado. El sistema ha absorbido cinco
  expansiones del laboratorio sin una reescritura: dos bancos nuevos, cada uno con su propio despliegue, y tres
  expansiones de funcionalidad impulsadas por actualizaciones al software del banco. El cliente ha mantenido el producto
  en soporte continuo y sigue solicitando trabajo sobre él.`,
  impact_item2_title: '',
  impact_item2_content: '',
  impact_keypoint1_title:
    'Medidores calibrados en una sola ventana de 10 semanas (un banco)',
  impact_keypoint1_content: '16.838',
  impact_keypoint2_title: 'Años en producción, sin tiempo caído por errores',
  impact_keypoint2_content: '4 años',
  impact_keypoint3_title: 'Despliegues independientes en el laboratorio',
  impact_keypoint3_content: '3 instancias',
  impact_keypoint4_title: 'Modelos de medidores en el catálogo activo',
  impact_keypoint4_content: '30+ referencias',

  stack_title:
    'Un desarrollo individual, mantenido intencionalmente minimalista — librerías elegidas por estabilidad',
  stack_item1_title: 'RUNTIME Y EMPAQUETADO',
  stack_item1_chips: 'Electron&Node.js&TypeScript&electron-builder',
  stack_item2_title: 'BACKEND',
  stack_item2_chips: 'ExpressJS&Worker Threads&bcrypt',
  stack_item3_title: 'PERSISTENCIA DE DATOS',
  stack_item3_chips: 'PostgreSQL',
  stack_item4_title: 'INTERFAZ DEL OPERADOR',
  stack_item4_chips: 'React&React Router&Material UI',
  stack_item5_title: 'REPORTES Y SALIDA',
  stack_item5_chips: 'ExcelJS&ZPL / TSC',
  roadmap_title: `El sistema opera en un régimen estable y de bajo cambio — sin roadmap activo bajo contrato. Estas son las 
  áreas que revisaría por iniciativa propia si volviera a él hoy`,
  roadmap_item1_title: 'Pruebas automatizadas',
  roadmap_item1_content:
    'Una suite de Vitest alrededor de la lógica de negocio en los handlers de Express y los workers de generación de Excel.',
  roadmap_item2_title: 'Entrega de actualizaciones',
  roadmap_item2_content:
    'Reemplazar el reemplazo manual de app.asar con electron-updater contra un canal de release, para que los tres PCs obtengan actualizaciones por su cuenta.',
  gallery_item1:
    'Panel de administrador — órdenes activas, rendimiento de calibración y recordatorios de recalibración de sensores en una sola pantalla',
  gallery_item2:
    'Creación de órdenes — cliente, referencia de medidor del catálogo, y cantidades de muestras por tipo de prueba',
  gallery_item3:
    'Cola de trabajo activa — cada fila rastrea el progreso por tipo de prueba contra el total de muestras en la orden',
  gallery_item4:
    'Catálogo de referencias de medidores — las propiedades físicas y metrológicas son inmutables una vez guardadas',
  gallery_item5:
    'Módulo de reportes — 16,838 medidores calibrados en un solo banco durante una ventana de 10 semanas, desglosados por operador y referencia',
  gallery_item6:
    'Configuración del sitio — destinos de impresora y carpetas de red para certificados, respaldos y plantillas',
}

export const es_contact_dict = {
  title: 'Enviame un mensaje',
  name: `Nombre`,
  name_hint: 'Con quién estoy hablando',
  mail: `Correo`,
  mail_hint: 'Cómo te contactaré',
  message: `Mensaje`,
  message_hint: `Hablemos`,
  send: `Enviar mail`,
  reply: 'Usualmente respondo en las siguientes 24 horas',
}
