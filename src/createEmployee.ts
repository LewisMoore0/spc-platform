export interface Employee {
    name: string;
}

const createEmployee = (name: string) => {
    return {
        name: name
    }
}

export { createEmployee }