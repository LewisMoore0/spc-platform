import { createEmployee } from '../src/createEmployee'


test('createNewDog function creates a new dog object', () => {
    expect(createEmployee('Lewis')).toEqual({ name: 'Lewis' })
}) 