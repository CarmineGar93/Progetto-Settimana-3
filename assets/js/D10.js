/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]


// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('---------------------------ESERCIZIO A-------------------------------');
let sum = 10 + 21;
console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log('---------------------------ESERCIZIO B-------------------------------');
let randomN = Math.floor(Math.random() * 21);
console.log(randomN);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log('---------------------------ESERCIZIO C-------------------------------');
const me = {
  name: 'Carmine',
  surname: 'Gargiulo',
  age: 31
}

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log('---------------------------ESERCIZIO D-------------------------------');
delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log('---------------------------ESERCIZIO E-------------------------------');
me.skills = ['C++', 'JavaScript'];
console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log('---------------------------ESERCIZIO F-------------------------------');
me.skills.push('PHP');
console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log('---------------------------ESERCIZIO G-------------------------------');
me.skills.pop();
console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

console.log('---------------------------ESERCIZIO 1-------------------------------');
function dice() {
  let random = Math.floor(Math.random() * 6) + 1;
  return random;
};
console.log(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('---------------------------ESERCIZIO 2-------------------------------');
function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};
let a = 10;
let b = 20;
console.log(`Il numero più grande tra ${a} e ${b} è: ${whoIsBigger(a, b)}`);

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('---------------------------ESERCIZIO 3-------------------------------');
function splitMe(string) {
  const arrayString = string.split(" ");
  return arrayString;
};

