const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = expr.match(/.{1,10}/g)
    let b = []
    let a

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '**********') {
            arr[i] = ' '
            b.push(arr[i])
        } else {
            a = arr[i].match(/.{1,2}/g);
            for (let j = 0; j < a.length; j++) {
                if (a[j] == '10') {
                    a[j] = '.'
                } else if (a[j] == '11') {
                    a[j] = '-'
                } else if (a[j] == '00') {
                    delete a[j]
                }
            }
            b.push(a)
        }
    }
    let arr2 = []
    let p;
    for (let c = 0; c < b.length; c++) {
        if (typeof(b[c]) === 'object') {
            p = b[c].join('');
            arr2.push(p);
        } else if (typeof(b[c]) !== 'object') {
            p = b[c];
            arr2.push(p);
        }
    }

    let str = arr2.map(a => a.split(' ').map(b => MORSE_TABLE[b]).join(' ')).join('');

    return str

}


module.exports = {
    decode
}