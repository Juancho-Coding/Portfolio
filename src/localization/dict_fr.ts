export const fr_nav_dict = {
  My_Portfolio: 'Mon Portfolio',
  Home: 'Accueil',
  About: 'À propos',
  Skills: 'Compétences',
  Projects: 'Projets',
  lets_talk: 'Discutons',
  section: 'Sections',
  pdf_popover: 'Télécharger le CV',
  message_404:
    'La page que vous recherchez a peut-être été supprimée, renommée ou est temporairement indisponible',
  message_404_button: "Retour à l'accueil",
  title_problem: 'Le Défi',
  title_architecture: 'Architecture',
  title_key_decisions: 'Décisions Clés',
  title_impact: 'Impact',
  title_stack: 'Stack et Déploiement',
  title_roadmap: 'Feuille de Route',
  live_demo: 'Démo en Direct',
  back_top: 'Retour en haut',
}

export const fr_presentation_dict = {
  greeting: 'Bonjour, je suis ',
  tagline: `Je connecte les mondes physique et numérique — en transformant les données de capteurs en décisions en temps réel grâce à
  des systèmes backend construits avec Node.js, TypeScript et des protocoles industriels`,
}

export const fr_about_dict = {
  about: 'À propos de moi',
  about_text1: `Je suis développeur backend avec plus de 6 ans d'expérience dans la création de logiciels reliant le matériel et les applications web. Je travaille avec Node.js, TypeScript et PostgreSQL pour
  exposer des données en temps réel via des API REST et des WebSockets — et je communique avec le monde physique grâce à des protocoles industriels comme MQTT, Modbus et OPC\n`,
  about_text2: `La plupart des développeurs backend n'ont jamais intégré un automate (PLC) ou un capteur. Cette combinaison de backend moderne et d'instrumentation est ce qui rend mon profil peu commun
  — et c'est mon atout en IoT, logiciels industriels et systèmes temps réel`,
}

export const fr_skills_dict = {
  skill: 'Compétences',
  database: 'Bases de Données',
  other: 'Autres',
  skill_title_backend: 'Backend & Runtime',
  skill_database: 'Base de Données & Cache',
  skill_realtime: 'Temps Réel & IoT',
}

export const fr_projects_dict = {
  project: 'Projets Phares',
  description: `Des systèmes réels que j'ai construits — des backends IoT en temps réel à l'intégration de matériel industriel`,
  button_live: 'Démo en Direct',
  button_github: 'GitHub',
  button_details: 'En Savoir Plus',
  project_iot: 'Tableau de Bord de Monitoring IoT en Temps Réel',
  project_iot_description: `Plateforme IoT multi-tenant pour le monitoring de capteurs en temps réel. Ingestion MQTT découplée, bus pub/sub avec Redis, tableau de bord React. Déployée sur un VPS Hetzner avec CI/CD automatisé`,
  project_dashboard_title: 'Système de Gestion pour Laboratoire de Calibration',
  project_dashboard_description: `Application de bureau qui gère l'ensemble du flux opérationnel d'un laboratoire de calibration — bons de travail, réception de compteurs étiquetés par code-barres, rapports Excel automatisés et métriques en temps réel — fonctionnant aux côtés de 3 bancs de calibration et de test. 4 ans en production, ayant évolué à travers 5 expansions du laboratoire`,
  project_calbench_title: "Suite de Calibration et de Test de Compteurs d'Eau",
  project_calbench_description: `3 systèmes qui contrôlent pompes, vannes et capteurs en temps réel pour automatiser la calibration de compteurs d'eau — éliminant les erreurs manuelles et permettant des tests que le laboratoire ne pouvait pas réaliser auparavant`,
  project_cinema_title: 'Système de Réservation de Cinéma',
  project_cinema_description: `Application full-stack de réservation de sièges avec mises à jour de disponibilité en temps réel via WebSockets, authentification JWT et livraison automatisée de billets par génération de PDF et e-mail.`,
}

