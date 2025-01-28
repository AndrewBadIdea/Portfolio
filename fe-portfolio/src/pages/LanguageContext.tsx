import React, { createContext, useState, useEffect, ReactNode } from 'react';

// Define the shape of the translations
type Translations = {
    homepage: {
        welcome: string;
        intro: string;
        explore: string;
        reachOut: string;
        downloadCV: string;
    };
    aboutMe: {
        title: string;
        section1: string;
        section2: string;
    };
    projects: {
        title: string;
        addProject: string;
        viewProject: string;
    };
    comments: {
        title: string;
        leaveComment: string;
    };
    auth: {
        login: string; // Add login
        logout: string; // Add logout
    };
};

// Define the context type
interface LanguageContextType {
    language: string;
    toggleLanguage: () => void;
    translations: Translations;
}

// Context default values
const defaultTranslations: Translations = {
    homepage: {
        welcome: '',
        intro: '',
        explore: '',
        reachOut: '',
        downloadCV: '',
    },
    aboutMe: {
        title: '',
        section1: '',
        section2: '',
    },
    projects: {
        title: '',
        addProject: '',
        viewProject: '',
    },
    comments: {
        title: '',
        leaveComment: '',
    },
    auth: {
        login: '',
        logout: '',
    }
};

// Create the LanguageContext
export const LanguageContext = createContext<LanguageContextType>({
    language: 'en',
    toggleLanguage: () => {},
    translations: defaultTranslations,
});

const translations: Record<string, Translations> = {
    en: {
        homepage: {
            welcome: 'Welcome to My Portfolio',
            intro: "Hi, I'm Andrew Badea, a passionate third-year Computer Science student and a full-stack developer.",
            explore: 'Explore my portfolio to learn more about my journey, projects, and skills.',
            reachOut: 'Feel free to reach out or download my CV to learn more about me!',
            downloadCV: 'Download CV',
        },
        aboutMe: {
            title: 'About Me',
            section1: "Hi, I'm Andrew Badea, a passionate and driven third-year Computer Science student at Champlain College Saint-Lambert.",
            section2: 'I have a deep interest in technology and software development, with a focus on creating meaningful and innovative solutions.',
        },
        projects: {
            title: 'My Projects',
            addProject: 'Add a Project',
            viewProject: 'View Project',
        },
        comments: {
            title: 'Comments',
            leaveComment: 'Leave a Comment',
        },
        auth: {
            login: 'Log In',
            logout: 'Log Out',
        },
    },
    fr: {
        homepage: {
            welcome: 'Bienvenue sur mon portfolio',
            intro: "Salut, je suis Andrew Badea, étudiant en troisième année en informatique et développeur full-stack.",
            explore: 'Découvrez mon portfolio pour en savoir plus sur mon parcours, mes projets et mes compétences.',
            reachOut: 'N’hésitez pas à me contacter ou à télécharger mon CV pour en savoir plus sur moi !',
            downloadCV: 'Télécharger le CV',
        },
        aboutMe: {
            title: 'À propos de moi',
            section1: "Salut, je suis Andrew Badea, étudiant en troisième année en informatique à Champlain College Saint-Lambert.",
            section2: 'Je suis passionné par la technologie et le développement logiciel, avec un accent sur la création de solutions innovantes.',
        },
        projects: {
            title: 'Mes projets',
            addProject: 'Ajouter un projet',
            viewProject: 'Voir le projet',
        },
        comments: {
            title: 'Commentaires',
            leaveComment: 'Laisser un commentaire',
        },
        auth: {
            login: 'Connexion',
            logout: 'Déconnexion',
        },
    },
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
    const [language, setLanguage] = useState<string>('en');

    const toggleLanguage = () => {
        const newLanguage = language === 'en' ? 'fr' : 'en';
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        setLanguage(savedLanguage);
    }, []);

    return (
        <LanguageContext.Provider
            value={{
                language,
                toggleLanguage,
                translations: translations[language],
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
