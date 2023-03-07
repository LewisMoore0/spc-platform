interface Dog {
    name: string;
    age: number;
    breed: string;
}

let createNewDog = (name: string, age: number, breed: string) => {
    return {
        name: name,
        age: age,
        breed: breed
    }
}

export { createNewDog }