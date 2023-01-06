

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
    title: string;
    competitions: Competition[];
}

export interface CompetitionWeekSection extends CompetitionSection {
  year: number;
  week: number;
}

export interface CompetitionMonthSection extends CompetitionSection {
  year: number;
  month: number;
}