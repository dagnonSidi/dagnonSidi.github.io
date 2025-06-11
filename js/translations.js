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
                title: "Modélisation et Optimisation d’un Système Photovoltaïque",
                description: "• Modélisation thermique du ballon d’eau chaude \n• Simulation de la production PV sur une semaine\n• Implémentation du modèle Simulink avec gestion des priorités.\n• Calcul du volume d’eau chaude produit et de la puissance.\n• Estimation de l’achat/réduction de consommation électrique réseau."
            },
            sensorApi: {
                title: "Sensor API Generator",
                description: "• A Modifier\n• A Modifier\n• A Modifier\n• A Modifier\n• A Modifier\n• A Modifier"
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
                title: "Secteurs",
                items: ["Aeronautique", "Automobile", "Ferroviaire","Energie Electrique"]
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
                        description: "Spécialisation systèmes électromécaniques"
                    },
                    {
                        period: "2024 - 2025",
                        title: "Diplome Universitaire Management Entrepreneurial",
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
                title: "Photovoiltaic system Modeling and Optimization",
                description: "• Thermal modeling of the hot water tank (energy equation).\n• Simulation of PV production over one week with a 10-minute time step.\n• Implementation of the Simulink model with energy priority management.\n• Calculation of the hot water volume based on injected power.\n• Estimation of electricity purchase/reduction from the grid."
            },
            sensorApi: {
                title: "Sensor API Generator",
                description: "• A Modifier\n• A Modifier\n• A Modifier\n• A Modifier\n• A Modifier\n• A Modifier"
            },
            smartRevision: {
                title: "Smart Revision App",
                description: "• A Modifier\n• A Modifier\n• A Modifier\n• A Modifier\n• A Modifier\n• A Modifier"
            }
        },
        skills: {
            title: "Compétences",
            dataEngineering: {
                title: "Systems Engineering",
                items: ["Simulink", "Simscape", "Capella", "IBM DOORS", "UML"]
            },
            dataScience: {
                title: "Data Science & IA",
                items: ["Scikit-Learn", "Machine Learning", "Pandas", "Analyse de Données", "Visualisation"]
            },
            cloudBigData: {
                title: "Programming Languages",
                items: ["Matlab", "Python", "C", "C++"]
            },
            devops: {
                title: "Networks and Technical Standards",
                items: ["ARINC 429", "AFDX", "DO 254", "DO-178"]
            },
            webDev: {
                title: "Sectors",
                items: ["Aeronautics", "Automotive", "Railway","Electrical Energy"]
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
                        description: "Specialization in electromechanical systems"
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
