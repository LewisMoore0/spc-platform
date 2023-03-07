import { addDogToDayCare } from '../src/addDogToDayCare'


test('addDogToDayCare adds given Dog argument to array', () => {
    let dog = { name: 'Piper' }

    expect(addDogToDayCare(dog)).toEqual([{ name: 'Piper'}])
}) 