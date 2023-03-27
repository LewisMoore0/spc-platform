import { Dog } from "./createNewDog"

let daycareArray: Dog[] = []

let addDogToDayCare = (dog: Dog) => {
    daycareArray.push(dog)
    return daycareArray
}

export { addDogToDayCare }