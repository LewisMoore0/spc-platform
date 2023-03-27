import { addDogToDayCare } from '../src/addDogToDayCare'


test('addDogToDayCare adds given Dog argument to array', () => {
    let dog = { name: 'Piper' }

    expect(addDogToDayCare(dog)).toEqual([{ name: 'Piper'}])
}) 

test('daycareArray cannot contain more than 10 elements', () => {
    addDogToDayCare({ name: 'Piper'})
    addDogToDayCare({ name: 'Piper'})
    addDogToDayCare({ name: 'Piper'})
    addDogToDayCare({ name: 'Piper'})
    addDogToDayCare({ name: 'Piper'})
    addDogToDayCare({ name: 'Piper'})
    addDogToDayCare({ name: 'Piper'})
    addDogToDayCare({ name: 'Piper'})
    addDogToDayCare({ name: 'Piper'})
    addDogToDayCare({ name: 'Piper'})

    expect(addDogToDayCare({ name: 'Piper'})).toEqual('The maximum number of dogs has been reached')
})