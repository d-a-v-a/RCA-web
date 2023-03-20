"use strict";
const characters = ['#', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И',
    'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С',
    'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ',
    'Э', 'Ю', 'Я', ' ', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', '0', ','];
let str = '    .\n' +
    '⣿⣿⣿⣿⣿⢙⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠛⢋⠉⠘⣿⣿\n' +
    '⣿⣿⣿⣿⡏⠄⠄⠄⠙⠻⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠉⠄⠄⠄⠄⠁⢸⣿\n' +
    '⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠈⠙⢿⣿⣿⣿⡿⠋⠄⠄⠄⠄⠄⢀⠄⠄⢹⣿\n' +
    '⣿⣿⣿⣿⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⢀⠄⠄⢸⣿\n' +
    '⣿⣿⣿⠿⢤⣤⡔⠒⣶⣶⣶⣶⣶⡖⠒⠒⠒⠒⣶⣖⠒⣶⣦⣤⣤⣄⣸⣿\n' +
    '⣿⣷⡀⠄⠈⣿⣿⡄⢻⣿⣿⣿⣿⣿⡄⠄⠄⠄⢹⣿⡆⢹⣿⣿⣿⣿⣿⣿\n' +
    '⣿⣿⣷⠄⠄⠸⣿⣷⡈⣿⣿⡿⠹⣿⣿⡀⠄⠄⠄⢻⣿⡄⢻⣿⣿⣿⣿⣿\n' +
    '⣿⣿⣿⣷⣾⣷⣿⣿⣿⣿⡿⠁⠄⢻⣿⣿⣿⣿⣿⣿⣿⣷⣼⣿⣿⣿⣿⣿\n' +
    '⣿⣿⣿⣿⠄⣿⣿⣿⣿⡿⠁⠄⣤⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣿\n' +
    '⣿⣿⣿⠟⠄⠄⠉⠉⠉⠄⠄⡿⠛⢻⠈⠙⠟⠛⠛⠻⠿⠿⢿⠿⠿⠁⢀⣿\n' +
    '⣿⣿⣿⣿⡝⠐⠄⠄⠄⠄⠄⣀⠄⠄⠄⠄⠩⠐⡀⠄⠄⠈⠉⢿⣿⣿⣿⣿\n' +
    '⣿⣿⣿⣿⣿⡖⠄⣀⠄⠄⠛⠻⣿⣿⠟⠛⠄⠄⠄⠄⠄⣀⣴⣿⣿⣿⣿⣿\n' +
    '⣿⣿⣿⣿⣿⠇⣠⠊⠈⠐⠤⢤⣀⣀⣠⠤⣀⣀⣀⠛⠉⠄⠉⠻⣿⣿⣿⣿\n' +
    '⣿⣿⣿⡿⢋⡰⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠈⢿⣿⣿\n' +
    '⣿⣿⡋⠐⢰⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⣿⣿';
let abba = str.split('');
abba.forEach(el => {
    if (!(el in characters)) {
        characters.push(el);
    }
});
console.log(characters);
const inputP = document.getElementById('inpP');
const inputQ = document.getElementById('inpQ');
const inputMessage = document.getElementById('inpMassage');
const button = document.getElementById('btn');
const answer = document.getElementById('answerMassage');
const eNumber = document.querySelector('.e');
const dNumber = document.querySelector('.d');
const NNumber = document.querySelector('.n');
const inputD = document.getElementById('inpD');
const inputN = document.getElementById('inpN');
const inputEncryption = document.getElementById('inpEncryption');
const buttonDeccoding = document.getElementById('btnDec');
const decoding = document.getElementById('decodingMassage');
buttonDeccoding.addEventListener('click', () => {
    const d = +inputD.value;
    const n = +inputN.value;
    const encryption = inputEncryption.value.split(' ');
    decoding.innerText = RSA_Dedoce(encryption, d, n);
});
button.addEventListener('click', () => {
    const p = +inputP.value;
    const q = +inputQ.value;
    if ((p !== q) && IsTheNumberSimple(p) && IsTheNumberSimple(q) && (p >= 5) && (q >= 5)) {
        const s = inputMessage.value.toUpperCase();
        const n = p * q;
        const m = (p - 1) * (q - 1);
        const e = Calculate_e(m);
        const d = Calculate_d(e, m);
        eNumber.innerText = e.toString();
        dNumber.innerText = d.toString();
        NNumber.innerText = n.toString();
        const listResult = RSA_Endoce(s, e, n);
        answer.classList.remove('red');
        let encryption = listResult.join(' ');
        answer.innerText = encryption;
        inputD.value = d.toString();
        inputN.value = n.toString();
        inputEncryption.value = encryption;
    }
    else {
        answer.classList.add('red');
        answer.innerText = 'Ввод невалиден';
    }
});
function IsTheNumberSimple(n) {
    if (n < 2)
        return false;
    if (n === 2)
        return true;
    const l = Math.floor(Math.sqrt(n)) + 1;
    for (let i = 2; i <= l; i++) {
        if (n % i == 0)
            return false;
    }
    return true;
}
function Calculate_e(m) {
    let e = m - 1;
    const l = Math.floor(Math.sqrt(m)) + 1;
    for (let i = 2; i <= l; i++) {
        if ((m % i == 0) && (e % i == 0)) // если у m и e нет общих делителей
         {
            e--;
            i = 1;
        }
    }
    return e;
}
function Calculate_d(e, m) {
    let d = 10;
    while (true) {
        if ((d * e) % m == 1)
            break;
        else
            d++;
    }
    return d;
}
function RSA_Endoce(s, e, n) {
    const result = [];
    let bi;
    for (let i = 0; i < s.length; i++) {
        const index = characters.indexOf(s[i]);
        let e_ = BigInt(e);
        let n_ = BigInt(n);
        bi = BigInt(index);
        bi = bi ** e_;
        bi = bi % n_;
        result.push(bi);
    }
    return result;
}
function RSA_Dedoce(input, d, n) {
    const result = [];
    let bi;
    const d_ = BigInt(d);
    const n_ = BigInt(n);
    input.forEach(item => {
        bi = BigInt(+item);
        bi = bi ** d_;
        bi = bi % n_;
        const index = +(bi.toString());
        result.push(characters[index]);
    });
    return result.join('');
}
