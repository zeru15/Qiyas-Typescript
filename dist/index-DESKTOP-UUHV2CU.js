"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const polyfill_1 = require("@js-temporal/polyfill");
const assessment_model_1 = require("./models/assessment.model");
const enrollment_model_1 = require("./models/enrollment.model");
const student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: polyfill_1.Temporal.Now.instant(),
};
// student.id = "STU-999";
// console.log(student.gpa.toFixed(2));
// console.log(student.gpa?.toFixed(2)?? "Not Yet Graded");
// function processStudent(raw: unknown) {
//     if (isStudent(raw)) {
//         const gpaDisplay = raw.gpa?.toFixed(2) ?? "Not Yet Graded";
//         console.log(`Student ${raw.name} GPA:${gpaDisplay}`);
//     } else {
//         console.error("Invalid student data received");
//     }
// }
// processStudent({
//     id: "STU-001",
//     name: "Hana",
//     gpa: 3.7
// })
// processStudent(42);
// console.log(parseStudent({id: "STU-001", name: "Hana"}));
// console.log(parseStudent({id: 42, name: "Test"}));
const quiz = {
    id: "QUIZ-001",
    kind: "quiz",
    title: "SQL Basics",
    correctAnswers: 8,
    totalQuestions: 10
};
const lab = {
    id: "LAB-001",
    kind: "lab",
    title: "REST API Project",
    functionalityScore: 85,
    codeQualityScore: 90
};
console.log(`QUIZ Grade: ${(0, assessment_model_1.calculateGrade)(quiz)}%`);
console.log(`LAB Grade: ${(0, assessment_model_1.calculateGrade)(lab)}%`);
const pending = {
    status: "PENDING",
    requestedAt: polyfill_1.Temporal.Now.instant(),
    studentId: "STU-001",
    courseId: "CRS-101"
};
console.log((0, enrollment_model_1.describeEnrollment)(pending));
