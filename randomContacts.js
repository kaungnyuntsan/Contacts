// goal   [ { key: 1, name: 'Emanuel Sexton', phone: '708-833-506' },
// { key: 2, name: 'Joel Frank', phone: '433-352-239' }, ]

const numContacts = 100;

const firstNames = [
  "Yaritza",
  "Emanuel",
  "Maria",
  "Bryant",
  "Van",
  "Charles",
  "Jordon",
  "Kyle",
  "Leo",
  "Jensen",
  "Joel",
  "Tianna",
  "Keagan",
  "Shiloh",
  "Jaquan",
  "Adeline",
  "Dayami",
  "Mikayla",
  "Edith",
  "Dean",
  "Dillan",
  "Carina",
  "Aria",
  "Isabell",
  "Tiana",
  "Alison",
  "Bailey",
  "Reagan",
  "Makayla",
  "Quinton",
  "Irene",
  "Anastasia",
  "Hayley",
  "Maribel",
  "Mina",
  "Keegan",
  "Cynthia",
  "Davon",
  "Donna",
  "Natalya",
  "Adeline",
  "Dayami",
  "Mikayla",
  "Edith",
  "Dean",
  "Dillan",
  "Carina",
  "Aria",
  "Isabell",
  "Tiana",
  "Alison",
  "Bailey",
  "Reagan",
  "Makayla",
  "Quinton",
  "Irene",
  "Anastasia",
  "Hayley",
  "Maribel",
];

const lastNames = [
  "Pruitt",
  "Moody",
  "Oneill",
  "Martinez",
  "Chavez",
  "Atkinson",
  "Carroll",
  "Bryan",
  "Heath",
  "Parker",
  "Forbes",
  "Dominguez",
  "Booker",
  "Hodge",
  "Gould",
  "Jones",
  "Nielsen",
  "Shaw",
  "Meyer",
  "Mcpherson",
  "Pena",
  "Trevino",
  "Ellis",
  "Sellers",
  "Poole",
  "Moyer",
  "Quinn",
  "Lambert",
  "Gray",
  "Lee",
  "Welch",
  "Sexton",
  "Drake",
  "Beard",
  "Reyes",
  "Mills",
  "Bird",
  "Frank",
  "Livingston",
  "Yates",
];

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomName = () => {
  const firstNamesRange = firstNames.length - 1;
  const lastNamesRange = lastNames.length - 1;
  const randomFirstName = firstNames[getRandomInt(firstNamesRange)];
  const randomLastName = lastNames[getRandomInt(lastNamesRange)];
  return `${randomFirstName} ${randomLastName}`;
};

const getRandomPhone = () => {
  const randInt1 = getRandomInt(999, 100);
  const randInt2 = getRandomInt(999, 100);
  const randInt3 = getRandomInt(999, 100);
  return `${randInt1}-${randInt2}-${randInt3}`;
};

const getRandomContact = () => ({
  name: getRandomName(),
  phone: getRandomPhone(),
});

const addKey = (contact, key) => ({ key, ...contact });

// console.log(getRandomInt())
// console.log(getRandomName());
// console.log(getRandomPhone());
// console.log(getRandomContact());

export const objSortByName = (a, b) => {
  const nameA = a.name.toUpperCase(); // ignore upper and lowercase
  const nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}


// const randomContacts = () =>
export default Array.from({ length: numContacts }, getRandomContact).map(
  addKey
);

// export { randomContacts };
// console.log( randomContacts());
