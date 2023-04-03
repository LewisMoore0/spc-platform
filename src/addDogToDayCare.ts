import { Dog } from "./createNewDog"
import { Entry } from "./createEntry"


let addDogToDayCare = (dayCare: Entry, dog: Dog) => {
    if (dayCare.dogs.length === 10) {
        return 'The maximum number of dogs has been reached'
    }
    dayCare.dogs.push(dog)
    return dayCare

}

export { addDogToDayCare }