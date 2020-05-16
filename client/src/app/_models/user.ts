import { Project } from './project.model';

export class User {
    id: number;
    username: string;
    password: string;
    token: string;
    firstName: string;
    lastName: string;

    projects: Project[];

    organizationName: string;
    designation: string;
    role: string
    city: string;
    state: string;
    country: string;
    phone: string;

}
