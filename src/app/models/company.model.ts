import * as firebase from 'firebase/firestore';

export interface Company {
    name:string;
    logo: string;
}

export interface Project {
    name:string;
    role: string;
    shortDescription: string;
    description: string[];
    technologies: string[];
}

export interface Experience {
    id?: string;
    dateFrom: firebase.Timestamp;
    dateTo: firebase.Timestamp;
    company: Company;
    position: string;
    description?: string;
    projects: Project[];
}