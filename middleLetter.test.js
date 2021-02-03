const middleLetter = require('./middleLetter')

describe('Middle Letter', () => {
    it('If the words length is even, return the 2 middle letter', () => {
        expect(middleLetter('test')).toBe('es')
    })
    it('If the word length is odd, return the middle letter', () => {
        expect(middleLetter('testing')).toBe('t')
    })
    it('If the word length is even, return the 2 middle letter', () => {
        expect(middleLetter('middle')).toBe('dd')
    })
})