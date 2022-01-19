/**
 * Find a pair of students with the same birthday
   Input: object of student (name, bday)
   Output: object of student names or None
 */

function birthday_match (students) {
  size_class = students.length;

  if (size_class <= 0) {
    return null;
  }

  for (let i = 0; i < size_class; i++) {
    let currentBday = students[i].bday;

    for(let j = 0; j < i; j++) {
      let nextBday = students[j].bday;

      if (currentBday === nextBday) {
        return `${students[i].name} and ${students[j].name}`;
      }
    }
  }
  return null;
}

students = [
  {
    name: "Walter",
    bday: "18/04/2002"
  },
    {
    name: "Joao",
    bday: "18/02/2002"
  },
    {
    name: "Maria",
    bday: "18/03/2002"
  },
  {
    name: "Vips",
    bday: "18/03/2002"
  },
];


console.log(birthday_match(students));
