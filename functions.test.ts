const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray returns an array', () => {
        let arr = ['a', 'b', 'c']
        expect(Array.isArray(arr)).toBe(true)
    }),

    test('shuffleArray is the correct length', () => {
        let arr = ['a', 'b', 'c', 'd', 'e']
        let newArr = shuffleArray(arr)
        expect(arr.length).toEqual(newArr.length)
    })
})