import { createNewDog } from '../src/createNewDog'


test('createNewDog function creates a new dog object', () => {
    expect(createNewDog('Piper', 2, 'German Shepherd')).toEqual({ name: 'Piper', age: 2, breed: 'German Shepherd' })
}) 