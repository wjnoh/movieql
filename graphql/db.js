export const people = [
  {
    id: 0,
    name: "wooje",
    age: 27,
    gender: "male"
  },
  {
    id: 1,
    name: "hohyun",
    age: 28,
    gender: "male"
  },
  {
    id: 2,
    name: "kyungchul",
    age: 27,
    gender: "male"
  },
  {
    id: 3,
    name: "jiwon",
    age: 23,
    gender: "female"
  },
  {
    id: 4,
    name: "hyunjoo",
    age: 27,
    gender: "female"
  }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id);
  return filteredPeople[0];
};
