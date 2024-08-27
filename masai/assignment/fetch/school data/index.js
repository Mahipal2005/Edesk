const school = {
  name: "XYZ School",
  establishYear: 1990,
  departments: {
    math: { teachers: 5, students: 150 },
    science: { teachers: 4, students: 120 },
    history: { teachers: 3, students: 100 },
    english: { teachers: 4, students: 130 },
  },
  courses: ["math", "science", "history", "english"],
  students: [
    {
      name: "Alice",
      className: "Grade 5",
      scores: { math: 95, science: 88, history: 85, english: 92 },
    },
    {
      name: "Bob",
      className: "Grade 4",
      scores: { math: 80, science: 78, history: 92, english: 85 },
    },
    {
      name: "Charlie",
      className: "Grade 5",
      scores: { math: 88, science: 90, history: 78, english: 88 },
    },
    {
      name: "Diana",
      className: "Grade 4",
      scores: { math: 92, science: 85, history: 88, english: 90 },
    },
  ],
};

//TODO:problem 10 countCalculation
function countCalculation(data) {
  let { name, establishYear, departments, courses, students } = data;

  let { math, history } = departments;
  obj = {};
  obj.mathTeachersCount = math.teachers;
  obj.historyTeachersCount = history.teachers;
  obj.mathStudentsCount = math.students;
  obj.historyStudentsCount = history.students;

  return obj;
}

console.log(countCalculation(school));

//TODO:problem 11 findTopStudent
function findTopStudent(data, courseName) {
  let { students } = data;
  let max = 0;
  let topSutdent = null;
  students.forEach((element, i) => {
    let { scores } = element;
    if (scores[courseName] > max) {
      max = scores[courseName];
    }
  });
  students.forEach((element, i) => {
    let { scores } = element;
    if (scores[courseName] == max) {
      topSutdent = element;
    }
  });
  return topSutdent;
}
console.log(findTopStudent(school, "math"));

//TODO:Problem 12: addNewDept
function addNewDept(data, newDepartment) {
  let { name, establishYear, departments, courses, students } = data;
  departments[newDepartment.name] = {
    teachers: newDepartment.teachers,
    students: newDepartment.students,
  };
  return data;
}
let newDepartment = {
  name: "art",
  teachers: 2,
  students: 50,
};

console.log(addNewDept(school, newDepartment));

//TODO:Problem 13: highestStudentCountDepartment
function highestStudentCountDepartment(data) {
  let { name, establishYear, departments, courses, students } = data;
  max = 0;
  deptNme = "";
  for (let key in departments) {
    if (departments[key].students > max) {
      max = departments[key].students;
      deptNme = key;
    }
  }
  return deptNme;
}

console.log(highestStudentCountDepartment(school));

//TODO:Problem 14: generateGreeting
function generateGreeting(name, language = "english") {
  let greetings = {
    english: "Hello",
    French: "Bonjour",
    Spanish: "¡Hola",
    German: "Hallo",
  };
  return `${greetings[language]}, ${name}`;
}
console.log(generateGreeting("Alice"));
console.log(generateGreeting("Bob", "Spanish"));
console.log(generateGreeting("Charlie", "French"));
