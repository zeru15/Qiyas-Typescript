import {Temporal} from "@js-temporal/polyfill";

export interface Course {
    readonly id: string;
    title: string;
    capacity: string;
    startDate: Temporal.PlainDate;
}