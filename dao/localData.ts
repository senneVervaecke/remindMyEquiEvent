import moment from "moment";
import { Competition } from "../data/types";
import uuid from "react-native-uuid"

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
                {id: uuid.v4() as string, remindAmount: 1, remindUnit: 'days', remindTime: '08:00', remindedUser: false},
                {id: uuid.v4() as string, remindAmount: 5, remindUnit: 'days', remindTime: '14:00', remindedUser: false}
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
                {id: uuid.v4() as string, remindAmount: 1, remindUnit: 'days', remindTime: '08:00', remindedUser: false},
                {id: uuid.v4() as string, remindAmount: 5, remindUnit: 'days', remindTime: '14:00', remindedUser: false}
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