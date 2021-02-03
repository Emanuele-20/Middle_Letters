const middleLetter = require('./middleLetter')

describe('Middle Letter', () => {
    it('If the words length is even, return the 2 middle letter', () => {
        expect(middleLetter('test')).toBe('es')
    })
})