console.log(splitMe('Salve a tutti piacere di conoscervi'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('---------------------------ESERCIZIO 4-------------------------------');
function deleteOne(string, bool) {
  if (bool) {
    string = string.slice(1);
  } else {
    string = string.slice(0, - 1);
  }
  return string;
}

console.log(deleteOne('Questa è la vita', false));
console.log(deleteOne('Questa è la vita', true));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('---------------------------ESERCIZIO 5-------------------------------');
function onlyletters(string) {
  for (let i = 0; i < 10; i++) {
    string = string.replaceAll(`${i}`, '');
  }
  let string2 = string.split('');
  let a;
  for (let j = 0; j < string2.length; j++) {
    if (string2[j] === ' ' && string2[j + 1] === ' ') {
      a = string2.splice(j, 1);
    }
  }
  string = string2.join('');
  return string;
}

let stringIns = 'Ci son 20 coccodrilli 3 elefanti indiani 4 maiali 99 uccellini';
console.log(`La stringa '${stringIns}' modificata viene cosi: ${onlyletters(stringIns)}`);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log('---------------------------ESERCIZIO 6-------------------------------');
function isThisAnEmail(string) {
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (regexEmail.test(string)) {
    return (`L'email '${string}' è valida`);
  } else {
    return (`L'email '${string}' non è valida`);
  }
};

let eMail = 'pippo@hotmail.com';
let eMail2 = 'pippo.com';
console.log(isThisAnEmail(eMail));
console.log(isThisAnEmail(eMail2));


/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('---------------------------ESERCIZIO 7-------------------------------');
let today = new Date();
function whatDayIsIt() {
  let day = today.getDay();
  let fullDays = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato'];
  return fullDays[day];
}

console.log(`Oggi è ${whatDayIsIt()}`);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log('---------------------------ESERCIZIO 8-------------------------------');
function rollTheDices(n) {
  const result = {
    sum: 0,
    values: [],
  };
  for (i = 0; i < n; i++) {
    result.values.push(dice());
  }
  result.sum = result.values.reduce((somma, val) => somma + val);
  return result;
}

console.log(rollTheDices(4));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('---------------------------ESERCIZIO 9-------------------------------');
function howManyDays(date) {
  let totMilliseconds = Date.parse(today);
  let milliseconds = Date.parse(date);
  let millisecondsPassed = totMilliseconds - milliseconds;
  let days = millisecondsPassed / 86400000;
  days = Math.floor(days);
  return days;
}

let inputDate = new Date(1993, 5, 21);
console.log(`Dalla data ${inputDate} sono passati ${howManyDays(inputDate)} giorni`);


/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('---------------------------ESERCIZIO 10-------------------------------');
let currentMonth = today.getMonth();
let currentDay = today.getDate();
function isTodayMyBirthday(date) {
  if (date.getMonth() === currentMonth && date.getDate() === currentDay) {
    return true;
  } else {
    return false;
  }
}

let inputDate2 = new Date(1992, currentMonth, currentDay);
console.log(`Data di nascita: ${inputDate} - Compleanno: ${isTodayMyBirthday(inputDate)}`);
console.log(`Data di nascita: ${inputDate2} - Compleanno: ${isTodayMyBirthday(inputDate2)}`);


// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log('---------------------------ESERCIZIO 11-------------------------------');
function deleteProp(obj, string) {
  delete obj[string];
  return obj;
}

console.log(deleteProp(me, 'name'));
console.log(deleteProp(me, 'skills'))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('---------------------------ESERCIZIO 12-------------------------------');

function newestMovie() {
  let newest = movies[0].Year;
  let newestFilm = {};
  movies.forEach(item => {
    if (item.Year > newest) {
      newestFilm = { ...item };
      newest = item.Year;
    }
  })
  return newestFilm;
}

console.log(newestMovie());


/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('---------------------------ESERCIZIO 13-------------------------------');
function countMovies() {
  let count = movies.length;
  return count;
};

console.log(`I film contenuti nell'array sono: ${countMovies()}`);


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log('---------------------------ESERCIZIO 14-------------------------------');
function onlyTheYears() {
  const years = movies.map(item => {
    return item.Year;
  })
  return years;
}

console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

console.log('---------------------------ESERCIZIO 15-------------------------------');
function onlyInLastMillennium() {
  const filtered = movies.filter(item => {
    return item.Year <= 2000;
  })
  return filtered;
}

console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('---------------------------ESERCIZIO 16-------------------------------');
function sumAllTheYears() {
  const totYear = movies.reduce((sum, item) => sum + parseInt(item.Year), 0);
  return totYear
}

console.log(`La somma di tutti gli anni dei film nell'array movies è: ${sumAllTheYears()}`);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log('---------------------------ESERCIZIO 17-------------------------------');
function searchByTitle(string) {
  const searched = movies.filter(item => {
    return item.Title.indexOf(string) !== -1;
  });
  return searched;
};

console.log(searchByTitle('Avengers'));


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log('---------------------------ESERCIZIO 18-------------------------------');
function searchAndDivide(string) {
  const filtered = {
    match: [],
    unmatch: [],
  }
  filtered.match = movies.filter(item => {
    return item.Title.indexOf(string) !== -1;
  });
  filtered.unmatch = movies.filter(item => {
    return item.Title.indexOf(string) === -1;
  });
  return filtered;
};

console.log(searchAndDivide('Lord'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('---------------------------ESERCIZIO 19-------------------------------');
function removeIndex(n) {
  let moviesCopy = [...movies];
  moviesCopy.splice(n, 1);
  return moviesCopy;
}

console.log(removeIndex(2));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log('---------------------------ESERCIZIO 20-------------------------------');
findContainer = () => {
  const divContainer = document.getElementById('container');
  return divContainer;
}
console.log(findContainer());


/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('---------------------------ESERCIZIO 21-------------------------------');
findTabCells = () => {
  const cells = document.querySelectorAll('td');
  return cells;
}
console.log(findTabCells());

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('---------------------------ESERCIZIO 22-------------------------------');
function cellPrint() {
  findTabCells().forEach(item => {
    console.log(item.innerText);
  });
};

cellPrint();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

function redLinks() {
  let links = document.getElementsByTagName('a');
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add('red');
  };
};

redLinks();

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addListElement(string) {
  let myList = document.getElementById('myList')
  let newLi = document.createElement('li');
  newLi.innerText = string;
  myList.appendChild(newLi);
};

addListElement('Dormire');

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

function clearList() {
  let myList = document.getElementById('myList');
  myList.innerHTML = '';
}

clearList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addTestClass() {
  let cells = document.querySelectorAll('td');
  cells.forEach(item => {
    item.classList.add('test');
  });
};

addTestClass();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log('---------------------------ESERCIZIO 27-------------------------------');

function halfTree(n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += '*';
    console.log(result);
  }
};

halfTree(10);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log('---------------------------ESERCIZIO 28-------------------------------');

function tree(n) {
  let array = [];
  for (let i = 0; i < (n - 1); i++) {
    array.push(' ');
  }
  array.push('*');
  let stringJoined = array.join('');
  console.log(stringJoined);
  stringJoined = '';
  for (let i = 1; i < n; i++) {
    array.shift();
    array.push('*');
    array.push('*');
    stringJoined = array.join('');
    console.log(stringJoined);
    stringJoined = '';
  }
  console.log('Buon Nataleeeeeeeeeeeee');
}
tree(25);

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log('---------------------------ESERCIZIO 29-------------------------------');
function isItPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 1; i < 50; i++) {
  console.log(`Il numero ${i} è primo: ${isItPrime(i)}`);
}
