import { createEmployee } from '../src/createEmployee'


test('creatEmployee function creates a new employee object', () => {
    expect(createEmployee('Lewis')).toEqual({ name: 'Lewis' })
}) 