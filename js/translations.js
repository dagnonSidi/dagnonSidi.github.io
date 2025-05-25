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
                title: "Générateur d'API Capteurs",
                description: "• API FastAPI pour la génération de données IoT\n• Containerisation Docker et déploiement cloud\n• Documentation OpenAPI et tests automatisés\n• Simulation en temps réel d'environnements IoT\n• Interface REST pour configurer les capteurs\n• Monitoring des performances et des métriques"
            },
            smartRevision: {
                title: "Application de Révision Intelligente",
                description: "• Application web de création de cartes de révision\n• Système de répétition espacée basé sur la difficulté\n• Interface intuitive pour la gestion des decks\n• Backend Python avec stockage des données\n• Frontend responsive en HTML/CSS/JavaScript\n• Suivi de la progression"
            }
        },
        skills: {
            title: "Compétences",
            SystemsEngineering: {
                title: "Ingénierie Système",
                items: ["Simulink", "Simscape", "Capella", "IBM DOORS", "UML"]
            },
            dataScience: {
                title: "Data Science",
                items: ["Scikit-Learn", "Machine Learning", "Pandas", "Analyse de Données", "Visualisation"]
            },
            Programming: {
                title: "Langages de Programmation",
                items: ["Matlab", "Python", "C", "C++"]
            },
            Networks: {
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
                description: "• Data collection via API and AWS S3\n• ETL with Python/DuckDB for data processing\n• Pipeline orchestration with Apache Airflow\n• CI/CD with GitHub Actions and automated deployment\n• Docker containerization for portability\n• ML analysis: clustering and anomaly detection\n• Streamlit interface for visualization and monitoring"
            },
            sensorApi: {
                title: "Sensor API Generator",
                description: "• FastAPI for generating IoT data\n• Docker containerization and cloud deployment\n• OpenAPI documentation and automated tests\n• Real-time IoT simulation\n• REST interface for sensor configuration\n• Performance and metrics monitoring"
            },
            smartRevision: {
                title: "Smart Revision App",
                description: "• Web app for flashcards and spaced repetition\n• Difficulty-based revision algorithm\n• Clean UI for deck creation and tracking\n• Python backend with storage\n• Responsive frontend in HTML/CSS/JavaScript\n• Progress tracking system"
            }
        },
        skills: {
            title: "Skills",
            SystemsEngineering: {
                title: "Systems Engineering",
                items: ["Simulink", "Simscape", "Capella", "IBM DOORS", "UML"]
            },
            dataScience: {
                title: "Data Science & AI",
                items: ["Scikit-Learn", "Machine Learning", "Pandas", "Data Analysis", "Data Visualization"]
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
