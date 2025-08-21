// function gradepoints(marks) {
// //     switch (true) {
// //         case (marks >= 80 && marks <= 100):
// //             return 5.00;
// //         case (marks >= 70 && marks < 80):
// //             return 4.00;
// //         case (marks >= 60 && marks < 70):
// //             return 3.50;
// if (marks >= 80)
//     return 5.00;
// else if (marks >= 70) return 4.0;
// else if (marks >= 60) return 3.5;
// else if (marks >= 50) return 3.0;
// else if (marks >= 40) return 2.0;
// else if (marks >= 33) return 1.0;
// else return 0.0;
// }


// function calculateGPA(subjects){
//     let totalPoints = 0;
//     let subjectCount = subjects.length;

//     subjects.forEach(marks => {
//         totalPoints += gradepoints(marks);
//     });

//     let gpa = totalPoints / subjectCount;
//     return gpa.toFixed(2); 
// }

// const subjects = [
//   {name: "Math", marks: 85},
//   {name: "Science", marks: 78},
//   {name: "English", marks: 92},
//   {name: "History", marks: 65},
//   {name: "Geography", marks: 70}                        
// ];

// const student = {
//   name: "XYZ",
//   age: 25,
//   city: "Dhaka"
// };
// console.log("Student Name: " + student.name);
// console.log("Student Age: " + student.age);
// console.log("Student City: " + student.city); 
// // console.log("Subjects and Marks:");
// // // console.log("Subject: " + subjects.name);
// // // subjects.forEach(subject => {
// // //   console.log("Subject: " +subject.name );
// // // });
// // const subjectNames = subjects.map(subject => {
// //     subject.name
// //     //console.log("{Subjects: " + subjectNames.join(", "));
// //     console.log(subject.name + ": " + subject.marks);
// // });
// var result = "Subjects and Marks: { ";
// for (var i = 0; i < subjects.length; i++) {
//     result += subjects[i].name + ": " + subjects[i].marks;
//     if (i < subjects.length - 1) {
//         result += ", ";
//     }
// }
// //console.log("{Subjects: " + subjectNames.join(", "));
// // subjects.map(subject => {
// //     console.log(subject.name + ": " + subject.marks);
// // });
// result = result + " }";
// console.log (result);
// console.log ("");
// console.log("Result: [GPA: " + calculateGPA(subjects.map(subject => subject.marks))+ "]");
// // function showSubjects() {
// //     return subjects.map(function (subject){
// //         return subject.name + ": " + subject.marks;
// //     });
// // }
// // console.log("Result: [GPA: " + calculateGPA(+ showSubjects()) + "]");

const readline = require('readline-sync');
function createStudent(name, age, city) {
    if (!name) throw new Error("Name is required");
    if (!age) throw new Error("Age is required");
    if (!city) throw new Error("City is required");
    return {
        name: name,
        age: age,
        city: city
    };
}

function gradepoints(marks) {
    try{
        if (isNaN(marks)) throw new Error("Marks must be a number");
        if (marks < 0 || marks > 100) throw new Error("Marks must be between 0 and 100");
        if (marks >= 80) return 5.00;
        else if (marks >= 70) return 4.0;
        else if (marks >= 60) return 3.5;
        else if (marks >= 50) return 3.0;
        else if (marks >= 40) return 2.0;
        else if (marks >= 33) return 1.0;
       ;
    }

catch (error) {
        console.error("Error in gradepoints: " + error.message);
        return 0.0; // Default to 0.0 if there's an error
    }
}

function calculateGPA(subjects) {
    let totalPoints = 0;
    let subjectCount = subjects.length;

    subjects.forEach(marks => {
        totalPoints += gradepoints(marks);
    });

    let gpa = totalPoints / subjectCount;
    return gpa.toFixed(2); 
}
try{
    let studentName = readline.question("Enter student name: ");
    let studentAge = readline.questionInt("Enter student age: ");
    let studentCity = readline.question("Enter student city: ");
    const student = createStudent(studentName, studentAge, studentCity);
    console.log("Student Info: [" + student.name + ", " + student.age + ", " + student.city + "]" );
    // console.log("Student Name: " + student.name);
    // console.log("Student Age: " + student.age);
    // console.log("Student City: " + student.city);
    
    const subjects = [];
    let subjectCount = readline.questionInt("Enter number of subjects: ");
    for (let i = 0; i < subjectCount; i++) {
        let subjectName = readline.question("Enter subject name: ");
        let subjectMarks = readline.questionInt("Enter marks for " + subjectName + ": ");
        subjects.push({ name: subjectName, marks: subjectMarks });
    }
    
    var result = "";
    subjects.forEach(function(subject, i) {
        result += subject.name + ": " + subject.marks;
        if (i < subjects.length - 1) { 
            result += ", ";
        }
    });
    console.log("Subjects and Marks: [" + result + "]");
    console.log("Result: [GPA: " + calculateGPA(subjects.map(function(s){ 
        return s.marks; })) + "]");
    
}
catch (err) {
    console.error("Error in student info: " + err.message);
}