import moment from "moment";
import { Reminder } from "./reminder";

export class Competition {
  code: string;
  name: string;
  discipline: string;
  status: string;
  startDate: moment.Moment;
  endDate: moment.Moment;
  closingDate?: moment.Moment;
  reminders: Reminder[];
    
    constructor(code: string, name: string, discipline: string, status: string, startDate: moment.Moment, endDate: moment.Moment, closingDate?: moment.Moment) {
        this.code = code;
        this.name = name;
        this.discipline = discipline;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.closingDate = closingDate;
        this.reminders = [];
    }
}