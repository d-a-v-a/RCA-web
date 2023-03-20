const characters: string[] = ['#', 'А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И',
  'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С',
  'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ь', 'Ы', 'Ъ',
  'Э', 'Ю', 'Я', ' ', '1', '2', '3', '4', '5', '6', '7',
  '8', '9', '0', ',']

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
    '⣿⣿⡋⠐⢰⠁⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠄⠘⣿⣿'

let abba = str.split('')

abba.forEach(el => {
  if (!(el in characters)) {
    characters.push(el)
  }
})

console.log(characters)


const inputP = document.getElementById('inpP') as HTMLInputElement
const inputQ = document.getElementById('inpQ') as HTMLInputElement
const inputMessage = document.getElementById('inpMassage') as HTMLInputElement
const button = document.getElementById('btn') as HTMLButtonElement
const answer = document.getElementById('answerMassage') as HTMLElement
const eNumber = document.querySelector('.e') as HTMLElement
const dNumber = document.querySelector('.d') as HTMLElement
const NNumber = document.querySelector('.n') as HTMLElement

const inputD = document.getElementById('inpD') as HTMLInputElement
const inputN = document.getElementById('inpN') as HTMLInputElement
const inputEncryption = document.getElementById('inpEncryption') as HTMLInputElement
const buttonDeccoding = document.getElementById('btnDec') as HTMLButtonElement
const decoding = document.getElementById('decodingMassage') as HTMLElement


buttonDeccoding.addEventListener('click', () => {
  const d = +inputD.value;
  const n = +inputN.value;
  const encryption: string[] = inputEncryption.value.split(' ');

  decoding.innerText = RSA_Dedoce(encryption, d, n);

})

button.addEventListener('click', () => {
  const p = +inputP.value
  const q = +inputQ.value
  if ((p !== q) && IsTheNumberSimple(p) && IsTheNumberSimple(q) && (p >= 5) && (q >=5)) {
    const s: string = inputMessage.value.toUpperCase();

    const n: number = p * q;
    const m: number = (p - 1) * (q - 1);
    const e: number = Calculate_e(m);
    const d: number = Calculate_d(e, m);

    eNumber.innerText = e.toString();
    dNumber.innerText = d.toString();
    NNumber.innerText = n.toString();


    const listResult = RSA_Endoce(s, e, n);

    answer.classList.remove('red');
    let encryption = listResult.join(' ');
    answer.innerText = encryption
    inputD.value = d.toString();
    inputN.value = n.toString();
    inputEncryption.value = encryption;

  } else {
    answer.classList.add('red');
    answer.innerText = 'Ввод невалиден'
  }
})




function IsTheNumberSimple(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  const l: number = Math.floor(Math.sqrt(n)) + 1;
  for (let i = 2; i <= l; i++) {
    if (n % i == 0)
      return false;
  }
  return true;
}

function Calculate_e(m: number): number {
  let e = m - 1;
  const l: number = Math.floor(Math.sqrt(m)) + 1;
  for (let i = 2; i <= l; i++) {
    if ((m % i == 0) && (e % i == 0)) // если у m и e нет общих делителей
    {
      e--;
      i = 1;
    }
  }
  return e;
}

function Calculate_d(e: number, m: number): number {
  let d = 10;

  while (true) {
    if ((d * e) % m == 1)
      break;
    else
      d++;
  }

  return d;
}

function RSA_Endoce(s: string, e: number, n: number): bigint[] {
  const result: bigint[] = [];
  let bi: bigint

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

function RSA_Dedoce(input: string[], d: number, n: number): string {
  const result: string[] = [];
  let bi: bigint;
  const d_ = BigInt(d);
  const n_ = BigInt(n);

  input.forEach(item => {
    bi = BigInt(+item);
    bi = bi**d_;
    bi = bi % n_;
    const index = +(bi.toString());
    result.push(characters[index]);
  })
  return result.join('')
}