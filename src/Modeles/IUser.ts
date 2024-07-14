export interface IUser {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
    username: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
    };
}