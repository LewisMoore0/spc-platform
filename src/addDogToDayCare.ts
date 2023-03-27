import { Dog } from "./createNewDog"

let daycareArray: Dog[] = []

let addDogToDayCare = (dog: Dog) => {
    if (daycareArray.length === 10) {
        return 'The maximum number of dogs has been reached'
    }
    daycareArray.push(dog)
    return daycareArray
}

export { addDogToDayCare }