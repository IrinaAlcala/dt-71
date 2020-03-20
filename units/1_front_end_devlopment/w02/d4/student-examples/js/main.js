// Some data we can work with
const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's
  
  const inventorsBornIn1500 = inventors.filter(sciencyperson => sciencyperson.year > 1500 && sciencyperson.year <1600);
  
  // Array.prototype.map()
  // 2. Give us an array of the inventors' first and last names
  
  const inventorsFullNames = inventors.map(sciencyperson => sciencyperson.first + "" + sciencyperson.last);
  
  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest
  
const inventorsOldtoYoung = inventors.sort((a, b) => a.year - b.year);
  
  // 4. Sort the inventors by years lived
  
const inventorsByYearsLived = inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year));
  
  // Array.prototype.reduce()
  // 5. How many years did all the inventors live?
  
const combinedYearsScientistsLived = inventors.reduce((acc, sciencyperson) => acc + (sciencyperson.passed - sciencyperson.year), 0);  
  
  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
  
const peopleFirstLastName = people.map(human => human.split(",").reverse().join(' '));

  
  const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  // Array.prototype.reduce()
  // 7. Count the number of instances for each of the data items.
  // Hint:  Return an object where the keys are 'car', 'truck', etc. and the values are the count.

const newDataOBj = data.reduce(function(accobj, vehicle) {
  accobj[vehicle] = accobj[vehicle] ? accobj[vehicle] + 1 : 1;
  return accobj;
}, {})

console.log(newDataOBj);

const dataTypeObj = {
  car: data.filter(vehicle => vehicle === 'car').length,
  truck: data.filter(vehicle => vehicle === 'truck').length,
  walk: data.filter(vehicle => vehicle === 'walk').length,
  bike: data.filter(vehicle => vehicle === 'bike').length,
  van: data.filter(vehicle => vehicle === 'van').length
}


  
  const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  
  
  // Array.prototype.some()
  // 8. Is at least one person 19 or older?
  
  const isSomeoneOlderThan19 = devs.some(person => person.year < 2001);
  
  
  // Array.prototype.every()
  // 9. Is everyone 19 or older?
  
  const isEveryoneOlderThan19 = devs.every(person => person.year > 2001);
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  // Array.prototype.find()
  // 10. Find the comment with the id of 823423
  
  const idOf823423 = comments.find(instance => instance.id === 823423);
  
  // Array.prototype.findIndex()
  // 11. Find the index of the comment with an id of 123523
  
  const idxOfId123523 = comments.findIndex(instance => instance.id = 123523);

  //

  class Pet {
    constructor(name, owner) {
      this.name = name;
    }
    walk() {
      console.log("walka walka")
    }
  };

  class Dog extends Pet {
    constructor(name, owner) {
      super(name, owner);
      this.price = 20
    }
    bark() {
      console.log("bark")
    }
    chaseTail() {
      console.log("oh boy oh boy oh boy")
    }
    getPrice() {
      return this.price
    }
  }

  const peter = new Dog("Peter")
  console.log(peter)
  console.log(peter.getPrice) 
 