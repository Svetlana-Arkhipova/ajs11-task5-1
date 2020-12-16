import Character from '../character';

test('check name length', () => {
    expect(() => {let one = new Character('1', 10, 10)}).toThrow();

    expect(() => {let moreTen = new Character('12345678900', 10, 10)}).toThrow();

    expect(() => {let two = new Character('12', 10, 10)}).not.toThrow();

    expect(() => {let some = new Character('some', 10, 10)}).not.toThrow();

    expect(() => {let ten = new Character('1234567890', 10, 10)}).not.toThrow();
});
