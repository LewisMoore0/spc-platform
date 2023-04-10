export interface Employee {
    name: string;
}

let createEmployee = (name: string) => {
    return {
        name: name
    }
}

export { createEmployee }