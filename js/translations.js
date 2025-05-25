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
            title: "Ingénieur Systèmes",
            bio: "Passionné par l'ingénierie Systèmes, la modélisation, et le contrôle de systèmes dynamiques."
        },
        about: {
            title: "À Propos",
            content: "Ingénieur Systèmes passionné par l'ingénierie système. Je combine expertise technique et vision stratégique pour concevoir des systèmes innovants."
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
            dataEngineering: {
                title: "Ingénierie Systemès",
                items: ["Simulink", "Simscape", "Capella", "IBM DOORS", "UML"]
            },
            dataScience: {
                title: "Data Science & IA",
                items: ["Scikit-Learn", "Machine Learning", "Pandas", "Analyse de Données", "Visualisation"]
            },
            cloudBigData: {
                title: "Langages de Programmation",
                items: ["Matlab", "Python", "C", "C++"]
            },
            devops: {
                title: "Réseaux, protocoles & Normes",
                items: ["ARINC 429", "AFDX", "DO 254", "DO-178"]
            },
            webDev: {
                title: "Développement Web",
                items: ["JavaScript", "HTML", "CSS"]
            }
        },
        experience: {
            title: "Expériences & Études",
            education: {
                title: "Formation",
                items: [
                    {
                        period: "2022 - 2024",
                        title: "Master Electronique, Énergie Électrique et Automatique",
                        institution: "Université Paris-Saclay",
                        description: "Spécialisation en systèmes aéronautiques"
                    },
                    {
                        period: "2019 - 2022",
                        title: "Licence Électromécanique",
                        institution: "Université Mentouri, Algérie",
                        description: "Bases solides en systèmes électromécaniques"
                    },
                    {
                        period: "2024 - 2025",
                        title: "Management Entrepreneurial",
                        institution: "Université Paris-Saclay",
                        description: "Compétences en gestion de projet et innovation"
                    }
                ]
            },
            professional: {
                title: "Expérience Professionnelle",
                items: [
                    {
                        period: "2023 - 2025",
                        title: "Data Engineer en Alternance",
                        company: "Thales Alenia Space, Cannes",
                        description: "Automatisation du traitement des données de tests"
                    },
                    {
                        period: "Mars 2024 - Septembre 2024",
                        title: "Stagiaire Ingénieur Systèmes",
                        company: "Safran Landing Systems, Vélizy",
                        description: "Modélisation et contrôle de systèmes"
                    },
                    {
                        period: "2023",
                        title: "Ingénieur Électronique",
                        company: "Laboratoire GeePs, Gif-sur-Yvette",
                        description: "Caractérisation de capteurs MEMS, expérimentation et validation de systèmes"
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
            bio: "Passionate about Systems Engineering, Modeling, and Dynamic Systems Control."
        },
        about: {
            title: "About",
            content: "Systems Engineer passionate about modeling and control. I combine technical expertise with strategic thinking to design innovative systems."
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
            dataEngineering: {
                title: "Data Engineering",
                items: ["Simulink", "Simscape", "Capella", "IBM DOORS", "UML"]
            },
            dataScience: {
                title: "Data Science & AI",
                items: ["Scikit-Learn", "Machine Learning", "Pandas", "Data Analysis", "Data Visualization"]
            },
            cloudBigData: {
                title: "Cloud & Big Data",
                items: ["Matlab", "Python", "C", "C++"]
            },
            devops: {
                title: "DevOps",
                items: ["ARINC 429", "AFDX"]
            },
            webDev: {
                title: "Web Development",
                items: ["JavaScript", "HTML", "CSS"]
            }
        },
        experience: {
            title: "Experience & Education",
            education: {
                title: "Education",
                items: [
                    {
                        period: "2022 - 2024",
                        title: "Master's in Electrical and Control Engineering",
                        institution: "Université Paris-Saclay, France",
                        description: "Specialization in Aeronautical Systems"
                    },
                    {
                        period: "2019 - 2022",
                        title: "Bachelor in Electromechanical Engineering",
                        institution: "Université Mentouri, Algeria",
                        description: "Strong foundation in electromechanical systems"
                    },
                    {
                        period: "2024 - 2025",
                        title: "Entrepreneurship and Management",
                        institution: "Université Paris-Saclay",
                        description: "Skills in project management and innovation"
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
                        description: "System modeling and control"
                    },
                    {
                        period: "2023",
                        title: "Electronic Engineer",
                        company: "GeePs Laboratory, Gif-sur-Yvette",
                        description: "MEMS sensor characterization, experimentation and validation"
                    },
                    {
                        period: "2021",
                        title: "Engineering Intern",
                        company: "EDF CNPE de Chinon",
                        description: "Optimization of maintenance programs"
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
