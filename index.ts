import {Temporal} from "@js-temporal/polyfill";
import {Student, isStudent, parseStudent } from "./models/student.model";
import { AssessmentItem, calculateGrade } from "./models/assessment.model";
import { EnrollmentStatus, describeEnrollment } from "./models/enrollment.model";
import { ApiResponse, renderResponse } from "./models/api-response.model";
import { Course } from "./models/course.model";

const student: Student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: Temporal.Now.instant(),
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


const quiz: AssessmentItem = {
    id: "QUIZ-001",
    kind: "quiz",
    title: "SQL Basics",
    correctAnswers: 8,
    totalQuestions: 10
}

const lab: AssessmentItem = {
    id: "LAB-001",
    kind: "lab",
    title: "REST API Project",
    functionalityScore: 85,
    codeQualityScore: 90
}

console.log(`QUIZ Grade: ${calculateGrade(quiz)}%`);
console.log(`LAB Grade: ${calculateGrade(lab)}%`);


const pending: EnrollmentStatus = {
    status: "PENDING",
    requestedAt: Temporal.Now.instant(),
    studentId: "STU-001",
    courseId: "CRS-101"
}

console.log(describeEnrollment(pending));





const studentRes: ApiResponse<Student> = {
    status: "success",
    data: {
        id: "STU-001",
        name: "Dawit Bekele",
        enrollmentDate: Temporal.Now.instant(),
        gpa: 3.4
    },
    fetchedAt: Temporal.Now.instant(),
}

console.log(renderResponse(studentRes, (s) => `${s.name} GPA: ${s.gpa ?? "N/A"}`))


const courseListRes: ApiResponse<Course[]> = {
    status: "success",
    data: [
        {
            id: "CRS-101",
            title: "Web Development Fundamentals",
            capacity: 30,
            startDate: Temporal.PlainDate.from("2026-09-01"),
        },
        {
            id: "CRS-102",
            title: "App Development Fundamentals",
            capacity: 30,
            startDate: Temporal.PlainDate.from("2026-09-01"),
        },
    ],
    fetchedAt: Temporal.Now.instant(),
}

console.log(renderResponse(courseListRes, (courses) => courses.map((c) => c.title).join(",")));