export const fr_iot_system_dict = {
  status: 'En Production',
  title: 'Plateforme de Télémétrie IoT Multi-Tenant',
  subtitle:
    "Ingestion MQTT découplée avec un bus interne basé sur Redis, en production pour une entreprise publique de distribution d'eau",
  badges: 'Node.js&TypeScript&PostgreSQL&Redis&MQTT&Docker',
  link1: 'Démo en Direct',
  link2: 'Repo Backend',
  link3: 'Repo Frontend',
  hero_text:
    "Un backend de télémétrie IoT multi-tenant, conçu pour être réutilisé entre projets plutôt que reconstruit pour chaque client. Son premier déploiement en production a été livré par une entreprise d'ingénierie colombienne et alimente aujourd'hui le monitoring en temps réel de la qualité de l'eau pour une entreprise publique de distribution d'eau à Cundinamarca : 11 dispositifs de terrain mesurant le débit, la pression, la température, la turbidité et le pH, là où aucune télémétrie à distance n'existait auparavant.&La démo publique fonctionne sur une instance de démonstration séparée avec trois tenants simulés — santé, agrotech et pharmaceutique — afin que vous puissiez explorer l'expérience multi-tenant sans toucher aux données réelles des clients.",
  challenge_title:
    'Monitoring à distance continu pour une infrastructure de terrain distribuée',
  challenge_content: `L'entreprise d'ingénierie pour laquelle j'ai construit ceci avait besoin de collecter des données de capteurs de terrain déployés chez ses clients — une demande de plus en plus courante d'entreprises cherchant à centraliser la télémétrie IoT sans envoyer de personnel.&Avant ce système, ils dépendaient d'une plateforme IoT publique et gratuite capable de s'abonner à des sujets MQTT et d'afficher des relevés, et peu d'autre chose. Aucune couche d'administration, aucune organisation multi-projet, aucun contrôle sur la mise à l'échelle des signaux, aucune marge pour personnaliser le comportement par client.&Leur premier client sur la nouvelle plateforme, une entreprise publique de distribution d'eau à Cundinamarca, avait une lacune plus fondamentale : aucune télémétrie à distance du tout. Les conditions de qualité de l'eau sur leurs sites n'étaient connues que lorsque quelqu'un était physiquement présent — entre les visites, le système était une boîte noire. Les deux besoins étaient de nature différente. L'entreprise d'ingénierie avait besoin d'une plateforme avec laquelle grandir — multi-tenant, extensible, la sienne. L'entreprise de distribution d'eau avait besoin de ce qu'elle n'avait jamais eu : une visibilité à distance et continue de ce que voyaient ses capteurs.`,
  challenge_content_item1_text1: 'Client',
  challenge_content_item1_text2:
    "Entreprise d'Intégration, Entreprise de Distribution d'Eau",
  challenge_content_item2_text1: 'Besoin',
  challenge_content_item2_text2:
    'Infrastructure de télémétrie de terrain sans dépendance à un fournisseur',
  challenge_content_item3_text1: 'Capteurs',
  challenge_content_item3_text2: '60 capteurs répartis sur 11 dispositifs',
  challenge_content_item4_text1: 'Connectivité',
  challenge_content_item4_text2: 'Cellulaire',
  challenge_content_item5_text1: 'Fréquence de Rafraîchissement',
  challenge_content_item5_text2: 'Minimum 1 point par minute',
  challenge_general1_title: 'Rôle',
  challenge_general1_content: 'Développeur Backend et Frontend',
  challenge_general2_title: 'Stack',
  challenge_general2_content:
    'Node.js, TypeScript, PostgreSQL, Redis, MQTT, Docker',
  challenge_general3_title: 'Déploiement',
  challenge_general3_content: 'VPS en ligne',
  challenge_general4_title: 'Utilisateur',
  challenge_general4_content: "Entreprise de Distribution d'Eau",
  challenge_general5_title: 'Client',
  challenge_general5_content: "Entreprise d'Intégration Technologique",
  architecture_title:
    'Serveur et Worker indépendants pour collecter les données',
  architecture_content: `Le système fonctionne comme deux processus Node.js/TypeScript indépendants coordonnés via Redis. Un backend Express gère l'API REST, l'authentification et le CRUD sur le modèle de domaine (projets, dispositifs, capteurs, utilisateurs, modèles).&Un processus worker séparé gère MQTT : il s'abonne aux sujets du broker, applique une mise à l'échelle par capteur aux signaux bruts, et publie les résultats sur Redis. Les deux processus ne communiquent jamais directement. PostgreSQL est la source de vérité du domaine ; Redis transporte les éléments dynamiques — dernières lectures, métadonnées de capteurs mises en cache pour le worker, et le canal pub/sub qui relie le worker et l'API.&Aujourd'hui, le frontend interroge le backend toutes les 10 secondes pour les lectures du dispositif actif. Une couche de push Socket.IO est la prochaine étape, connectant les données en temps réel au navigateur afin que le tableau de bord reflète les nouvelles lectures au fur et à mesure qu'elles arrivent.`,
  key_decision_title:
    'Décisions architecturales clés — pourquoi le système est conçu ainsi',
  key_decision_item1_title: "Séparer le worker MQTT de l'API REST",
  key_decision_item1_summary:
    'Deux processus avec des cycles de vie différents, coordonnés via Redis.',
  key_decision_item1_content:
    "L'ingestion de télémétrie et la gestion des requêtes HTTP ont des cycles de vie et des modes de défaillance différents. Une déconnexion du broker ne devrait pas faire tomber l'API ; un déploiement du backend ne devrait pas perdre les données entrantes des capteurs. Diviser ces tâches en deux processus garde chaque responsabilité contenue et rend chacun déployable et redémarrable de manière indépendante.",
  key_decision_item2_title:
    "Pub/sub Redis comme bus interne, et non une file d'attente durable",
  key_decision_item2_summary:
    'La télémétrie éphémère privilégie la simplicité à la livraison garantie.',
  key_decision_item2_content:
    "Pour la télémétrie en temps réel, une lecture manquée compte moins que la complexité opérationnelle ajoutée. Le pub/sub de Redis offre aux deux processus un découplage propre sans introduire de message broker à exploiter, surveiller et sauvegarder. Si la charge de travail nécessitait un jour une livraison garantie — par exemple pour du commande-contrôle vers les dispositifs — une file d'attente durable serait la bonne voie de mise à niveau.",
  key_decision_item3_title:
    "Mise à l'échelle polynomiale par capteur dans le worker",
  key_decision_item3_summary:
    "Les valeurs brutes des capteurs deviennent des unités d'ingénierie au moment de l'ingestion.",
  key_decision_item3_content:
    "Les capteurs de terrain rapportent souvent des comptages bruts, des tensions ou des valeurs non mises à l'échelle qui nécessitent une courbe de calibration pour devenir des unités d'ingénierie significatives. Les coefficients de mise à l'échelle vivent par capteur dans PostgreSQL et sont mis en cache dans Redis, de sorte que le worker les applique au moment de l'ingestion sans aller-retour vers la base de données par message. Faire cela dans le worker — le seul processus qui voit le flux brut — signifie que les consommateurs en aval (l'API, le tableau de bord, toute intégration future) voient tous les mêmes valeurs corrigées. Cela signifie aussi que la dérive de calibration peut être corrigée en mettant à jour les coefficients dans la base de données plutôt qu'en touchant le matériel sur le terrain. C'est une habitude issue d'années de travail en instrumentation ; c'est rarement le premier réflexe d'un backend généraliste, mais c'est la différence entre un système qui affiche des nombres et un système qui affiche des mesures.",
  key_decision_item4_title:
    'Migrations de schéma explicites avec dbmate, et non un ORM',
  key_decision_item4_summary:
    "Migrations SQL versionnées, appliquées avant que l'application ne touche la base de données.",
  key_decision_item4_content:
    "Les tables ne sont jamais créées implicitement. Les migrations SQL versionnées se trouvent à la racine du dépôt et doivent être appliquées avant que l'application ou ses tests puissent communiquer avec une base de données. Un service de migration à usage unique dans Docker Compose s'exécute avant le démarrage du backend et du worker. PostgreSQL est la base de données d'exécution dans tous les environnements ; les implémentations SQLite restent pour la suite de tests unitaires. Garder la gestion du schéma en dehors du code applicatif rend les changements en production délibérés et révisables.",
  key_decision_item5_title: 'Une racine de composition unique pour le câblage',
  key_decision_item5_summary:
    'Un seul fichier où tout le graphe de dépendances est explicite.',
  key_decision_item5_content:
    "Tout le câblage des dépendances se fait dans un seul fichier. Pour une application de cette taille, un graphe d'objets explicite est plus facile à appréhender que l'indirection d'un framework, et tout changement apporté à une dépendance vit à un seul endroit plutôt que d'être dispersé entre décorateurs ou providers.",
  impact_item1_title: "Entreprise de Distribution d'Eau",
  impact_item1_content:
    "L'entreprise de distribution d'eau dispose désormais, pour la première fois, d'une visibilité continue et à distance de ses stations de pompage. Le débit, la pression, la température, la turbidité et le pH de 11 dispositifs de terrain sont disponibles dans un tableau de bord au lieu de nécessiter une visite sur site, ce qui constitue un changement fondamental dans la façon dont l'entreprise peut aborder ses opérations — même avant que la moindre amélioration spécifique de processus ne soit mesurée de leur côté.",
  impact_item2_title: "Entreprise d'Intégration en Ingénierie",
  impact_item2_content:
    "Pour l'entreprise d'ingénierie qui a commandé ce travail, le changement est stratégique. Elle est passée de la location d'un service IoT tiers limité à la possession d'une plateforme qu'elle contrôle de bout en bout : multi-tenant, extensible, et façonnée par sa propre feuille de route plutôt que celle d'un fournisseur. L'entreprise de distribution d'eau est le premier tenant en production ; la même plateforme est conçue pour intégrer des clients supplémentaires sans travail d'infrastructure additionnel.",
  impact_keypoint1_title: 'Dispositifs de Terrain Installés',
  impact_keypoint1_content: 11,
  impact_keypoint2_title: 'Types de Capteurs Mesurés',
  impact_keypoint2_content: '6+',
  impact_keypoint3_title: 'Tenant en production · plateforme prête pour plus',
  impact_keypoint3_content: 1,

  stack_title:
    'Chaque catégorie de la stack et comment elle arrive en production',
  stack_item1_title: 'RUNTIME',
  stack_item1_chips: 'Node.js 20+&TypeScript&Express 5',
  stack_item2_title: 'DONNÉES',
  stack_item2_chips: 'PostgreSQL 16&Redis 7&SQLite (tests)',
  stack_item3_title: 'INGESTION',
  stack_item3_chips: 'MQTT&Processus Worker Dédié',
  stack_item4_title: 'SCHÉMA et TESTS',
  stack_item4_chips: 'dbmate&Vitest&316 tests unitaires',
  stack_item5_title: 'CI / CD',
  stack_item5_chips:
    'GitHub Actions&Lint&Typecheck&Build multi-architecture&GHCR&Déploiement automatisé sur tag',
  stack_item6_title: 'HÉBERGEMENT',
  stack_item6_chips: 'VPS Hetzner&Docker Compose&Traefik avec TLS',
  roadmap_title: 'Ce qui arrive en développement',
  roadmap_item1_title: 'Push Socket.IO vers le navigateur',
  roadmap_item1_content:
    'Remplacer le polling actuel de 10 secondes par des mises à jour en temps réel via le canal Redis existant.',
  roadmap_item2_title: "Alarmes et seuils configurables par l'utilisateur",
  roadmap_item2_content:
    'Alertes par capteur avec règles et notifications configurables.',
  roadmap_item3_title: "Tests d'intégration du repository PostgreSQL",
  roadmap_item3_content:
    'Atteindre la couverture déjà en place pour les implémentations SQLite.',
}

