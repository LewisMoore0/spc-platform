import { createEntry } from '../src/createEntry'

test('createEntry creates an entry object with date and dogs properties', () => {
    expect(createEntry('27/03/2023', [])).toEqual({ date: '27/03/2023', dogs: [] })
}) 