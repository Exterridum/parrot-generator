/**
 * Created by matejkolimar on 20/07/2017.
 */
const fs = require('fs');
const yargs = require('yargs');
const bigLettersGenerator = require('./generators/bigLettersGenerator.js');
const smallLettersGenerator = require('./generators/smallLettersGenerator.js');

const args = yargs
    .options({
        textSize: {
            demand: true,
            alias: 's',
            describe: 'Choose small or big letters. e.g -tt small',
            string: true
        },
        text: {
            demand: true,
            alias: 't',
            describe: 'Text you want to convert into emoji. Only uppercase is supported. e.g -t ABCD, with space -t "AB CD"',
            string: true
        },
        letter: {
            demand: true,
            alias: 'l',
            describe: 'Emoji code you want to use for letters. e.g -l :android:',
            string: true
        },
        background: {
            demand: true,
            alias: 'b',
            describe: 'Emoji you want to use for background. e.g -b :ios:',
            string: true
        }

    })
    .help()
    .alias('help', 'h')
    .argv;

var textSize = args.textSize;

if (textSize === 'big') {
    bigLettersGenerator.generateBigEmojiText(args.text, args.letter, args.background);
    console.log('Big letters was generated into letters.txt file in project folder');
} else if (textSize === 'small') {
    smallLettersGenerator.generateSmallEmojiText(args.text, args.letter, args.background);
    console.log('Small letters was generated into letters.txt file in project folder');
} else {
    console.log('Command not recognized')
}