export const fr_calibration_suite = {
  status: 'En Production · 4+ ans',
  title:
    "Suite de Bancs de Test Industriels pour la Calibration de Compteurs d'Eau",
  subtitle: `Trois bancs de test industriels qui ont transformé un processus de calibration papier-et-Excel en un flux de travail
    automatisé et certifié — et ont débloqué deux nouvelles lignes de service du laboratoire`,
  badges:
    "LabVIEW&PLC&OPC UA&PostgreSQL&MQTT&Impression d'Étiquettes Thermiques",
  hero_text: `Le laboratoire de calibration de compteurs d'une entreprise de distribution d'eau en Colombie avait besoin de remplacer un processus de calibration manuel, papier-et-Excel — et avait besoin de capacités qu'il n'avait jamais offertes auparavant. Sur quatre ans, j'ai conçu et construit à partir de zéro trois bancs de test intégrés à des automates (PLC), couvrant la calibration standard, les tests d'homologation spécialisés et les compteurs de grand diamètre — partageant tous une architecture de test réutilisable et basée sur des normes.`,
  link1: "Voir l'architecture",
  link2: 'Décisions clés',
  link3: 'Suite de Gestion',
  challenge_title: 'Trois Bancs de Test, Trois Problèmes Différents',
  challenge_content: `Lorsque le laboratoire de calibration m'a engagé,
  son processus standard de calibration de compteurs était entièrement manuel : les techniciens ouvraient et fermaient des vannes à la main pour diriger
  l'eau vers des réservoirs et à travers les compteurs, relevaient les jauges, et recopiaient les nombres sur papier — pour ensuite les transcrire dans
  un modèle Excel afin de produire un certificat. Le processus était lent, dépendait de l'attention du technicien pour
  éviter les erreurs de transcription, et n'avait aucune voie pour évoluer au-delà de ce qu'une personne pouvait physiquement lire et écrire en
  temps réel.&Deux autres lacunes n'avaient rien à voir avec la modernisation d'un processus existant — c'étaient des capacités que le
  laboratoire ne pouvait tout simplement pas encore offrir. Les tests d'homologation (durabilité, pression statique, erreur intrinsèque et autres
  tests de certification standardisés) et la calibration de compteurs de grand diamètre nécessitaient tous deux des bancs dédiés qui
  n'existaient pas. Sans eux, cette activité restait sur la table.&Sur quatre ans, j'ai construit trois systèmes de bancs de test
  indépendants pour combler ces lacunes : un banc de calibration automatisé pour les compteurs standards, un banc
  d'homologation pour les tests de certification spécialisés, et un banc de macro-compteurs pour les unités de grand diamètre. Chaque système
  s'intègre avec son propre ensemble d'automates industriels, de capteurs et d'actionneurs, et chacun automatise la même promesse
  centrale : guider le technicien à travers la procédure, capturer les lectures sans transcription manuelle, et
  générer le certificat automatiquement.`,
  challenge_content_item1_text1: 'Client',
  challenge_content_item1_text2: `Laboratoire de calibration de compteurs d'une entreprise de distribution d'eau en Colombie`,
  challenge_content_item2_text1: 'Systèmes',
  challenge_content_item2_text2: '3 systèmes de bancs de test indépendants',
  challenge_content_item3_text1: 'Capacité',
  challenge_content_item3_text2:
    'Calibration standard · Homologation (20 postes) · Macro-compteurs (6 postes)',
  challenge_content_item4_text1: 'Matériel',
  challenge_content_item4_text2:
    'Automates industriels, vannes, actionneurs, capteurs de débit, de température et de pression',
  challenge_content_item5_text1: 'Protocoles',
  challenge_content_item5_text2: 'OPC UA, MQTT',
  challenge_content_item6_text1: 'Chronologie',
  challenge_content_item6_text2: '4+ ans en production',
  challenge_general1_title: 'Rôle',
  challenge_general1_content: 'Développeur Backend et Frontend',
  challenge_general2_title: 'Stack',
  challenge_general2_content:
    'Node.js, TypeScript, PostgreSQL, Redis, MQTT, Docker',
  challenge_general3_title: 'Déploiement',
  challenge_general3_content: 'VPS en ligne',
  challenge_general4_title: 'Utilisateur',
  challenge_general4_content: "Entreprise de Distribution d'Eau",
  challenge_general5_title: 'Client',
  challenge_general5_content: "Entreprise d'Intégration Technologique",
  architecture_title:
    "Logique d'automatisation et génération de rapports travaillant ensemble",
  architecture_content: `Chaque banc est un système autonome : son propre PC, sa propre
  instance PostgreSQL, son propre broker MQTT, son propre automate. Cet isolement est
  délibéré — une panne ou une fenêtre de maintenance sur un banc ne bloque jamais les
  autres. À l'intérieur de chaque banc, LabVIEW orchestre la séquence de test, lit
  l'état des capteurs et actionneurs de l'automate via un serveur OPC, échange
  des messages structurés avec la tablette de l'opérateur via MQTT, persiste les résultats dans
  PostgreSQL, et génère le certificat de calibration via un modèle Excel
  que le responsable du laboratoire maintient directement`,
  architecture_annotation:
    'Les tests comme compositions de processus réutilisables',
  key_decision_title:
    'Décisions architecturales clés — pourquoi le système est conçu ainsi',
  key_decision_item1_title: 'Bancs indépendants et autonomes',
  key_decision_item1_summary:
    'Chaque banc héberge sa propre base de données et son propre broker — déploiement et maintenance un à la fois.',
  key_decision_item1_content: `Dès le premier jour, le plan était une suite — pas un banc unique.
  Cela a façonné une décision centrale : garder chaque banc entièrement autonome, avec son propre PC,
  sa propre instance PostgreSQL et son propre broker MQTT. Une architecture centralisée — un serveur partagé,
  une base de données commune — aurait été plus simple à construire, mais elle aurait rendu chaque
  banc dépendant de la disponibilité de ce serveur, et aurait bloqué la calibration chaque fois que le
  PC de gestion entrait en maintenance. L'isolement était le compromis : les requêtes entre bancs
  ne sont pas possibles directement, mais le laboratoire n'en a pas besoin — les données historiques vivent dans
  le système local de chaque banc.`,
  key_decision_item2_title:
    'Processus réutilisables plutôt que logique de test dupliquée',
  key_decision_item2_summary:
    'Les tests sont des compositions de processus partagés — la même abstraction qui garde le développement agile et propage les corrections.',
  key_decision_item2_content: `En cartographiant les tests avec le responsable du laboratoire, les mêmes formes continuaient à apparaître
    dans différents tests : la même boucle de flux et de lecture arrêtée par volume, le
    même cycle de pression, la même préparation de purge et de mise sous vide. J'ai modélisé cette
    observation directement dans le code — un catalogue de processus réutilisables, chaque test étant
    déclaré comme une liste ordonnée de processus à exécuter. Une classe de base fixe gère la
    structure environnante — préparation, exécution, finalisation, génération de documents —
    tandis que le test enfant définit uniquement ce qui s'exécute pendant l'exécution. Les nouveaux tests sont des
    compositions de processus existants lorsque les normes le permettent, et une correction ou
    une amélioration apportée à un processus se propage à tous les tests qui l'utilisent.`,
  key_decision_item3_title:
    "Une couche d'abstraction matérielle avec une implémentation de simulateur",
  key_decision_item3_summary:
    "Une seule interface pour l'accès au matériel — interchangeable entre l'automate réel et une source émulée.",
  key_decision_item3_content: `La logique de test ne parle jamais directement à l'automate. Elle passe par une Couche
    d'Abstraction Matérielle qui expose une seule interface, avec deux implémentations interchangeables
     derrière : l'une qui lit et écrit via le serveur OPC, et l'autre qui émule
     les mêmes signaux — valeurs analogiques de capteurs, capteurs de niveau numériques, états de pompes et de vannes
      — avec des entrées configurables. Ce n'est pas du hardware-in-the-loop, mais c'est suffisant pour
      développer, déboguer et valider de nouvelles procédures sans occuper le banc physique,
      et pour tester des changements en toute sécurité avant de les déployer sur un banc en production. La couche
      ouvre aussi une voie de migration propre : remplacer l'implémentation basée sur OPC par une
      implémentation Modbus directe ne nécessiterait pas de toucher à la logique de test.`,
  key_decision_item4_title: "Modèles de certificat détenus par l'utilisateur",
  key_decision_item4_summary:
    'Le logiciel remplit les nombres bruts ; le responsable du laboratoire possède la mise en page et les calculs du certificat.',
  key_decision_item4_content: `Les certificats de calibration changent avec le temps — les mises en page sont mises à jour, les calculs sont
    affinés, de nouvelles exigences réglementaires ajoutent des champs. Dès le départ, je ne voulais pas
    être impliqué dans tout cela. La génération de rapports LabVIEW était envisageable comme l'
    option la plus directe, mais elle aurait enfermé le format du certificat dans le
    code. À la place, le logiciel écrit les données brutes du test dans une feuille d'un classeur
    Excel, et le responsable du laboratoire possède une deuxième feuille qui lit depuis la feuille brute —
    formules, mise en page, logos, texte légal, arrondis, unités, tout. Lorsque le test
    se termine, LabVIEW demande à Excel via ActiveX d'imprimer cette feuille en PDF. Le seul
    contrat avec le logiciel est le nom de la feuille et le nombre de pages à imprimer —
    tout le reste leur appartient.`,
  key_decision_item5_title:
    "Capture de lectures depuis n'importe où sur le banc",
  key_decision_item5_summary:
    "L'opérateur ne marche pas jusqu'au PC — la tablette maintient un canal MQTT bidirectionnel avec LabVIEW.",
  key_decision_item5_content: `La capture de lectures s'exécute sur un appareil portable où que se trouve le compteur sur le banc —
    aujourd'hui, une unité Zebra robuste avec lecteur de code-barres intégré, mais le logiciel fonctionne
    sur tout appareil capable d'exécuter un navigateur. L'appareil parle MQTT directement à un broker Mosquitto
    local sur le PC du banc via WebSockets. LabVIEW publie le contexte du test — compteurs,
    positions, numéros de série, lectures précédentes — et le navigateur affiche la page à partir de cela ; les
    saisies de l'opérateur reviennent sur un sujet séparé. Mosquitto est facile à configurer sur le
    PC du banc, et le modèle pub/sub laisse de la place pour ajouter davantage de consommateurs à l'avenir
    sans changer la façon dont LabVIEW publie.`,
  impact_item1_title:
    'Quatre ans en production, deux nouvelles lignes de service',
  impact_item1_content: `Le goulot d'étranglement manuel a disparu. Les lectures sont capturées sur un appareil portable au
    niveau du compteur, non transcrites plus tard — les erreurs de transcription qui atteignaient autrefois le
    certificat sont donc éliminées par conception — et le certificat est généré automatiquement
    à la fin de chaque exécution. Au-delà de la modernisation du processus de calibration qui existait
    déjà, la suite a débloqué deux lignes de service que le laboratoire n'offrait pas auparavant :
    les tests d'homologation et la calibration de compteurs de grand diamètre. Quatre ans plus tard, les
    trois bancs fonctionnent côte à côte à travers les équipes sous un modèle de support d'environ
    dix interventions triviales par an, avec un fichier de récupération par exécution qui permet de
    réimprimer tout certificat si nécessaire. Le responsable du laboratoire contrôle les modèles
    de certificat directement, de sorte que les changements de format et réglementaires se produisent sans nouvelle version du logiciel.`,
  impact_item2_title: '',
  impact_item2_content: '',
  impact_keypoint1_title: 'banc de micro-compteurs, expansion à ligne doublée',
  impact_keypoint1_content: "40 compteurs d'eau par lot",
  impact_keypoint2_title: "Tests spécialisés pour le service d'homologation",
  impact_keypoint2_content: '8+ tests spéciaux',
  impact_keypoint3_title:
    'calibration de compteurs de grand diamètre, nouvelle capacité',
  impact_keypoint3_content: '6 macro-compteurs par lot',

  stack_title: 'Une stack industrielle sur site, une instance par banc',
  stack_item1_title: 'RUNTIME & ORCHESTRATION',
  stack_item1_chips: 'LabVIEW&LabVIEW OOP (LVOOP)&Machines à états',
  stack_item2_title: 'PERSISTANCE DES DONNÉES',
  stack_item2_chips: 'PostgreSQL 16&Classeur Excel (Modèles)',
  stack_item3_title: 'INTÉGRATION MATÉRIELLE',
  stack_item3_chips:
    "Couche d'Abstraction Matérielle&OPC UA&Automates Industriels&Capteurs et Actionneurs",
  stack_item4_title: 'INTERFACE OPÉRATEUR',
  stack_item4_chips:
    'Serveur web local&MQTT (Mosquitto)&M2Mqtt (via interop .NET)',
  stack_item5_title: 'RAPPORTS & SORTIE',
  stack_item5_chips: "Excel + ActiveX&PDF&Imprimante d'étiquettes thermique",
  roadmap_title:
    "La suite fonctionne et le client n'a pas demandé d'évolution. C'est une initiative que je prendrais sur mon propre temps",
  roadmap_item1_title: 'Intégration Modbus directe',
  roadmap_item1_content:
    'Remplacer le serveur OPC sous licence par une implémentation Modbus directe derrière le HAL — sans changement à la logique de test',
  roadmap_item2_title: 'Réécriture portable vers une stack web moderne',
  roadmap_item2_content:
    "Reconstruire l'orchestration en Node.js + Electron. L'objectif principal est le déploiement conteneurisé — un docker-compose démarrant l'application, la base de données et le broker par banc.",
  gallery_item1: "Écran d'accueil du Logiciel d'Homologation",
  gallery_item2: 'Interface portable pour capturer les lectures',
  gallery_item3: "Exécution d'un test dans le logiciel de Macro-compteurs",
  gallery_item4:
    "Test d'erreur intrinsèque en cours sur le banc de micro-compteurs",
  gallery_item5: 'Test spécialisé — pression statique',
  gallery_item6: 'Banc de micro-compteurs en fonctionnement',
}

