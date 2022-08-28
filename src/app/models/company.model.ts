export interface Company {
    name:string;
    logo: string;
    projects?: Project[];
}

export interface Project {
    name:string;
    description: string[];
}