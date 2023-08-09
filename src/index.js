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
  const parts = [];
  let res = '';

  for (let i = 0; i < expr.length; i += 10) {
    parts.push(expr.slice(i, i + 10));
  }

  for (let part of parts) {
    let encoded = '';

    if (part === '**********') {
      res += ' ';
      continue;
    }

    for (let i = 0; i < 10; i += 2) {
      if (part[i] + part[i + 1] === '10') {
        encoded += '.';
      } else if (part[i] + part[i + 1] === '11') {
        encoded += '-';
      }
    }

    res += MORSE_TABLE[encoded];
  }

  return res;
}

module.exports = {
  decode,
};
