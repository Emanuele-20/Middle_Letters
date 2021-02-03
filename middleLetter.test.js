const hello = require('./middleLetter')

describe('Return hello', () => {
    it('Return hello', () => {
        expect(hello('Ema')).toBe('Ema hello')
    })
})