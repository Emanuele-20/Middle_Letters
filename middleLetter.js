function middleLetter(word) {
    

    if (word.length % 2 === 0){
        return word[Math.floor((word.length / 2)) - 1 ] + word[Math.floor((word.length / 2)) ]
    } else if ((word.length % 2 !== 0)) {
        return word[Math.floor((word.length / 2))]
    }
        
};

module.exports =  middleLetter;


