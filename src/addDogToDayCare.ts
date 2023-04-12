import { Dog } from "./createNewDog"
import { Entry } from "./createEntry"


const addDogToDayCare = (dayCare: Entry, dog: Dog): Entry|String => {
    if (dayCare.dogs.length === 10) {
        return 'The maximum number of dogs has been reached'
    }
    dayCare.dogs.push(dog)
    return dayCare

}

export { addDogToDayCare }