export const fr_management_lab_dict = {
  status: 'En Production · 4 ans',
  title: 'Système de Gestion pour Laboratoire de Calibration',
  subtitle: `Plateforme d'opérations de bureau pour un laboratoire de calibration de compteurs d'eau — une
  reconstruction en Node.js + Electron de l'ancien système LabVIEW.`,
  badges:
    "Electron&Node.js&TypeScript&React&PostgreSQL&ExcelJS&Impression d'Étiquettes Thermiques",
  hero_text: `Une plateforme d'opérations de bureau pour un laboratoire de calibration de compteurs d'eau,
  construite en Node.js et Electron pour remplacer une application de gestion LabVIEW vieillissante que j'avais
  initialement construite pour le même laboratoire. Proposée dans le cadre d'un contrat de mise à niveau plus large,
  la reconstruction a introduit les rapports, métriques et génération de documents que l'ancien
  système ne pouvait pas fournir — et fonctionne en production depuis 4 ans à travers 5
  expansions du laboratoire.`,
  link1: "Voir l'architecture",
  link2: 'Décisions clés',
  link3: 'Suite de Bancs de Test',
  challenge_title:
    "Un banc de test fonctionnel n'est pas un laboratoire fonctionnel",
  challenge_content: `Le premier système LabVIEW que j'ai construit pour ce laboratoire faisait
  exactement ce que le contrat demandait : il faisait fonctionner le banc de test de compteurs d'eau et
  produisait des certificats de calibration. Ça marchait. Mais au fil des années, à mesure que l'opération
  du laboratoire mûrissait, il est devenu clair que faire fonctionner un banc de test et faire fonctionner
  un laboratoire sont deux problèmes différents — et l'application LabVIEW ne résolvait
  que le premier.&Le volet gestion vivait dans la même interface LabVIEW que le banc :
  fonctionnel mais limité. Il n'y avait pas de rapports adéquats pour les lots de compteurs calibrés,
  aucune métrique opérationnelle ou statistique d'utilisation, et aucun moyen de générer
  les documents de réception et de livraison que les opérateurs produisaient toujours à la main. À mesure que le laboratoire
  accueillait plus de clients et plus de modèles de compteurs, ces lacunes sont passées d'un
  inconvénient à une friction quotidienne.&Lorsque le contrat d'expansion suivant est arrivé —
  deux nouveaux bancs de test à construire — j'ai proposé de reconstruire la couche de gestion
  à partir de zéro sur une stack moderne : une application de bureau Node.js + Electron adossée
  à PostgreSQL, fonctionnant sur un PC de gestion dédié par banc. Le logiciel du
  banc resterait en LabVIEW — c'était le bon outil pour le contrôle matériel.
  Le logiciel du laboratoire passerait à une stack conçue pour le problème réel : formulaires,
  flux de travail, données, rapports et utilisateurs.`,
  challenge_content_item1_text1: 'Client',
  challenge_content_item1_text2: `Laboratoire de calibration de compteurs d'une entreprise de distribution d'eau en Colombie`,
  challenge_content_item2_text1: 'Stack héritée',
  challenge_content_item2_text2:
    'LabVIEW · interface monolithique banc + gestion',
  challenge_content_item3_text1: 'Capacités manquantes',
  challenge_content_item3_text2:
    "Rapports par lot · métriques d'utilisation · documents de réception et de livraison",
  challenge_content_item4_text1: 'En production',
  challenge_content_item4_text2:
    '4 ans · à travers 5 expansions du laboratoire',
  challenge_content_item5_text1: 'Déclencheur',
  challenge_content_item5_text2:
    'Prochaine expansion du laboratoire — deux nouveaux bancs en préparation',
  challenge_general1_title: 'Rôle',
  challenge_general1_content: 'Développeur Backend et Frontend',
  challenge_general2_title: 'Stack',
  challenge_general2_content:
    'Node.js, TypeScript, PostgreSQL, Redis, MQTT, Docker',
  challenge_general3_title: 'Déploiement',
  challenge_general3_content: 'VPS en ligne',
  challenge_general4_title: 'Utilisateur',
  challenge_general4_content: "Entreprise de Distribution d'Eau",
  challenge_general5_title: 'Client',
  challenge_general5_content: "Entreprise d'Intégration Technologique",
  architecture_title:
    'Un backend Express local avec un client React, packagé comme application de bureau',
  architecture_content: `La reconstruction n'est pas une application Electron au sens d'enveloppe de SPA.
  Le processus principal fait fonctionner un backend Node.js Express — points de terminaison REST,
  logique métier, accès PostgreSQL, intégrations d'imprimante — et le renderer
  React est une SPA qui le consomme via HTTP sur localhost, de la même manière qu'il
  consommerait un serveur distant. L'IPC est réservé à ce que HTTP ne peut pas faire : les boîtes de dialogue
  natives du système d'exploitation pour la sélection de fichiers et de dossiers. Electron packages les deux en un
  seul binaire de bureau, ce qui permet à l'ensemble d'être déployé sur site sans
  serveur.`,
  architecture_annotation:
    'Les tests comme compositions de processus réutilisables',
  key_decision_title:
    'Décisions architecturales clés — pourquoi le système est conçu ainsi',
  key_decision_item1_title: 'Backend Express dans le processus principal',
  key_decision_item1_summary:
    "La logique métier se trouve derrière une API HTTP sur localhost. L'IPC n'est utilisé que pour les boîtes de dialogue au niveau du système d'exploitation.",
  key_decision_item1_content: `Le processus principal fait fonctionner un backend Node.js Express qui expose des points de terminaison
  REST pour l'authentification, la logique métier, l'accès PostgreSQL et l'intégration d'imprimante. Le
  renderer React consomme ces points de terminaison via HTTP sur localhost, de la même manière qu'un client navigateur
  consomme n'importe quel serveur distant. L'IPC n'est utilisé que pour les opérations natives que le contexte du navigateur ne peut
  pas effectuer directement — boîtes de dialogue de sélection de fichiers et de dossiers gérées par le système d'exploitation. Garder
  les deux canaux séparés selon leurs responsabilités signifie que le backend est autonome et
  pourrait fonctionner en dehors d'Electron avec des changements minimes à la couche de transport.`,
  key_decision_item2_title:
    "Worker Threads pour les rapports et l'impression d'étiquettes",
  key_decision_item2_summary:
    "Les tâches de longue durée sont déchargées du thread principal afin que l'API HTTP reste réactive.",
  key_decision_item2_content: `Le backend Express fonctionne sur la boucle d'événements mono-thread de Node,
  et son travail est de servir les requêtes sans délai. Deux opérations dans ce système ne correspondent pas à cette
  contrainte : générer des rapports Excel sur des plages de compteurs calibrés, ce qui implique des
  lectures en base de données et une construction de classeur ligne par ligne, et piloter des imprimantes d'étiquettes thermiques via TCP avec
  des commandes ZPL ou TSC, ce qui bloque sur des E/S avec du matériel externe. Les deux sont délégués à des Worker
  Threads lancés depuis le processus principal. La couche HTTP reste libre de répondre au renderer
  pendant que ces tâches s'exécutent en parallèle, et les erreurs dans les workers remontent via des messages
  structurés sans affecter la disponibilité de l'API.`,
  key_decision_item3_title: 'Electron comme mécanisme de livraison',
  key_decision_item3_summary:
    "Choisi pour l'empaquetage sur site d'un backend Node et d'un client React en un seul binaire installable.",
  key_decision_item3_content: `Le laboratoire fonctionne sur un réseau interne contrôlé avec des
  données de calibration sensibles qui ne peuvent pas quitter le site. Une application web distante n'était pas une
  option, et héberger un serveur local à côté d'un build React séparé aurait signifié installer
  Node, les dépendances et un serveur web sur chaque PC de gestion, puis les maintenir indépendamment
  de l'interface. Electron packages le backend Express et le client React en un seul binaire
  de bureau qui s'installe comme n'importe quelle application Windows et ne nécessite pas de serveur séparé. Le choix
  est opérationnel plutôt qu'architectural — le backend interne est un service Node standard, et
  Electron est le véhicule qui lui permet d'atteindre des environnements sur site avec une configuration minimale.`,
  key_decision_item4_title:
    "PostgreSQL partagé avec séparation des limites d'écriture",
  key_decision_item4_summary:
    "Le banc et la gestion partagent une base de données mais n'écrivent jamais dans les mêmes tables ; la coordination vit dans le schéma, pas dans le code.",
  key_decision_item4_content: `Chaque banc de test possède une seule base de données PostgreSQL à laquelle se connectent à la fois le
  logiciel de banc LabVIEW et le Système de Gestion Node. Plutôt que d'ajouter une
  couche de coordination entre les deux processus, les responsabilités d'écriture sont séparées au niveau du
  schéma : le Système de Gestion écrit les commandes, compteurs et utilisateurs ; le banc écrit les résultats de
  test. Chaque côté lit ce dont il a besoin dans les tables de l'autre. Là où plusieurs lignes doivent être
  écrites ensemble — réception de commandes, enregistrement par lot de compteurs — l'opération s'exécute dans une
  transaction pour garder l'écriture atomique. Le résultat est une limite d'intégration simple qui permet
  à deux processus indépendants de coopérer sans infrastructure de messagerie entre eux.`,
  impact_item1_title: 'Cinq expansions, une seule base de code',
  impact_item1_content: `Quatre ans après la reconstruction, le Système de Gestion gère le quotidien
  du laboratoire : 7 à 8 opérateurs et le responsable du laboratoire travaillent avec lui à travers deux équipes, les commandes passent
  de la réception au certificat via le même flux de travail, et les rapports que l'ancien système n'a jamais
  produits sont désormais la première chose que le responsable ouvre pour vérifier le débit et le backlog.&La
  fenêtre de rapport capturée — près de dix-sept mille compteurs en dix semaines sur un seul banc — est
  le type de volume que l'ancienne interface LabVIEW n'aurait pas pu faire apparaître. Le système a absorbé cinq
  expansions du laboratoire sans réécriture : deux nouveaux bancs, chacun avec son propre déploiement, et trois
  expansions de fonctionnalités pilotées par des mises à niveau du logiciel de banc. Le client a maintenu le produit
  en support continu et continue de demander du travail dessus.`,
  impact_item2_title: '',
  impact_item2_content: '',
  impact_keypoint1_title:
    'Compteurs calibrés sur une seule fenêtre de 10 semaines (un banc)',
  impact_keypoint1_content: '16.838',
  impact_keypoint2_title:
    "Années en production, sans temps d'arrêt causé par des bugs",
  impact_keypoint2_content: '4 ans',
  impact_keypoint3_title: 'Déploiements indépendants à travers le laboratoire',
  impact_keypoint3_content: '3 instances',
  impact_keypoint4_title: 'Modèles de compteurs dans le catalogue actif',
  impact_keypoint4_content: '30+ références',

  stack_title:
    'Un développement solo, volontairement minimaliste — bibliothèques choisies pour leur stabilité',
  stack_item1_title: 'RUNTIME & EMPAQUETAGE',
  stack_item1_chips: 'Electron&Node.js&TypeScript&electron-builder',
  stack_item2_title: 'BACKEND',
  stack_item2_chips: 'ExpressJS&Worker Threads&bcrypt',
  stack_item3_title: 'PERSISTANCE DES DONNÉES',
  stack_item3_chips: 'PostgreSQL',
  stack_item4_title: 'INTERFACE OPÉRATEUR',
  stack_item4_chips: 'React&React Router&Material UI',
  stack_item5_title: 'RAPPORTS & SORTIE',
  stack_item5_chips: 'ExcelJS&ZPL / TSC',
  roadmap_title: `Le système fonctionne dans un régime stable et à faible changement — aucune feuille de route active sous contrat. Voici les domaines que je revisiterais de ma propre initiative si j'y revenais aujourd'hui`,
  roadmap_item1_title: 'Tests automatisés',
  roadmap_item1_content:
    'Une suite Vitest autour de la logique métier dans les handlers Express et les workers de génération Excel.',
  roadmap_item2_title: 'Livraison des mises à jour',
  roadmap_item2_content:
    "Remplacer le remplacement manuel de app.asar par electron-updater vers un canal de release, afin que les trois PC récupèrent les mises à jour d'eux-mêmes.",
  gallery_item1:
    'Tableau de bord administrateur — commandes actives, débit de calibration et rappels de recalibration de capteurs sur un seul écran',
  gallery_item2:
    "Création de commande — client, référence de compteur du catalogue, et quantités d'échantillons par type de test",
  gallery_item3:
    "File de travail active — chaque ligne suit la progression par type de test par rapport au total d'échantillons de la commande",
  gallery_item4:
    'Catalogue de références de compteurs — les propriétés physiques et métrologiques sont immuables une fois enregistrées',
  gallery_item5:
    'Module de rapports — 16 838 compteurs calibrés sur un seul banc pendant une fenêtre de 10 semaines, ventilés par opérateur et référence',
  gallery_item6:
    "Configuration du site — cibles d'imprimante et dossiers réseau pour les certificats, sauvegardes et modèles",
}

export const fr_contact_dict = {
  title: 'Envoyez-moi un message',
  name: `Nom`,
  name_hint: 'À qui je parle',
  mail: `E-mail`,
  mail_hint: 'Comment vous contacter',
  message: `Message`,
  message_hint: `Discutons`,
  send: `Envoyer le message`,
  reply: 'Je réponds généralement sous 24 heures',
}
