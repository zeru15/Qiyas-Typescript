"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isStudent = isStudent;
function isStudent(value) {
    return (typeof value === "object" &&
        value !== null &&
        "id" in value &&
        "name" in value &&
        typeof value.id === "string" &&
        typeof value.name === "string");
}
// export function parseStudent(raw: undefined): Student {
//     if (typeof raw !== "object" || raw === null) {
//         throw new TypeError(
//             'Expected an object, received $(raw '
//         )
//     }
// }
