import { stringFunction } from "../src/index";

test('function returns array containing string', () => {
    expect(stringFunction('something')).toEqual(['something'])
}) 