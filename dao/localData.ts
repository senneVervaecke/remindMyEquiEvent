import moment from "moment";
import { Competition } from "../data/competition";
import { Reminder } from "../data/reminder";

export class LocalData {
    static getCompetitions(): Competition[] {
        return  [
            {
              code: "2022_CI_1574_C_S_01",
              closingDate: null,
              discipline: "Eventing",
              endDate: moment().add(1, 'week').set({day: 6}),
              name: "Quillota - CCI1*-Intro",
              startDate:moment().add(1, 'week').set({day: 3}),
              status: "Canceled",
              reminders: [
                new Reminder(2, 'days', '16:00'),
                new Reminder(7, 'days', '9:00')
              ]
            },
            {
              code: "2022_CI_1574_C_S_02",
              closingDate: null,
              discipline: "Eventing",
              endDate: moment().add(1, 'week').set({day: 6}),
              name: "Quillota - CCI2*-S",
              startDate:moment().add(1, 'week').set({day: 3}),
              status: "Canceled",
              reminders: []
            },
            {
              code: "2022_CI_0595_C_S_01",
              closingDate: null,
              discipline: "Eventing",
              endDate: moment().add(2, 'week').set({day: 6}),
              name: "Camperdown VIC - CCI2*-S",
              startDate:moment().add(2, 'week').set({day: 4}),
              status: "Canceled",
              reminders: []
            },
            {
              code: "2022_CI_0595_C_S_02",
              closingDate: moment().add(1, 'week').set({day: 0}),
              discipline: "Eventing",
              endDate: moment().add(2, 'week').set({day: 6}),
              name: "Camperdown VIC - CCI2*-L",
              startDate:moment().add(2, 'week').set({day: 3}),
              status: "Canceled",
              reminders: []
            },
            {
              code: "2022_CI_0088_C_S_01",
              closingDate: moment().add(2, 'week').set({day: 0}),
              discipline: "Eventing",
              endDate: moment().add(3, 'week').set({day: 6}),
              name: "Geneva - CIX-Arena - INVITATION OK",
              startDate:moment().add(3, 'week').set({day: 3}),
              status: "Upcoming",
              reminders: [
                new Reminder(1, 'days', '08:00'),
                new Reminder(5, 'days', '14:00')
              ]
            },
            {
              code: "2022_CI_1349_C_S_01",
              closingDate: moment().add(2, 'week').set({day: 0}),
              discipline: "Eventing",
              endDate: moment().add(4, 'week').set({day: 6}),
              name: "Puhinui - CCI4*-L",
              startDate:moment().add(4, 'week').set({day: 3}),
              status: "Upcoming",
              reminders: []
            }
          ];
    }
}