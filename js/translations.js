const translations = {
    fr: {
        nav: {
            home: "Accueil",
            about: "À Propos",
            projects: "Projets",
            skills: "Compétences",
            experience: "Expériences & Études",
            contact: "Contact"
        },
        home: {
            greeting: "Bonjour !",
            name: "Sidi DAGNON",
            title: "System Engineer",
            bio: "Passionné par l'ingénierie Systèmes, la modélisation, et le contrôle de systèmes dynamiques."
        },
        about: {
            title: "À Propos",
            content: "System Engineer passionné par l'ingénierie système. Je combine expertise technique et vision stratégique pour concevoir des systèmes innovants."
        },
        projects: {
            title: "Mes Projets",
            viewOnGithub: "Voir sur GitHub",
            foodTracking: {
                title: "Food Tracking DE/ML",
                description: "• Collecte de données via API et stockage sur AWS S3\n• ETL avec Python/DuckDB pour le traitement des données\n• Orchestration des pipelines avec Apache Airflow\n• CI/CD avec GitHub Actions et déploiement automatisé\n• Containerisation avec Docker pour la portabilité\n• Analyse ML : clustering et détection d'anomalies\n• Interface Streamlit pour visualisation et monitoring"
            },
            sensorApi: {
                title: "Sensor API Generator",
                description: "• API FastAPI pour la génération de données IoT\n• Containerisation Docker et déploiement cloud\n• Documentation OpenAPI et tests automatisés\n• Simulation en temps réel d'environnements IoT\n• Interface REST pour la configuration des capteurs\n• Monitoring des performances et des métriques"
            },
            smartRevision: {
                title: "Smart Revision App",
                description: "• Application web de création de cartes de révision\n• Système de répétition espacée basé sur la difficulté\n• Interface utilisateur intuitive pour la création et gestion des decks\n• Backend Python avec stockage des données\n• Frontend responsive en HTML/CSS/JavaScript\n• Système de progression et de suivi des révisions"
            }
        },
        skills: {
            title: "Compétences",
            SystemsEngineering: {
                title: "Ingénierie Systèmes",
                items: ["Simulink", "Simscape", "Capella", "IBM Doors", "UML"]
            },
            dataScience: {
                title: "Data Science",
                items: ["Scikit-learn", "Machine Learning", "Pandas", "Analyse de Données", "Visualisation"]
            },
            Programmation: {
                title: "Langages de Programmation",
                items: ["Matlab", "Python", "C", "C++"]
            },
            reseaux: {
                title: "Protocoles & Réseaux",
                items: ["ARINC 429", "AFDX"]
            }
        },
        experience: {
            title: "Expériences & Études",
            education: {
                title: "Formation",
                items: [
                    {
                        period: "2022 - 2024",
                        title: "Master Electronique, Energie Electrique et Automatique",
                        institution: "Université Paris Saclay",
                        description: "Spécialisation systèmes aéronautiques"
                    },
                    {
                        period: "2019 - 2022",
                        title: "Licence Electromécanique",
                        institution: "Université Mentouri, Algérie",
                        description: ""
                    },
                    {
                        period: "2024 - 2025",
                        title: "Management Entrepreneurial",
                        institution: "Université Paris Saclay",
                        description: ""
                    }
                ]
            },
            professional: {
                title: "Expérience Professionnelle",
                items: [
                    {
                        period: "Mars 2024 - Septembre 2024",
                        title: "System Engineer en Stage",
                        company: "Safran Landing Systems, Vélizy",
                        description: "Modélisation et contrôle de système"
                    },
                    {
                        period: "2023",
                        title: "Electronic Engineer",
                        company: "Laboratoire GeePs, Gif-Sur-Yvette",
                        description: "Caractérisation de capteurs & validation expérimentale"
                    }
                ]
            }
        },
        contact: {
            title: "Contact",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub"
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            projects: "Projects",
            skills: "Skills",
            experience: "Experience & Education",
            contact: "Contact"
        },
        home: {
            greeting: "Hello!",
            name: "Sidi DAGNON",
            title: "System Engineer",
            bio: "Passionate about System Engineering, System Modeling, and Control."
        },
        about: {
            title: "About",
            content: "System Engineer passionate about System Modeling and Control. I combine technical expertise with strategic vision to design innovative systems."
        },
        projects: {
            title: "My Projects",
            viewOnGithub: "View on GitHub",
            foodTracking: {
                title: "Food Tracking DE/ML",
                description: "• Data collection via API and AWS S3 storage\n• ETL with Python/DuckDB for data processing\n• Pipeline orchestration with Apache Airflow\n• CI/CD with GitHub Actions and automated deployment\n• Docker containerization for portability\n• ML analysis: clustering and anomaly detection\n• Streamlit interface for visualization and monitoring"
            },
            sensorApi: {
                title: "Sensor API Generator",
                description: "• FastAPI API for IoT data generation\n• Docker containerization and cloud deployment\n• OpenAPI documentation and automated testing\n• Real-time IoT environment simulation\n• REST interface for sensor configuration\n• Performance and metrics monitoring"
            },
            smartRevision: {
                title: "Smart Revision App",
                description: "• Web application for creating revision flashcards\n• Difficulty-based spaced repetition system\n• Intuitive user interface for deck creation and management\n• Python backend with data storage\n• Responsive frontend in HTML/CSS/JavaScript\n• Progress tracking and revision monitoring system"
            }
        },
        skills: {
            title: "Skills",
            SystemsEngineering: {
                title: "Systems Engineering",
                items: ["Simulink", "Simscape", "Capella", "IBM Doors", "UML"]
            },
            dataScience: {
                title: "Data Science & AI",
                items: ["Scikit-learn", "Machine Learning", "Pandas", "Data Analysis", "Data Visualization"]
            },
            Programming: {
                title: "Programming Languages",
                items: ["Matlab", "Python", "C", "C++"]
            },
            Networks: {
                title: "Networks",
                items: ["ARINC 429", "AFDX"]
            }
        },
        experience: {
            title: "Experience & Education",
            education: {
                title: "Education",
                items: [
                    {
                        period: "2022 - 2024",
                        title: "Master's in Electrical Engineering",
                        institution: "Université Paris Saclay, France",
                        description: "Specialization in Aeronautical Systems"
                    },
                    {
                        period: "2019 - 2022",
                        title: "Bachelor in Electromechanical",
                        institution: "Université Mentouri, Algeria",
                        description: ""
                    },
                    {
                        period: "2024 - 2025",
                        title: "Management and Entrepreneurship",
                        institution: "Université Paris Saclay",
                        description: ""
                    }
                ]
            },
            professional: {
                title: "Professional Experience",
                items: [
                    {
                        period: "2024",
                        title: "System Engineer Intern",
                        company: "Safran Landing Systems, Vélizy",
                        description: "System Modeling and Control"
                    },
                    {
                        period: "2023",
                        title: "Electronic Engineer",
                        company: "Laboratory GeePs, Gif-Sur-Yvette",
                        description: "MEMS Sensors Characterization, Experimentation and System Validation"
                    }
                ]
            }
        },
        contact: {
            title: "Contact",
            email: "Email",
            linkedin: "LinkedIn",
            github: "GitHub"
        }
    }
};
