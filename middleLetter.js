function middleLetter(word) {
    // var secondLetter = Math.floor((word.length / 2))

    if ((typeof word !== 'string' || word.length === 0 || /^\s*$/.test(word))){
        throw new Error ("You must provide a string")
    }else if (word.length % 2 === 0){
        return word[Math.floor((word.length / 2)) - 1] + word[Math.floor((word.length / 2))]
    } else if ((word.length % 2 !== 0)) {
        return word[Math.floor((word.length / 2))]
    }
        
};

module.exports =  middleLetter;


