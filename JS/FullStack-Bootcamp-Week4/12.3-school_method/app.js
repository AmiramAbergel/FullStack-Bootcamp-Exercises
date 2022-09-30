const school = {
    teachers: [
        {
            id: 1,
            name: "Pinchas",
            subjects: ["chemistry", "biology", "physics"],
            students: [],
            capacityLeft: 3,
        },
        {
            id: 2,
            name: "Williams",
            subjects: ["history", "ethics"],
            students: [],
            capacityLeft: 2,
        },
    ],
    students: [
        {
            id: 10,
            name: "Jennifer",
            age: 20,
        },
        {
            id: 11,
            name: "Howard",
            age: 23,
        },
        {
            id: 12,
            name: "Old-Timmy",
            age: 86,
        },
        {
            id: 13,
            name: "Houston",
            age: 21,
        },
    ],
};

//1
const findPerson = (type, id) => {
    const chosenType = school[type].find((t) => t.id === id);
    return chosenType;
};

//2
const assignStudent = (studentID, subject) => {
    const studentByID = findPerson("students", studentID);
    const teacherByCapAndSub = school.teachers.filter(
        (t) => t.capacityLeft !== 0 && t.subjects.includes(subject)
    );
    let chosenTeacher = teacherByCapAndSub[0];
    //console.log(teacherByCapAndSub);
    //console.log(chosenTeacher);
    if (teacherByCapAndSub.length === 0) {
        return `Sorry, no available teachers left.`;
    } else {
        let chosenTeacher = teacherByCapAndSub[0];
        chosenTeacher.students.push(studentByID);
        chosenTeacher.capacityLeft--;
    }
    console.log(school);
};
//3
const assignTeachersSubject = (teacherID, newSubject) => {
    const teacherByID = findPerson("teachers", teacherID);
    if (teacherByID.subjects.includes(newSubject) === false) {
        teacherByID.subjects.push(newSubject);
    }
    console.log(school);
};

//4
const addStudent = (school, id, name, age) => {
    const student = {
        id: id,
        name: name,
        age: age,
    };
    school.students.push(student);
    console.log(school);
};

//--Tests--

//1
// findPerson("students", 12);
// findPerson("teachers", 2);

//2
//assignStudent(12, "history");

//3
//assignTeachersSubject(2, "biology");
//assignTeachersSubject(2, "history");

//4
addStudent(school, 14, "Tony", 25);
