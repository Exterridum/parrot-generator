/**
 * Created by matejkolimar on 21/07/2017.
 */
var fs = require('fs');
var letters = require('./../symbols/smallLetters.js')
var lton = require('letter-to-number');
var str_replace = require('str_replace');


var generateSmallEmojiText = (text, emoji, background, output) => {
    var emojiText = [];
    for(i = 0;i < text.length; i++) {
        if (text[i].match(/[A-Z ]/i) === null){
            console.log('Invalid letter use only A-Z uppercase letters.');
            return;
        } else if (isNaN(lton(text[i]))) {
            emojiText.push(letters.abc[26]);
        } else {
            var originalLetter = readLetter(text[i]);
            var emojiLetter = generateEmojiLetter(originalLetter, emoji, background);
            emojiText.push(emojiLetter);
        }
    }
    //Clean text file
    fs.writeFileSync('letters.txt', '', function (err) {
        if (err) throw err;
    });
    for(j = 1; j <= 5; j++){
        insertLine(emojiText, text.length, j);
    }

    //Open file and get content from it.
    fs.readFile('letters.txt', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        //In content replace all , with empty space
        fileContent = str_replace(',',' ', data);
        if (output === 'console') {
            //Then write this replaced content into console
            console.log(fileContent);
        } else {
            //Then write this replaced content into file
            fs.writeFileSync('letters.txt', fileContent, function (err) {
                if (err) throw err;
            });
        }

    });
};

var readLetter = (letter) => {
    return letters.abc[lton(letter)];
};

var insertLine = (emojiText, length, row) => {
    var abc = [];
    for(i = 0;i < length; i++) {
        r1 = emojiText[i]["r"+ row.toString()];
        abc.push(r1);
    }
    abc.push("\n");
    fs.appendFile('letters.txt', abc , function (err) {
        if (err) throw err;
    });
}

var generateEmojiLetter = (letter, emoji, background) => {
    var emojiLetter = letter;
    for(x = 1; x <= 5; x++){
        emojiLetter["r"+ x.toString()] = str_replace('#', emoji, letter["r"+ x.toString()]);
        emojiLetter["r"+ x.toString()] = str_replace('█', background, letter["r"+ x.toString()]);
    }
    return emojiLetter;
}


module.exports = {
    generateSmallEmojiText,
}