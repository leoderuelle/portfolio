/* ═══════════════════════════════════════════════════════════════
   PORTFOLIO PS3 XROSSMEDIABAR (XMB) — LÉO DERUELLE
   Contrôleur JavaScript Interactif avec panneau latéral en direct
   ═══════════════════════════════════════════════════════════════ */

; (function () {
  'use strict';

  /* ── THÈMES GRAPHIQUES COMMUTABLES ─────────────────────────── */
  const THEMES = [
    { id: 'blue', label: 'Bleu Nuit PS3 (Classique)' },
    { id: 'red', label: 'Rouge Rubis PlayStation' },
    { id: 'purple', label: 'Violet Nocturne' },
    { id: 'emerald', label: 'Vert Émeraude' }
  ];
  let currentThemeIndex = 0;
  let soundEnabled = true;

  /* ── DONNÉES DU PORTFOLIO (ENRICHIES ET DÉTAILLÉES) ─────────── */
  const CATEGORIES = [
    {
      id: 'user',
      label: 'Utilisateur',
      badge: 'UTILISATEUR',
      items: [
        {
          id: 'profile',
          label: 'Profil Principal',
          sublabel: 'Développement logiciel · Nouvelles technologies · Full-stack',
          icon: 'user',
          action: 'email',
          badge: 'MEDIA INFO · PROFIL PRINCIPAL',
          title: 'Léo Deruelle',
          subtitle: 'Développeur Informatique · BUT Informatique (IUT de Lens)',
          desc: `
            <p>Étudiant passionné en 2e année de BUT Informatique à l'IUT de Lens, je suis animé par le <strong>plaisir de programmer</strong>, de concevoir des architectures logicielles propres et d'explorer les <strong>nouvelles technologies</strong> (applications full-stack, intelligence artificielle, développement web et mobile).</p>
            <p>Mon approche du développement repose sur la clarté et l'efficacité : concevoir du code lisible, testable, modulaire et agréable à maintenir.</p>
            <p><strong>Objectif immédiat :</strong> Recherche d'un stage conventionné de 2e année (durée : <strong>8 à 10 semaines</strong>) dès <strong>avril 2027</strong> pour mettre mes compétences en pratique sur des projets d'ingénierie logicielle stimulants.</p>
          `,
          status: 'EN RECHERCHE DE STAGE (8 À 10 SEMAINES · AVRIL 2027) · OUVERT AUX PROJETS',
          tags: ['Programmation', 'Nouvelles Tech', 'C++', 'Java', 'Full-stack', 'Stage 8-10 sem.']
        },
        {
          id: 'cv',
          label: 'Télécharger le CV',
          sublabel: 'CV_Leo_Deruelle.pdf · Document PDF officiel (884 Ko)',
          icon: 'download',
          action: 'download',
          file: 'CV_Leo_Deruelle.pdf',
          badge: 'MEDIA INFO · DOCUMENT OFFICIEL',
          title: 'Curriculum Vitae',
          subtitle: 'CV_Leo_Deruelle.pdf · Format PDF standard',
          desc: `
            <p>Consultez ou téléchargez mon CV au format PDF standard. Il résume mon parcours académique à l'IUT de Lens, mes compétences techniques, mes projets significatifs ainsi que mes expériences associatives.</p>
            <p><strong>Détails du document :</strong> Version à jour pour l'année 2026-2027, optimisée pour les recruteurs et responsables d'équipes techniques.</p>
          `,
          status: 'DISPONIBLE AU TÉLÉCHARGEMENT IMMÉDIAT (884 KO)',
          tags: ['PDF', 'CV Officiel', 'Stage 8-10 sem.', 'Avril 2027', 'Permis B', 'IUT Lens'],
          actionText: 'Télécharger le CV (PDF)'
        },
        {
          id: 'about',
          label: 'À propos du site',
          sublabel: 'Conception web créative · Console & Diagnostic interactif',
          icon: 'info',
          action: 'features_modal',
          badge: 'MEDIA INFO · CONCEPT WEB',
          title: 'Philosophie du Portfolio',
          subtitle: 'Reproduction authentique de la PlayStation 3 XMB',
          desc: `
            <p>Ce portfolio a été conçu pour sortir des modèles génériques en recréant avec fidélité l'élégance et la fluidité de l'interface <strong>CrossMediaBar (XMB)</strong> de Sony.</p>
            <p><strong>Prouesse technique :</strong> Zéro framework (aucun React/Vue/Angular), zéro bibliothèque externe. Tout est propulsé par des standards web natifs : transitions CSS GPU, disposition géométrique en double axe, synthèse sonore Web Audio API et réactivité immédiate sans temps de chargement.</p>
            <p>Cliquez sur le bouton ci-dessous pour ouvrir la console interactive des fonctionnalités du système (tests audio, palettes de thèmes, métriques et raccourcis).</p>
          `,
          status: 'ARCHITECTURE WEB VANILLA · 0 DÉPENDANCE · CONSOLE SYSTÈME PRÊTE',
          tags: ['Vanilla JS', 'CSS3 Transforms', 'Web Audio API', 'Performance', 'No-Framework'],
          actionText: 'Explorer les fonctionnalités (Console XMB)'
        }
      ]
    },
    {
      id: 'projects',
      label: 'Jeux & Projets',
      badge: 'JEUX & PROJETS',
      items: [
        {
          id: 'proj_portfolio',
          label: 'Portfolio PS3 XMB',
          sublabel: 'Interface interactive & Web Audio · Vanilla JS',
          icon: 'disc',
          action: 'features_modal',
          image: 'img/projects/portfolio.svg',
          badge: 'MEDIA INFO · PROJET WEB CRÉATIF',
          title: 'Portfolio PlayStation 3 XMB',
          subtitle: 'Interface temps réel from scratch · Vanilla HTML/CSS/JS',
          desc: `
            <p>Hommage interactif à l'ergonomie légendaire de la PlayStation 3, ce portfolio prouve qu'une expérience riche, immersive et audacieuse peut être bâtie sans la lourdeur des frameworks modernes.</p>
            <p><strong>Défis techniques relevés :</strong></p>
            <ul>
              <li><strong>Axe XMB dynamique :</strong> Alignement géométrique bidirectionnel calculé au pixel près entre les catégories horizontales et les sous-éléments verticaux.</li>
              <li><strong>Panneau latéral en direct :</strong> Affichage synchronisé immédiat des détails et des cartes visuelles au clic ou à la navigation.</li>
              <li><strong>Synthèse audio native :</strong> Moteur audio Web Audio API générant les bips de navigation par oscillateurs sinusoïdaux sans aucun fichier audio lourd.</li>
              <li><strong>Navigation hybride :</strong> Contrôles complets au clavier (flèches, X, O), à la souris et par molette de scroll verticale.</li>
            </ul>
          `,
          status: 'RÉALISATION 2026 · EN LIGNE & ACTIF',
          tags: ['Vanilla JS', 'CSS3 Blur', 'Web Audio API', 'UI/UX PS3', '60 FPS', 'Responsive'],
          actionText: 'Tester les fonctionnalités (Console)'
        },
        {
          id: 'proj_chip8',
          label: 'Émulateur CHIP-8',
          sublabel: 'Architecture CPU & Machine virtuelle · C++17 & SDL2',
          icon: 'disc',
          action: 'link',
          url: 'https://github.com/leoderuelle/CHIP8-emulator',
          image: 'img/projects/chip8.svg',
          badge: 'MEDIA INFO · ÉMULATION & BAS NIVEAU',
          title: 'Émulateur CHIP-8',
          subtitle: 'Cycle CPU, décodage d\'opcodes & rendu graphique SDL2',
          desc: `
            <p>Conception et implémentation complète from scratch d'un interpréteur et émulateur pour la machine virtuelle rétro <strong>CHIP-8 en C++ moderne</strong>.</p>
            <p><strong>Fonctionnement interne :</strong></p>
            <ul>
              <li>Reproduction du cycle d'horloge CPU (fetch, decode, execute) cadencé avec précision.</li>
              <li>Décodage bitwise des 35 opcodes (branchements conditionnels, opérations logiques et arithmétiques ALU, manipulation des registres V0 à VF).</li>
              <li>Gestion de la mémoire linéaire (4 Ko), de la pile d'appels (Call Stack), et des registres d'adresses.</li>
              <li>Émulation des timers matériels à 60 Hz et pipeline d'affichage graphique SDL2 sur matrice 64x32 pixels.</li>
            </ul>
          `,
          status: 'PROJET TERMINÉ · CODE SOURCE C++ VÉRIFIÉ',
          tags: ['C++17', 'SDL2', 'Émulation', 'Architecture CPU', 'Bitwise', 'Bas Niveau'],
          actionText: 'Voir sur GitHub (@leoderuelle)'
        },
        {
          id: 'proj_dailyfive',
          label: 'Daily Five (En cours)',
          sublabel: 'Hub d\'information matinal · React Native & APIs',
          icon: 'disc',
          action: 'info',
          image: 'img/projects/dailyfive.svg',
          badge: 'MEDIA INFO · APPLICATION MOBILE',
          title: 'Daily Five',
          subtitle: 'Application mobile matinale · React Native & APIs REST',
          desc: `
            <p>Application mobile conçue pour optimiser et simplifier les 15 premières minutes de la journée en regroupant l'ensemble des informations utiles au réveil.</p>
            <p><strong>Modules intégrés :</strong></p>
            <ul>
              <li><strong>Résumé intelligent :</strong> Synthèse des e-mails prioritaires pour éviter la surcharge cognitive du matin.</li>
              <li><strong>Veille technologique :</strong> Agrégation d'articles informatiques et actualités tech pertinentes.</li>
              <li><strong>Pratique & Quotidien :</strong> Synchronisation de l'emploi du temps, météo locale et alertes de trafic / transports en commun en direct.</li>
            </ul>
          `,
          status: 'PROJET EN COURS DE DÉVELOPPEMENT · 2026',
          tags: ['React Native', 'Mobile', 'JavaScript', 'APIs REST', 'Gestion d\'état'],
          noticeText: '(en cours de développement)'
        },
        {
          id: 'proj_fractalens',
          label: 'Fractalens',
          sublabel: 'Calcul complexe & fractales · Bibliothèque Java',
          icon: 'disc',
          action: 'link',
          url: 'https://github.com/leoderuelle/Fractalens',
          image: 'img/projects/fractalens.svg',
          badge: 'MEDIA INFO · ALGORITHMIQUE & JAVA',
          title: 'Fractalens',
          subtitle: 'Générateur haute performance de fractales en Java',
          desc: `
            <p>Développement d'une bibliothèque logicielle en <strong>Java</strong> dédiée au calcul dynamique et à l'exploration visuelle de structures fractales complexes (ensembles de Mandelbrot, ensembles de Julia).</p>
            <p><strong>Défis algorithmiques :</strong></p>
            <ul>
              <li>Calculs itératifs dans le plan complexe avec algorithme de lissage de coloration pour éviter les effets d'escalier.</li>
              <li>Moteur de zoom profond et rotations dynamiques sans ralentissement du thread principal.</li>
              <li>Architecture modulaire orientée objet facilitant l'implémentation de nouvelles équations fractales.</li>
            </ul>
          `,
          status: 'RÉALISÉ DANS LE CADRE DU BUT INFORMATIQUE',
          tags: ['Java', 'Mathématiques', 'Nombres Complexes', 'POO Avancée', 'Optimisation'],
          actionText: 'Voir sur GitHub (@leoderuelle)'
        },
        {
          id: 'proj_pacman',
          label: 'Pacman JavaFX',
          sublabel: 'Jeu vidéo d\'arcade complet · Java & JavaFX',
          icon: 'disc',
          action: 'info',
          image: 'img/projects/pacman.svg',
          badge: 'MEDIA INFO · JEU VIDÉO',
          title: 'Pacman JavaFX',
          subtitle: 'Recréation du classique d\'arcade avec JavaFX',
          desc: `
            <p>Recréation fidèle du jeu d'arcade historique Pacman en Java, mettant l'accent sur les patrons de conception (Design Patterns) et la programmation événementielle.</p>
            <p><strong>Spécificités logicielles :</strong></p>
            <ul>
              <li>Boucle de jeu (Game Loop) fluide avec synchronisation temporelle rigoureuse par tick.</li>
              <li>Intelligence artificielle des fantômes reproduisant les comportements originaux (modes chasse, dispersion, fuite).</li>
              <li>Gestion des collisions tuiles/entités, animation des sprites et gestion de l'état de la partie (State Pattern).</li>
            </ul>
          `,
          status: 'RÉALISÉ À L\'IUT DE LENS · CODE FINALISÉ',
          tags: ['Java', 'JavaFX', 'Game Loop', 'IA Fantômes', 'Design Patterns']
        }
      ]
    },
    {
      id: 'settings',
      label: 'Paramètres Système',
      badge: 'COMPÉTENCES',
      items: [
        {
          id: 'skill_lang',
          label: 'Langages de programmation',
          sublabel: 'C++ · Java · Python · PHP · Bash · HTML/CSS',
          icon: 'sliders',
          action: 'info',
          badge: 'MEDIA INFO · COMPÉTENCES TECHNIQUES',
          title: 'Langages de Programmation',
          subtitle: 'Fondations solides du bas niveau au web applicatif',
          desc: `
            <p>Mes compétences s'articulent autour de langages complémentaires, chacun répondant à des exigences techniques précises :</p>
            <ul>
              <li><strong>C++ (C++17) :</strong> Programmation système, gestion rigoureuse de la mémoire manuelle, manipulation de pointeurs, utilisation de SDL2 et émulation matérielle.</li>
              <li><strong>Java :</strong> Solide maîtrise de la programmation orientée objet, héritage, polymorphisme, streams, interfaces graphiques JavaFX et algorithmique.</li>
              <li><strong>Python :</strong> Écriture rapide de scripts utilitaires, traitement de données et apprentissage des fondamentaux de l'Intelligence Artificielle.</li>
              <li><strong>Bash / Linux :</strong> Scripting shell, automatisation de tâches et navigation quotidienne dans le terminal.</li>
              <li><strong>PHP & Web :</strong> Développement back-end, requêtage et intégration sémantique HTML5/CSS3.</li>
            </ul>
          `,
          status: 'ACQUISITION BUT INFORMATIQUE (IUT DE LENS) & PRATIQUE PERSONNELLE',
          tags: ['C++', 'Java', 'Python', 'PHP', 'Bash', 'HTML/CSS', 'POO']
        },
        {
          id: 'skill_frameworks',
          label: 'Frameworks & Données',
          sublabel: 'Laravel · React Native · PostgreSQL · JavaFX',
          icon: 'sliders',
          action: 'info',
          badge: 'MEDIA INFO · FRAMEWORKS & DATABASES',
          title: 'Frameworks & Bases de Données',
          subtitle: 'Architectures modernes, mobile et persistance',
          desc: `
            <p>Conception d'applications complètes combinant interfaces modernes et persistance sécurisée :</p>
            <ul>
              <li><strong>Laravel (PHP) :</strong> Architecture Modèle-Vue-Contrôleur (MVC), migrations de schéma, ORM Eloquent, routes sécurisées et conception d'APIs REST.</li>
              <li><strong>React Native :</strong> Développement d'applications mobiles cross-platform pour Android et iOS (projet Daily Five).</li>
              <li><strong>PostgreSQL :</strong> Conception de bases relationnelles normalisées, écriture de requêtes SQL optimisées, jointures, triggers et contraintes d'intégrité.</li>
              <li><strong>JavaFX & SDL2 :</strong> Création d'interfaces logicielles desktop réactives et rendu graphique temps réel.</li>
            </ul>
          `,
          status: 'EXPÉRIENCE PROJETS WEB, MOBILE ET PERSISTANCE',
          tags: ['Laravel', 'PostgreSQL', 'React Native', 'JavaFX', 'SDL2', 'SQL']
        },
        {
          id: 'skill_tools',
          label: 'Outils & Environnements',
          sublabel: 'Git / GitHub · Linux / Bash · Suite JetBrains · VS Code',
          icon: 'sliders',
          action: 'info',
          badge: 'MEDIA INFO · ENVIRONNEMENT & WORKFLOW',
          title: 'Outils, Méthodes & DevOps',
          subtitle: 'Efficacité, collaboration et rigueur de production',
          desc: `
            <p>La qualité d'un développeur passe également par sa maîtrise des outils professionnels :</p>
            <ul>
              <li><strong>Git & GitHub :</strong> Gestion de versions rigoureuse, branches de fonctionnalités, commits explicites, revues de code et pull requests.</li>
              <li><strong>Linux :</strong> Environnement de travail de prédilection au quotidien, scripts Bash, gestion des processus, permissions et paquetages.</li>
              <li><strong>Environnements de développement :</strong> Utilisation avancée des IDEs JetBrains (IntelliJ IDEA, CLion), de Visual Studio Code et d'Eclipse.</li>
            </ul>
          `,
          status: 'WORKFLOW LINUX, GIT & JETBRAINS MAÎTRISÉ',
          tags: ['Git', 'GitHub', 'Linux', 'Bash', 'JetBrains', 'VS Code', 'Eclipse']
        },
        {
          id: 'skill_soft',
          label: 'Langues & Soft Skills',
          sublabel: 'Anglais B2 · Membre BDE · Animateur BAFA',
          icon: 'sliders',
          action: 'info',
          badge: 'MEDIA INFO · COMPÉTENCES RELATIONNELLES',
          title: 'Soft Skills & Expériences Humaines',
          subtitle: 'Sens des responsabilités, communication et travail d\'équipe',
          desc: `
            <p>Au-delà de la technique, mes engagements associatifs et d'animation ont développé des qualités essentielles en entreprise :</p>
            <ul>
              <li><strong>Membre du BDE (Bureau Des Étudiants - IUT de Lens) :</strong> Organisation d'événements pour plusieurs centaines d'étudiants, coordination d'équipes de bénévoles, gestion du planning et communication sur les réseaux sociaux.</li>
              <li><strong>Animateur BAFA (TernoisCom) :</strong> Rigueur documentaire, encadrement de groupes, écoute active, clarté dans la transmission des informations aux familles et gestion des imprévus.</li>
              <li><strong>Anglais :</strong> Niveau B2 certifié, permettant de lire sans difficulté la documentation technique, d'écrire du code commenté en anglais et d'échanger au sein d'équipes internationales.</li>
            </ul>
          `,
          status: 'ENGAGEMENT ASSOCIATIF ACTIF & DIPLÔME BAFA',
          tags: ['Anglais B2', 'BDE IUT Lens', 'BAFA', 'Coordination', 'Communication', 'Rigueur']
        },
        {
          id: 'theme_setting',
          label: "Thème d'affichage XMB",
          sublabel: 'Bleu Nuit · Cliquez pour changer la palette de couleurs',
          icon: 'sliders',
          action: 'theme_cycle',
          badge: 'MEDIA INFO · PERSONNALISATION',
          title: "Thème d'affichage XMB",
          subtitle: 'Palette graphique interactive en temps réel',
          desc: `
            <p>Personnalisez l'ambiance lumineuse du portfolio en temps réel. 4 palettes de couleurs sont inspirées de l'histoire et des variations de consoles PlayStation :</p>
            <ul>
              <li><strong>Bleu Nuit PS3 :</strong> L'ambiance d'origine classique et apaisante.</li>
              <li><strong>Rouge Rubis :</strong> Un contraste chaud et dynamique.</li>
              <li><strong>Violet Nocturne :</strong> Un dégradé profond et élégant.</li>
              <li><strong>Vert Émeraude :</strong> Une teinte moderne et feutrée.</li>
            </ul>
          `,
          status: 'THÈME ACTUEL : BLEU NUIT PS3 (CLASSIQUE)',
          tags: ['Bleu Nuit', 'Rouge Rubis', 'Violet', 'Émeraude']
        }
      ]
    },
    {
      id: 'trophies',
      label: 'Trophées',
      badge: 'PARCOURS & EXPÉRIENCES',
      items: [
        {
          id: 'exp_but',
          label: 'BUT Informatique',
          sublabel: 'IUT de Lens · En cours (Depuis 2025)',
          icon: 'trophy',
          action: 'info',
          badge: 'MEDIA INFO · FORMATION ACADÉMIQUE',
          title: 'BUT Informatique (Bac+3)',
          subtitle: 'IUT de Lens · Université d\'Artois (Depuis 2025)',
          desc: `
            <p>Actuellement en <strong>2e année de Bachelor Universitaire de Technologie (BUT) Informatique</strong> à l'IUT de Lens.</p>
            <p>Formation universitaire d'excellence couvrant l'ensemble du cycle logiciel :</p>
            <ul>
              <li><strong>Développement & Algorithmique :</strong> Programmation orientée objet avancée (Java, C++), structures de données, patrons de conception (Design Patterns).</li>
              <li><strong>Web & Systèmes :</strong> Applications full-stack (PHP/Laravel, JavaScript/TypeScript), administration système Linux et réseaux.</li>
              <li><strong>Persistance & Méthodes :</strong> Bases de données relationnelles avancées (PostgreSQL), gestion de projet agile (Scrum).</li>
            </ul>
            <p><strong>Objectif immédiat :</strong> Recherche d'un stage conventionné de <strong>8 à 10 semaines</strong> dès <strong>avril 2027</strong>.</p>
          `,
          status: 'STAGE RECHERCHÉ : 8 À 10 SEMAINES DÈS AVRIL 2027',
          tags: ['BUT Informatique', 'IUT de Lens', 'Bac+3', 'Stage 8 à 10 semaines']
        },
        {
          id: 'exp_bac',
          label: 'Baccalauréat Technologique',
          sublabel: 'Lycée Albert Châtelet · Option SIN (2025)',
          icon: 'trophy',
          action: 'info',
          badge: 'MEDIA INFO · DIPLÔME',
          title: 'Baccalauréat STI2D',
          subtitle: 'Lycée Albert Châtelet · Saint-Pol-sur-Ternoise (Obtenu en 2025)',
          desc: `
            <p>Diplôme du <strong>Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable (STI2D)</strong> avec spécialité <strong>Systèmes d'Information et Numérique (SIN)</strong>.</p>
            <p><strong>Enseignements et acquis fondamentaux :</strong></p>
            <ul>
              <li>Logique booléenne, électronique numérique et architecture des systèmes.</li>
              <li>Initiation concrète à la programmation (C/C++, Python) et au pilotage de microcontrôleurs embarqués.</li>
              <li>Gestion de projet technique avec respect d'un cahier des charges et soutenance de projet.</li>
            </ul>
          `,
          status: 'DIPLÔME OFFICIEL OBTENU EN 2025',
          tags: ['Bac STI2D', 'Spécialité SIN', 'Lycée Châtelet', 'Numérique']
        },
        {
          id: 'exp_bde',
          label: 'Membre du BDE',
          sublabel: 'Bureau Des Étudiants · IUT de Lens (Depuis juin 2026)',
          icon: 'trophy',
          action: 'info',
          badge: 'MEDIA INFO · EXPÉRIENCE ASSOCIATIVE',
          title: 'Membre du BDE (Bureau Des Étudiants)',
          subtitle: 'IUT de Lens · Événementiel & Communication (Depuis juin 2026)',
          desc: `
            <p>Membre actif et engagé au sein de l'association étudiante de l'IUT de Lens, fédérant la vie étudiante du campus.</p>
            <p><strong>Missions et responsabilités :</strong></p>
            <ul>
              <li><strong>Organisation d'événements :</strong> Planification logistique, gestion des plannings, répartition des tâches et coordination des équipes de bénévoles.</li>
              <li><strong>Communication interne & externe :</strong> Conception de supports graphiques (affiches, publications), animation des réseaux sociaux.</li>
              <li><strong>Esprit d'équipe :</strong> Collaboration étroite avec les équipes pédagogiques, administratives et les prestataires extérieurs.</li>
            </ul>
          `,
          status: 'MANDAT EN COURS · ENGAGEMENT ACTIF',
          tags: ['BDE IUT Lens', 'Coordination', 'Communication', 'Événementiel', 'Leadership']
        },
        {
          id: 'exp_bafa',
          label: 'Animateur BAFA',
          sublabel: 'TernoisCom · Saint-Pol-sur-Ternoise (Depuis 2024)',
          icon: 'trophy',
          action: 'info',
          badge: 'MEDIA INFO · EXPÉRIENCE PROFESSIONNELLE',
          title: 'Animateur BAFA Diplômé',
          subtitle: 'TernoisCom · Accueils de loisirs (Depuis 2024)',
          desc: `
            <p>Titulaire du <strong>Brevet d'Aptitude aux Fonctions d'Animateur (BAFA)</strong>, j'encadre des groupes d'enfants et d'adolescents en accueils de loisirs depuis 2024.</p>
            <p><strong>Compétences professionnelles mises en œuvre :</strong></p>
            <ul>
              <li><strong>Rigueur et gestion documentaire :</strong> Tenue rigoureuse des registres de présence, respect des normes de sécurité et préparation logistique des activités.</li>
              <li><strong>Communication & Clarté :</strong> Transmission synthétique et rassurante des informations auprès des familles.</li>
              <li><strong>Sens des responsabilités :</strong> Coordination continue avec l'équipe pédagogique et adaptation réactive aux imprévus.</li>
            </ul>
          `,
          status: 'DIPLÔME BAFA · EXPÉRIENCE CONTINUE DEPUIS 2024',
          tags: ['BAFA', 'TernoisCom', 'Encadrement', 'Rigueur', 'Sens des responsabilités']
        }
      ]
    },
    {
      id: 'passions',
      label: 'Passions',
      badge: 'CENTRES D\'INTÉRÊT',
      items: [
        {
          id: 'passion_gaming',
          label: 'Jeux Vidéo',
          sublabel: 'Univers immersifs · Game design · Gameplay & Compétition',
          icon: 'gamepad',
          action: 'info',
          image: 'img/passions/gaming.svg',
          badge: 'MEDIA INFO · PASSION & CULTURE',
          title: 'Jeux Vidéo',
          subtitle: 'Immersion, mécaniques de jeu et univers interactifs',
          desc: `
            <p>Passionné de <strong>jeux vidéo</strong> depuis toujours, j'apprécie ce média pour sa capacité unique à allier narration, créativité artistique et défis interactifs stimulants.</p>
            <p><strong>Ce qui me captive dans le jeu vidéo :</strong></p>
            <ul>
              <li><strong>Gameplay & Mécaniques :</strong> L'équilibrage des systèmes de jeu, la précision de la prise en main, le game design et la fluidité de l'expérience joueur.</li>
              <li><strong>Univers & Immersion :</strong> La richesse des directions artistiques, la conception de mondes interactifs et le plaisir d'explorer des atmosphères soignées.</li>
              <li><strong>Diversité des genres :</strong> Des aventures immersives aux titres compétitifs, indépendants ou multijoueurs, chaque univers apporte son lot de créativité.</li>
            </ul>
          `,
          status: 'PASSION DE TOUJOURS · CULTURE DU JEU VIDÉO & GAME DESIGN',
          tags: ['Jeux Vidéo', 'Gameplay', 'Game Design', 'Immersion', 'Expérience Joueur']
        },
        {
          id: 'passion_ai',
          label: 'Intelligence Artificielle',
          sublabel: 'Veille technologique · LLMs · Agents autonomes · Vision',
          icon: 'spark',
          action: 'info',
          image: 'img/passions/ai.svg',
          badge: 'MEDIA INFO · VEILLE & EXPLORATION',
          title: 'Intelligence Artificielle & Nouvelles Tech',
          subtitle: 'Comprendre et dompter les modèles de nouvelle génération',
          desc: `
            <p>Je consacre une part importante de mon temps libre à la <strong>veille technologique</strong> active autour des avancées rapides de l'Intelligence Artificielle générative et de l'ingénierie des invites (Prompt Engineering).</p>
            <p><strong>Axes d'expérimentation :</strong></p>
            <ul>
              <li><strong>Modèles de langage (LLMs) :</strong> Intégration d'APIs de pointe, développement d'agents autonomes et chaînage de tâches complexes.</li>
              <li><strong>Vision par ordinateur :</strong> Traitement d'images et reconnaissance de formes pour applications interactives.</li>
              <li><strong>Veille continue :</strong> Suivi des publications de recherche, des bibliothèques open-source et des nouveaux paradigmes de développement assisté par IA.</li>
            </ul>
          `,
          status: 'VEILLE TECHNOLOGIQUE QUOTIDIENNE & EXPÉRIMENTATIONS',
          tags: ['Intelligence Artificielle', 'LLMs', 'Prompt Engineering', 'Veille Tech', 'Vision']
        },
        {
          id: 'passion_volleyball',
          label: 'Volleyball & Esprit d\'Équipe',
          sublabel: 'Pratique sportive · Réactivité · Communication & Cohésion',
          icon: 'activity',
          action: 'info',
          image: 'img/passions/volleyball.svg',
          badge: 'MEDIA INFO · SPORT & COHÉSION',
          title: 'Volleyball & Dynamique Collective',
          subtitle: 'Dépassement de soi, communication sur le terrain et solidarité',
          desc: `
            <p>Pratiquant régulier de <strong>Volleyball</strong>, ce sport d'équipe rapide et technique reflète parfaitement ma vision du travail collaboratif dans le monde du développement logiciel.</p>
            <p><strong>Parallèles avec le développement en équipe :</strong></p>
            <ul>
              <li><strong>Communication instantanée :</strong> Annoncer clairement ses intentions sur le terrain, anticiper les trajectoires et faire confiance à ses coéquipiers.</li>
              <li><strong>Réactivité et adaptation :</strong> Prendre des décisions en une fraction de seconde face aux situations imprévues.</li>
              <li><strong>Cohésion et esprit positif :</strong> Célébrer chaque point, rester soudé dans les moments difficiles et viser la progression collective continue.</li>
            </ul>
          `,
          status: 'PRATIQUE RÉGULIÈRE & ESPRIT SPORTIF',
          tags: ['Volleyball', 'Esprit d\'équipe', 'Réactivité', 'Communication', 'Dépassement']
        },
        {
          id: 'passion_programming',
          label: 'Programmation & Nouvelles Tech',
          sublabel: 'Plaisir de coder · Veille technologique · Création logicielle',
          icon: 'code',
          action: 'info',
          image: 'img/passions/programming.svg',
          badge: 'MEDIA INFO · PASSION DU CODE',
          title: 'Programmation & Nouvelles Technologies',
          subtitle: 'Le plaisir de créer avec du code et d\'explorer l\'avenir',
          desc: `
            <p>Ce qui me passionne avant tout dans l'informatique, c'est le <strong>plaisir authentique de programmer</strong> et la fascination permanente pour les <strong>nouvelles technologies</strong> qui transforment notre façon de concevoir des applications.</p>
            <p><strong>Mes moteurs au quotidien :</strong></p>
            <ul>
              <li><strong>La création par le code :</strong> Partir d'une idée ou d'un besoin concret et lui donner forme, ligne après ligne, dans un programme structuré, lisible et agréable à maintenir.</li>
              <li><strong>Fascination pour les nouvelles technologies :</strong> Curiosité constante envers les nouveaux outils de développement, les frameworks modernes, le web de demain et les solutions logicielles innovantes.</li>
              <li><strong>Résolution de défis concrets :</strong> Prendre plaisir à modéliser un problème, concevoir l'architecture adaptée et voir le logiciel s'exécuter avec fluidité et réactivité.</li>
            </ul>
          `,
          status: 'PLAISIR DU CODE · VEILLE CONTINUE SUR LES NOUVELLES TECHNOLOGIES',
          tags: ['Programmation', 'Nouvelles Technologies', 'Création Logicielle', 'Veille Tech', 'Clean Code']
        }
      ]
    },
    {
      id: 'network',
      label: 'Réseau',
      badge: 'RÉSEAU',
      items: [
        {
          id: 'github',
          label: 'GitHub',
          sublabel: 'github.com/leoderuelle · Code source & Réalisations',
          icon: 'globe',
          action: 'link',
          url: 'https://github.com/leoderuelle',
          badge: 'MEDIA INFO · PLATEFORME DE CODE',
          title: 'GitHub · @leoderuelle',
          subtitle: 'Dépôts publics & projets open source',
          desc: `
            <p>Accédez directement à mes dépôts de code source publics : code de l'émulateur CHIP-8 en C++, bibliothèque mathématique Fractalens en Java, projets d'IUT et expérimentations personnelles.</p>
            <p>Consultez mes commits, mon architecture logicielle et la propreté de mon code.</p>
          `,
          status: 'PROFIL EN LIGNE SUR GITHUB',
          tags: ['GitHub', 'Git', 'Code Source', 'Dépôts Publics'],
          actionText: 'Ouvrir mon GitHub (Lien externe)'
        },
        {
          id: 'linkedin',
          label: 'LinkedIn',
          sublabel: 'linkedin.com/in/leoderuelle · Profil & Réseau',
          icon: 'globe',
          action: 'link',
          url: 'https://linkedin.com/in/leoderuelle',
          badge: 'MEDIA INFO · RÉSEAU PROFESSIONNEL',
          title: 'LinkedIn · Léo Deruelle',
          subtitle: 'Réseau professionnel & actualités étudiantes',
          desc: `
            <p>Connectons-nous sur LinkedIn pour échanger autour de projets informatiques, d'opportunités de stage pour avril 2027 (8 à 10 semaines) ou simplement partager une passion commune pour l'ingénierie logicielle.</p>
          `,
          status: 'DISPONIBLE POUR ÉCHANGES PROFESSIONNELS',
          tags: ['LinkedIn', 'Réseau', 'Carrière', 'Stage 8-10 sem.'],
          actionText: 'Ouvrir mon LinkedIn (Lien externe)'
        },
        {
          id: 'contact_item',
          label: 'Contact Direct',
          sublabel: 'leo.deruelle.6259@gmail.com · 06 02 11 33 01',
          icon: 'info',
          action: 'email',
          badge: 'MEDIA INFO · COORDONNÉES',
          title: 'Contact & Disponibilité',
          subtitle: 'Lens, Hauts-de-France · Permis B',
          desc: `
            <p>N'hésitez pas à me contacter directement pour toute question ou proposition d'entretien :</p>
            <ul>
              <li><strong>Email :</strong> <a href="mailto:leo.deruelle.6259@gmail.com" style="color: var(--accent-color);">leo.deruelle.6259@gmail.com</a></li>
              <li><strong>Téléphone :</strong> 06 02 11 33 01</li>
              <li><strong>Disponibilité :</strong> Stage conventionné BUT Informatique (durée : <strong>8 à 10 semaines</strong>) dès <strong>avril 2027</strong>.</li>
              <li><strong>Mobilité :</strong> Permis B · Lens et région Hauts-de-France (télétravail possible).</li>
            </ul>
          `,
          status: 'RECHERCHE STAGE 8 À 10 SEMAINES · TRÈS RÉACTIF',
          tags: ['Email', 'Téléphone', 'Lens', 'Permis B', 'Stage 8-10 sem.']
        }
      ]
    }
  ];

  /* ── ICÔNES SVG VECTORIELLES ──────────────────────────────── */
  const SVG_ICONS = {
    user: [
      { tag: 'path', d: 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2' },
      { tag: 'path', d: 'M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8' }
    ],
    disc: [
      { tag: 'circle', cx: 12, cy: 12, r: 9 },
      { tag: 'circle', cx: 12, cy: 12, r: 3 }
    ],
    sliders: [
      { tag: 'path', d: 'M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3M1 14h6M9 8h6M17 16h6' }
    ],
    trophy: [
      { tag: 'path', d: 'M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z' },
      { tag: 'path', d: 'M7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3' }
    ],
    globe: [
      { tag: 'circle', cx: 12, cy: 12, r: 9 },
      { tag: 'path', d: 'M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18' }
    ],
    download: [
      { tag: 'path', d: 'M12 3v12M7 10l5 5 5-5M5 21h14' }
    ],
    info: [
      { tag: 'circle', cx: 12, cy: 12, r: 9 },
      { tag: 'path', d: 'M12 11v5M12 8h.01' }
    ],
    gamepad: [
      { tag: 'path', d: 'M6 12h4m-2-2v4m8-2h.01m-2 0h.01M6 6h12a4 4 0 0 1 4 4v5a3 3 0 0 1-5 2.12l-2-2.12H9l-2 2.12A3 3 0 0 1 2 15v-5a4 4 0 0 1 4-4z' }
    ],
    spark: [
      { tag: 'path', d: 'M12 2v20M2 12h20M4.93 4.93l14.14 14.14M4.93 19.07l14.14-14.14' }
    ],
    activity: [
      { tag: 'path', d: 'M22 12h-4l-3 9L9 3l-3 9H2' }
    ],
    cpu: [
      { tag: 'rect', x: 4, y: 4, width: 16, height: 16, rx: 2 },
      { tag: 'path', d: 'M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3' }
    ],
    heart: [
      { tag: 'path', d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z' }
    ],
    code: [
      { tag: 'path', d: 'M16 18l6-6-6-6M8 6l-6 6 6 6' }
    ]
  };

  function createIconElement(iconName, size) {
    size = size || 28;
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'xmb__sub-icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', '1.6');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');

    const elements = SVG_ICONS[iconName] || SVG_ICONS.info;
    elements.forEach(item => {
      const el = document.createElementNS(ns, item.tag);
      if (item.tag === 'path') {
        el.setAttribute('d', item.d);
      } else if (item.tag === 'circle') {
        el.setAttribute('cx', item.cx);
        el.setAttribute('cy', item.cy);
        el.setAttribute('r', item.r);
      } else if (item.tag === 'rect') {
        el.setAttribute('x', item.x);
        el.setAttribute('y', item.y);
        el.setAttribute('width', item.width);
        el.setAttribute('height', item.height);
        if (item.rx) el.setAttribute('rx', item.rx);
      }
      svg.appendChild(el);
    });

    return svg;
  }

  /* ── ÉTAT DE L'APPLICATION ────────────────────────────────── */
  const urlParams = new URLSearchParams(window.location.search);
  const initialCatParam = parseInt(urlParams.get('cat'), 10);
  const initialScrollParam = parseInt(urlParams.get('scroll'), 10);
  let currentCategory = (!isNaN(initialCatParam) && initialCatParam >= 0 && initialCatParam < CATEGORIES.length) ? initialCatParam : 0;
  let currentSubitem = 0;

  /* ── RÉFÉRENCES DOM ───────────────────────────────────────── */
  const $categories = document.getElementById('categories');
  const $subitems = document.getElementById('subitems');
  const $clock = document.getElementById('clock');
  const $date = document.getElementById('date');

  // Panneau latéral
  const $sidePanel = document.getElementById('sidePanel');
  const $sideScroll = document.getElementById('sideScroll');
  const $sideBadge = document.getElementById('sideBadge');
  const $sideTitle = document.getElementById('sideTitle');
  const $sideSubtitle = document.getElementById('sideSubtitle');
  const $sideDesc = document.getElementById('sideDesc');
  const $sideStatus = document.getElementById('sideStatus');
  const $sideTags = document.getElementById('sideTags');
  const $sideActionBox = document.getElementById('sideActionBox');
  const $sideFooter = document.getElementById('sideFooter');
  const $sideInner = document.querySelector('.sidepanel__inner');
  const $sideMediaCard = document.getElementById('sideMediaCard');
  const $sideMediaImg = document.getElementById('sideMediaImg');

  // Modale de fonctionnalités
  const $featuresModal = document.getElementById('featuresModal');
  const $btnFeaturesClose = document.getElementById('btnFeaturesClose');
  const $btnFeaturesFooterClose = document.getElementById('btnFeaturesFooterClose');
  const $btnTestSound = document.getElementById('btnTestSound');
  const $modalThemeButtons = document.getElementById('modalThemeButtons');
  const $ps3Toast = document.getElementById('ps3Toast');

  // Boutons du bas
  const $btnValidate = document.getElementById('btnValidate');
  const $btnBack = document.getElementById('btnBack');

  const categoryElements = Array.from($categories.querySelectorAll('.xmb__category'));

  /* ── SYNTHÈSE SONORE WEB AUDIO API (PS3 ACCURATE) ─────────── */
  let audioContext = null;

  function initAudio() {
    if (!audioContext) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) audioContext = new AudioCtx();
    }
    if (audioContext && audioContext.state === 'suspended') {
      audioContext.resume();
    }
  }

  function playNavSound() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioContext) return;
    try {
      const now = audioContext.currentTime;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(640, now);
      osc.frequency.exponentialRampToValueAtTime(740, now + 0.04);

      gain.gain.setValueAtTime(0.045, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start(now);
      osc.stop(now + 0.045);
    } catch (_) { }
  }

  function playSelectSound() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioContext) return;
    try {
      const now = audioContext.currentTime;
      [
        { freq: 587.33, start: 0, dur: 0.12, vol: 0.06 },
        { freq: 880.00, start: 0.04, dur: 0.18, vol: 0.08 }
      ].forEach(tone => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(tone.freq, now + tone.start);

        gain.gain.setValueAtTime(tone.vol, now + tone.start);
        gain.gain.exponentialRampToValueAtTime(0.001, now + tone.start + tone.dur);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start(now + tone.start);
        osc.stop(now + tone.start + tone.dur);
      });
    } catch (_) { }
  }

  function playBackSound() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioContext) return;
    try {
      const now = audioContext.currentTime;
      const osc = audioContext.createOscillator();
      const gain = audioContext.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, now);
      osc.frequency.exponentialRampToValueAtTime(320, now + 0.08);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(audioContext.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (_) { }
  }

  function playArpeggioSound() {
    if (!soundEnabled) return;
    initAudio();
    if (!audioContext) return;
    try {
      const now = audioContext.currentTime;
      const notes = [
        { freq: 523.25, time: 0.00, dur: 0.28, vol: 0.06 }, // Do5
        { freq: 659.25, time: 0.07, dur: 0.32, vol: 0.07 }, // Mi5
        { freq: 783.99, time: 0.14, dur: 0.38, vol: 0.08 }, // Sol5
        { freq: 1046.50, time: 0.22, dur: 0.65, vol: 0.09 } // Do6 (chime brillant)
      ];
      notes.forEach(n => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(n.freq, now + n.time);

        gain.gain.setValueAtTime(0.001, now + n.time);
        gain.gain.exponentialRampToValueAtTime(n.vol, now + n.time + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + n.time + n.dur);

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start(now + n.time);
        osc.stop(now + n.time + n.dur);
      });
    } catch (_) { }
  }

  /* ── NOTIFICATION TOAST PS3 ───────────────────────────────── */
  let toastTimer = null;
  function showPS3Toast(message) {
    if (!$ps3Toast) return;
    $ps3Toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4M12 8h.01"/>
      </svg>
      <span>${message}</span>
    `;
    $ps3Toast.classList.add('is-visible');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      $ps3Toast.classList.remove('is-visible');
    }, 3200);
  }

  /* ── CONSOLE DES FONCTIONNALITÉS XMB ──────────────────────── */
  function openFeaturesModal() {
    if (!$featuresModal) return;
    playSelectSound();
    $featuresModal.style.display = 'flex';
    void $featuresModal.offsetWidth;
    $featuresModal.classList.add('is-active');
    $featuresModal.setAttribute('aria-hidden', 'false');
    updateModalThemeButtons();
  }

  function closeFeaturesModal() {
    if (!$featuresModal) return;
    playBackSound();
    $featuresModal.classList.remove('is-active');
    $featuresModal.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      $featuresModal.style.display = 'none';
    }, 250);
  }

  function updateModalThemeButtons() {
    if (!$modalThemeButtons) return;
    const currentThemeId = THEMES[currentThemeIndex].id;
    const btns = $modalThemeButtons.querySelectorAll('.theme-btn');
    btns.forEach(btn => {
      const tid = btn.getAttribute('data-theme-id');
      if (tid === currentThemeId) {
        btn.classList.add('is-active');
      } else {
        btn.classList.remove('is-active');
      }
    });
  }

  function applyTheme(themeId) {
    const idx = THEMES.findIndex(t => t.id === themeId);
    if (idx !== -1) {
      currentThemeIndex = idx;
      const theme = THEMES[currentThemeIndex];
      document.body.setAttribute('data-theme', theme.id);

      const settingsCat = CATEGORIES.find(c => c.id === 'settings');
      if (settingsCat) {
        const themeItem = settingsCat.items.find(i => i.id === 'theme_setting');
        if (themeItem) {
          themeItem.sublabel = `${theme.label} · Cliquez pour changer`;
          themeItem.status = `THÈME ACTUEL : ${theme.label.toUpperCase()}`;
        }
      }

      renderSubitemsList();
      updateModalThemeButtons();
      playSelectSound();
      showPS3Toast(`Thème activé : ${theme.label}`);
    }
  }

  /* ── HORLOGE & DATE TEMPS RÉEL (FRANÇAIS) ─────────────────── */
  function updateClockAndDate() {
    const now = new Date();
    $clock.textContent = now.toLocaleTimeString('fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    $date.textContent = now.toLocaleDateString('fr-FR', options);
  }
  updateClockAndDate();
  setInterval(updateClockAndDate, 1000);

  /* ── PARTICULES FLOTTANTES ────────────────────────────────── */
  function initializeParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    const count = 18;
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      p.style.left = (Math.random() * 100).toFixed(1) + '%';
      p.style.top = (Math.random() * 100).toFixed(1) + '%';
      p.style.setProperty('--dur', (7 + Math.random() * 9).toFixed(1) + 's');
      p.style.setProperty('--delay', (Math.random() * 5).toFixed(1) + 's');
      p.style.setProperty('--dx', (-30 + Math.random() * 60).toFixed(0) + 'px');
      p.style.setProperty('--dy', (-35 + Math.random() * 70).toFixed(0) + 'px');
      container.appendChild(p);
    }
  }
  initializeParticles();

  /* ── CALCUL DE L'AXE XMB AVEC LE PANNEAU LATÉRAL ──────────── */
  function getTargetAxisX() {
    const width = window.innerWidth;
    if (width <= 680) {
      return width / 2;
    }
    const sideWidth = width <= 900 ? 320 : width <= 1200 ? 380 : 490;
    const availableWidth = width - sideWidth;
    return Math.max(200, availableWidth * 0.52);
  }

  function updateCategoryPositions() {
    const targetX = getTargetAxisX();

    categoryElements.forEach((catEl, idx) => {
      const isActive = idx === currentCategory;
      catEl.setAttribute('data-active', isActive ? 'true' : 'false');
      catEl.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    const activeCatEl = categoryElements[currentCategory];
    if (activeCatEl) {
      const catCenterX = activeCatEl.offsetLeft + (activeCatEl.offsetWidth / 2);
      const shiftX = targetX - catCenterX;
      $categories.style.transform = `translateX(${shiftX}px)`;

      // Aligner rigoureusement le centre de l'icône du sous-élément sur l'axe
      const subLeft = targetX - 36;
      $subitems.style.left = `${subLeft}px`;
    }
  }

  /* ── MISE À JOUR DU PANNEAU LATÉRAL (MEDIA INFO SANS CLIC) ── */
  function updateSidePanelDirect(item) {
    if (!item) return;

    if ($sideInner) {
      $sideInner.classList.add('is-updating');
    }
    if ($sideScroll) {
      $sideScroll.scrollTop = 0;
    }

    setTimeout(() => {
      if ($sideBadge) $sideBadge.textContent = item.badge || 'MEDIA INFO';
      if ($sideTitle) $sideTitle.textContent = item.title || item.label;
      if ($sideSubtitle) $sideSubtitle.textContent = item.subtitle || item.sublabel || '';
      if ($sideDesc) $sideDesc.innerHTML = item.desc || '';
      if ($sideStatus) $sideStatus.textContent = item.status || 'EN LIGNE';

      // Aperçu média visuel (passions & projets)
      if ($sideMediaCard && $sideMediaImg) {
        if (item.image) {
          $sideMediaImg.src = item.image;
          $sideMediaImg.alt = item.title || item.label;
          $sideMediaCard.style.display = 'block';
        } else {
          $sideMediaCard.style.display = 'none';
        }
      }

      // Tags
      if ($sideTags) {
        $sideTags.innerHTML = '';
        const tags = item.tags || [];
        tags.forEach(t => {
          const span = document.createElement('span');
          span.className = 'sidepanel__tag';
          span.textContent = t;
          $sideTags.appendChild(span);
        });
      }

      // Bouton d'action contextuel intégré dans le panneau latéral
      // (affiché UNIQUEMENT sur : projets autorisés avec actionText, CV, À propos, GitHub et LinkedIn)
      const allowedButtonIds = ['cv', 'about', 'github', 'linkedin', 'proj_portfolio', 'proj_chip8', 'proj_fractalens'];
      const shouldShowButton = allowedButtonIds.includes(item.id) && !!item.actionText;

      if ($sideActionBox) {
        $sideActionBox.innerHTML = '';
        if (shouldShowButton) {
          const actionBtn = document.createElement('button');
          actionBtn.className = 'sidepanel__action-btn';

          const keyCircle = document.createElement('span');
          keyCircle.className = 'sidepanel__action-key';
          keyCircle.textContent = '✕';
          actionBtn.appendChild(keyCircle);

          const actionTextSpan = document.createElement('span');
          actionTextSpan.textContent = item.actionText;
          actionBtn.appendChild(actionTextSpan);

          actionBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            initAudio();
            triggerSubitemAction(item);
          });

          $sideActionBox.appendChild(actionBtn);
          if ($sideFooter) $sideFooter.style.display = 'block';
        } else if (item.noticeText) {
          const noticeEl = document.createElement('div');
          noticeEl.className = 'sidepanel__notice-text';
          noticeEl.innerHTML = `
            <span class="sidepanel__notice-dot" aria-hidden="true"></span>
            <span>${item.noticeText}</span>
          `;
          $sideActionBox.appendChild(noticeEl);
          if ($sideFooter) $sideFooter.style.display = 'block';
        } else {
          if ($sideFooter) $sideFooter.style.display = 'none';
        }
      }

      if ($sideInner) {
        $sideInner.classList.remove('is-updating');
      }

      if (!isNaN(initialScrollParam) && $sideScroll) {
        $sideScroll.scrollTop = initialScrollParam;
      }
    }, 60);
  }

  /* ── RENDU DE LA LISTE VERTICALE DES SOUS-ÉLÉMENTS ─────────── */
  function renderSubitemsList() {
    $subitems.innerHTML = '';
    const currentCatData = CATEGORIES[currentCategory];
    if (!currentCatData || !currentCatData.items) return;

    currentCatData.items.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = 'xmb__subitem';
      li.setAttribute('role', 'menuitem');
      li.setAttribute('tabindex', index === currentSubitem ? '0' : '-1');
      li.setAttribute('data-active', index === currentSubitem ? 'true' : 'false');

      // Icône
      const iconWrap = document.createElement('div');
      iconWrap.className = 'xmb__sub-icon-wrap';
      iconWrap.appendChild(createIconElement(item.icon, 28));
      li.appendChild(iconWrap);

      // Bloc de texte (Titre + Sous-titre fidèle au mockup)
      const textWrap = document.createElement('div');
      textWrap.className = 'xmb__sub-text';

      const labelSpan = document.createElement('span');
      labelSpan.className = 'xmb__sub-label';
      labelSpan.textContent = item.label;
      textWrap.appendChild(labelSpan);

      if (item.sublabel) {
        const descSpan = document.createElement('span');
        descSpan.className = 'xmb__sub-desc';
        descSpan.textContent = item.sublabel;
        textWrap.appendChild(descSpan);
      }

      li.appendChild(textWrap);

      // Clic souris : sélectionne l'élément et met à jour le panneau latéral
      li.addEventListener('click', (e) => {
        e.stopPropagation();
        initAudio();
        if (currentSubitem !== index) {
          currentSubitem = index;
          playNavSound();
          updateSubitemsFocus();
        } else {
          // Deuxième clic sur le même élément : déclenche l'action principale
          triggerSubitemAction(item);
        }
      });

      $subitems.appendChild(li);
    });

    scrollSubitemsToActive();

    // Mettre à jour immédiatement le panneau latéral avec l'élément actif
    if (currentCatData.items[currentSubitem]) {
      updateSidePanelDirect(currentCatData.items[currentSubitem]);
    }
  }

  function updateSubitemsFocus() {
    const items = Array.from($subitems.querySelectorAll('.xmb__subitem'));
    items.forEach((el, idx) => {
      const isActive = idx === currentSubitem;
      el.setAttribute('data-active', isActive ? 'true' : 'false');
      el.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    scrollSubitemsToActive();

    // Synchronisation automatique immédiate du panneau latéral droit
    const currentCatData = CATEGORIES[currentCategory];
    if (currentCatData && currentCatData.items[currentSubitem]) {
      updateSidePanelDirect(currentCatData.items[currentSubitem]);
    }
  }

  function scrollSubitemsToActive() {
    const itemHeight = 64;
    const offset = Math.max(0, (currentSubitem - 1) * itemHeight);
    $subitems.style.transform = `translateY(${-offset}px)`;
  }

  /* ── DÉCLENCHEMENT D'ACTIONS SUR UN ÉLÉMENT ─────────────────── */
  function triggerSubitemAction(item) {
    if (!item) return;

    if (item.action === 'features_modal' || item.id === 'about') {
      openFeaturesModal();
    } else if (item.action === 'download' && item.file) {
      playSelectSound();
      downloadFile(item.file);
    } else if (item.action === 'link' && item.url) {
      playSelectSound();
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.id === 'proj_dailyfive') {
      playSelectSound();
      showPS3Toast('Daily Five : en cours de développement (React Native)');
    } else if (item.action === 'email') {
      playSelectSound();
      window.location.href = 'mailto:leo.deruelle.6259@gmail.com';
    } else if (item.action === 'theme_cycle') {
      cycleTheme();
    } else if (item.action === 'jump_projects') {
      jumpToCategory(1);
    } else {
      playSelectSound();
    }
  }

  /* Saut vers une catégorie XMB */
  function jumpToCategory(targetIndex) {
    if (targetIndex >= 0 && targetIndex < CATEGORIES.length) {
      currentCategory = targetIndex;
      currentSubitem = 0;
      playNavSound();
      flashScreen();
      updateCategoryPositions();
      renderSubitemsList();
    }
  }

  /* Changement de thème visuel en direct */
  function cycleTheme() {
    currentThemeIndex = (currentThemeIndex + 1) % THEMES.length;
    const theme = THEMES[currentThemeIndex];
    document.body.setAttribute('data-theme', theme.id);

    const settingsCat = CATEGORIES.find(c => c.id === 'settings');
    if (settingsCat) {
      const themeItem = settingsCat.items.find(i => i.id === 'theme_setting');
      if (themeItem) {
        themeItem.sublabel = `${theme.label} · Cliquez pour changer`;
        themeItem.status = `THÈME ACTUEL : ${theme.label.toUpperCase()}`;
      }
    }
    renderSubitemsList();
    updateModalThemeButtons();
    playSelectSound();
    showPS3Toast(`Thème activé : ${theme.label}`);
  }

  function downloadFile(filename) {
    const a = document.createElement('a');
    a.href = filename;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showPS3Toast('Téléchargement du CV lancé (PDF)');
  }

  /* ── EFFET FLASH D'ÉCRAN XMB ──────────────────────────────── */
  function flashScreen() {
    document.body.classList.remove('xmb--flash');
    void document.body.offsetWidth;
    document.body.classList.add('xmb--flash');
    setTimeout(() => document.body.classList.remove('xmb--flash'), 180);
  }

  /* ── NAVIGATION PAR LA MOLETTE DE SOURIS (WHEEL) ──────────── */
  let lastWheelTime = 0;
  const WHEEL_THROTTLE_MS = 220;

  window.addEventListener('wheel', (e) => {
    // Si la modale est ouverte, laisser le défilement de la modale
    if ($featuresModal && $featuresModal.classList.contains('is-active')) {
      return;
    }

    // Si la souris est au-dessus du panneau latéral et qu'il y a du contenu à scroller verticalement
    if ($sidePanel && $sidePanel.contains(e.target)) {
      const scrollable = $sideScroll || $sidePanel;
      if (scrollable.scrollHeight > scrollable.clientHeight) {
        return;
      }
    }

    const now = Date.now();
    if (now - lastWheelTime < WHEEL_THROTTLE_MS) {
      return;
    }

    initAudio();

    // Scroll vers le bas (deltaY > 0) -> changer de section vers la droite
    if (e.deltaY > 15) {
      if (currentCategory < CATEGORIES.length - 1) {
        lastWheelTime = now;
        currentCategory++;
        currentSubitem = 0;
        playNavSound();
        flashScreen();
        updateCategoryPositions();
        renderSubitemsList();
      }
    }
    // Scroll vers le haut (deltaY < 0) -> changer de section vers la gauche
    else if (e.deltaY < -15) {
      if (currentCategory > 0) {
        lastWheelTime = now;
        currentCategory--;
        currentSubitem = 0;
        playNavSound();
        flashScreen();
        updateCategoryPositions();
        renderSubitemsList();
      }
    }
  }, { passive: true });

  /* ── NAVIGATION CLAVIER ───────────────────────────────────── */
  document.addEventListener('keydown', (e) => {
    initAudio();

    // Si la modale est ouverte, seule la touche Échap/O la ferme
    if ($featuresModal && $featuresModal.classList.contains('is-active')) {
      if (e.key === 'Escape' || e.key === 'o' || e.key === 'O') {
        e.preventDefault();
        closeFeaturesModal();
      }
      return;
    }

    const currentCatData = CATEGORIES[currentCategory];

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        if (currentCategory > 0) {
          currentCategory--;
          currentSubitem = 0;
          playNavSound();
          flashScreen();
          updateCategoryPositions();
          renderSubitemsList();
        }
        break;

      case 'ArrowRight':
        e.preventDefault();
        if (currentCategory < CATEGORIES.length - 1) {
          currentCategory++;
          currentSubitem = 0;
          playNavSound();
          flashScreen();
          updateCategoryPositions();
          renderSubitemsList();
        }
        break;

      case 'ArrowUp':
        e.preventDefault();
        if (currentSubitem > 0) {
          currentSubitem--;
          playNavSound();
          updateSubitemsFocus();
        }
        break;

      case 'ArrowDown':
        e.preventDefault();
        if (currentCatData && currentSubitem < currentCatData.items.length - 1) {
          currentSubitem++;
          playNavSound();
          updateSubitemsFocus();
        }
        break;

      case 'Enter':
      case 'x':
      case 'X':
        e.preventDefault();
        if (currentCatData && currentCatData.items[currentSubitem]) {
          triggerSubitemAction(currentCatData.items[currentSubitem]);
        }
        break;

      case 'Escape':
      case 'o':
      case 'O':
        e.preventDefault();
        playBackSound();
        break;
    }
  });

  /* ── INTERACTIONS SOURIS & BOUTONS DU FOOTER ───────────────── */
  categoryElements.forEach((el, index) => {
    el.addEventListener('click', () => {
      initAudio();
      if (currentCategory !== index) {
        currentCategory = index;
        currentSubitem = 0;
        playNavSound();
        flashScreen();
        updateCategoryPositions();
        renderSubitemsList();
      }
    });
  });

  if ($btnValidate) {
    $btnValidate.addEventListener('click', () => {
      initAudio();
      const currentCatData = CATEGORIES[currentCategory];
      if (currentCatData && currentCatData.items[currentSubitem]) {
        triggerSubitemAction(currentCatData.items[currentSubitem]);
      }
    });
  }

  if ($btnBack) {
    $btnBack.addEventListener('click', () => {
      initAudio();
      if ($featuresModal && $featuresModal.classList.contains('is-active')) {
        closeFeaturesModal();
      } else {
        playBackSound();
      }
    });
  }

  /* Événements de la modale de fonctionnalités */
  if ($btnFeaturesClose) {
    $btnFeaturesClose.addEventListener('click', () => {
      closeFeaturesModal();
    });
  }

  if ($btnFeaturesFooterClose) {
    $btnFeaturesFooterClose.addEventListener('click', () => {
      closeFeaturesModal();
    });
  }

  if ($featuresModal) {
    $featuresModal.addEventListener('click', (e) => {
      if (e.target === $featuresModal) {
        closeFeaturesModal();
      }
    });
  }

  if ($btnTestSound) {
    $btnTestSound.addEventListener('click', () => {
      initAudio();
      playArpeggioSound();
      showPS3Toast('Synthèse Web Audio API active (Accord C-Maj arpeggio)');
    });
  }

  if ($modalThemeButtons) {
    $modalThemeButtons.addEventListener('click', (e) => {
      const btn = e.target.closest('.theme-btn');
      if (btn) {
        const themeId = btn.getAttribute('data-theme-id');
        if (themeId) {
          applyTheme(themeId);
        }
      }
    });
  }

  window.addEventListener('resize', () => {
    updateCategoryPositions();
  });

  /* ── INITIALISATION ───────────────────────────────────────── */
  const initialSubParam = parseInt(urlParams.get('sub'), 10);
  if (!isNaN(initialSubParam) && initialSubParam >= 0) {
    currentSubitem = initialSubParam;
  }
  updateCategoryPositions();
  renderSubitemsList();

  if (urlParams.get('modal') === 'features') {
    openFeaturesModal();
  }

  if (!isNaN(initialScrollParam) && $sideScroll) {
    $sideScroll.scrollTop = initialScrollParam;
  }

})();
