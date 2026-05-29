"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var polyfill_1 = require("@js-temporal/polyfill");
var student = {
    id: "STU-001",
    name: "Hana Tadesse",
    enrollmentDate: polyfill_1.Temporal.Now.instant(),
};
// student.id = "STU-999";
// console.log(student.gpa.toFixed(2));
console.log((_b = (_a = student.gpa) === null || _a === void 0 ? void 0 : _a.toFixed(2)) !== null && _b !== void 0 ? _b : "Not Yet Graded");
