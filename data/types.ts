

export interface Competition {
    code: string;
    name: string;
    discipline: string;
    status: string;
    startDate: moment.Moment;
    endDate: moment.Moment;
    closingDate?: moment.Moment;
    reminders: Reminder[];
  }

  export interface Reminder {
    id: string;
    remindAmount: number;
    remindUnit: moment.unitOfTime.DurationConstructor;
    remindTime: string;
    remindedUser: boolean;
}

export interface CompetitionSection {
    year: number;
    week: number;
    competitions: Competition[];
}