import { Dog } from "./createNewDog";

export interface Entry {
    date: string;
    dogs: Dog[];
}

export const createEntry = (date: String, dogs: Dog[]) => {
    return {
        date: date,
        dogs: dogs
    }
}