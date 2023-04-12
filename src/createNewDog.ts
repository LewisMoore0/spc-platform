export interface Dog {
    name: string;
    age: number;
    breed: string;
}

const createNewDog = (name: string, age: number, breed: string) => {
    return {
        name: name,
        age: age,
        breed: breed
    }
}

export { createNewDog }