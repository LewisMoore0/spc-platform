import { addDogToDayCare } from '../src/addDogToDayCare'
import { createEntry } from '../src/createEntry'
import { createNewDog } from '../src/createNewDog'

test('addDogToDayCare adds dog to dogs array on given entry object', () => {
    let dayCareEntry = createEntry('3/4/23', [])
    let dogEntry = createNewDog('Piper', 'German Shepherd', '3')


    expect(addDogToDayCare(dayCareEntry, dogEntry)).toEqual({
        date: '3/4/23',
        dogs: [dogEntry]
    })
})