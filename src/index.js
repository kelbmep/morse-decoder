const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = '';
    let result = '';
    for (let index = 0; index < expr.length / 10; index++) {
        let element = expr.substring(index * 10 + 0, index * 10 + 10);
        arr = '';
        for (let index1 = 0; index1 < 5; index1++) {
            if(element[2 * index1] == '0')
                continue;
            else if (element[2 * index1] == '1')
            {
                if(element[2 * index1 + 1] == '0')
                    arr += '.';
                else 
                    arr += '-';
            }
            else if(element[2 * index1] == '*')
            {
                arr = ' ';
                index1 = 5;
            }
        }
    if(arr == ' ')
        result += arr;
    else
        result += MORSE_TABLE[arr];
    }
    return result;
}

module.exports = {
    decode
}