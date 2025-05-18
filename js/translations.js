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
            name: "DAGNON Sidi",
            title: "System Engineer",
            bio: "Passionné par l'ingénierie système, la Modélisation et le Controle de Système."
        },
        about: {
            title: "À Propos",
            content: "Ingénieur Systems passionné par l'ingénierie systems. Je combine expertise technique et vision stratégique pour concevoir des modèles de systèmes. Je sais Concevoir des modèles dynamiques sur simulink mais aussi du MBSE sur Capella."
        },
        projects: {
            title: "Mes Projets",
            viewOnGithub: "Voir sur GitHub",
            foodTracking: {
                title: "Conception de pilote automatique pour un drone",
                description: "• Collecte de données via API et stockage sur AWS S3\n• ETL avec Python/DuckDB pour le traitement des données\n• Orchestration des pipelines avec Apache Airflow\n• CI/CD avec GitHub Actions et déploiement automatisé\n• Containerisation avec Docker pour la portabilité\n• Analyse ML : clustering et détection d'anomalies\n• Interface Streamlit pour visualisation et monitoring"
            },
            sensorApi: {
                title: "Modélisation et Optimisation du stockage d'énergie Photovoltaique",
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
                title: "Langage de Programmation",
                items: ["Python", "Matlab", "C", "C++"]
            },
            dataScience: {
                title: "Data Science & IA",
                items: [""Machine Learning", "Deep Learning", "Data Analysis", "Data Visualization","Pandas","SckitLearn"]
            },
            Modélisation_MBSE: {
                title: "MBSE & Gestion d'exigences",
                items: ["Capella", "IBM DOORS"]
            },
            devops: {
                title: "DevOps",
                items: ["Docker", "CI/CD", "GitHub Actions", "Linux", "Shell/Bash"]
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
                        period: "2024 - 2025",
                        title: "DU Management Entrepreunarial",
                        institution: "Université Paris Saclay"
                    },
                    {
                        period: "2022 - 2024",
                        title: "Master Génie Electrique : Electronique, Energie Electrique et Automatique",
                        institution: "Université Paris Saclay",
                        description: "Systèmes Aéronautiques"
                    },
                    {
                        period: "2019 - 2022",
                        title: "Licence Electromécanique",
                        institution: "Université Mentouri, Algérie"
                    }
                ]
            },
            professional: {
                title: "Expérience Professionnelle",
                items: [
                    {
                        period: "Mars 2024 - Septembre 2024",
                        title: "Systems Engineer en Stage",
                        company: "Safran, Vélizy",
                        description: "Modélisation et Controle d'adhérence de pneu d'avion"
                    },
                    {
                        period: "Juin 2023-Septembre 2023",
                        title: "Electronics Enginneer en Stage",
                        company: "Laboratoire GeePs, Gif-sur-Yvettes",
                        description: "Caractérisation de Capteurs MEMS"
                    },
                    {
                        period: "2021",
                        title: "Stage Ingénieur",
                        company: "EDF CNPE de Chinon",
                        description: "Optimisation des programmes de maintenance"
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
            bio: "Passionate about systems Engineering."
        },
        about: {
            title: "About",
            content: "Data Engineer passionate about AI, Cloud Computing, and DevOps. I combine technical expertise with strategic vision to design innovative and scalable data solutions. Currently working as an apprentice at Thales Alenia Space, developing data pipelines and automating test data processing."
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
                items: ["Python", "SQL", "PySpark", "Apache Airflow", "MongoDB", "Neo4j"]
            },
            dataScience: {
                title: "Data Science & AI",
                items: ["TensorFlow", "Machine Learning", "Deep Learning", "Data Analysis", "Data Visualization"]
            },
            cloudBigData: {
                title: "Cloud & Big Data",
                items: ["AWS", "Databricks", "Apache Spark", "Hadoop"]
            },
            devops: {
                title: "DevOps",
                items: ["Docker", "CI/CD", "GitHub Actions", "Linux", "Shell/Bash"]
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
                        period: "2023 - 2025",
                        title: "Master's in Data Science",
                        institution: "DSTI"
                    },
                    {
                        period: "2018 - 2021",
                        title: "Engineering Degree - SINERGIE Program",
                        institution: "ENSEM Nancy",
                        description: "Specialization in computer science and safety"
                    },
                    {
                        period: "2016 - 2018",
                        title: "Preparatory Classes PCSI/PSI",
                        institution: "Saint Stanislas, Nantes"
                    }
                ]
            },
            professional: {
                title: "Professional Experience",
                items: [
                    {
                        period: "2023 - 2025",
                        title: "Data Engineer Apprentice",
                        company: "Thales Alenia Space, Cannes",
                        description: "Automation of test data processing"
                    },
                    {
                        period: "2022",
                        title: "Data Engineer",
                        company: "EDF Cap Ampère, Saint-Denis",
                        description: "Control of maintenance programs in nuclear power plants"
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
