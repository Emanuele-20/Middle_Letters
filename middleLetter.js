function middleLetter(word) {
    var firstLetter = Math.floor((word.length / 2)) - 1
    var secondLetter = Math.floor((word.length / 2))
    var length = word.length

    if (length % 2 === 0){
        return word[firstLetter] + word[secondLetter]
    } else if ((length % 2 !== 0)) {
        return word[secondLetter]
    }
        
};

module.exports =  middleLetter;


