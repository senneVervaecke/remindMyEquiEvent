import { Competition } from "./competition";

export class CompetitionSection{
    year: number;
    week: number;
    competitions: Competition[];

    constructor(year: number, week: number);
    constructor(year: number, week: number, competition: Competition[]);

    constructor(year: number, week: number, competition?: Competition[]) {
        this.year = year;
        this.week = week;
        this.competitions = competition ?? [];
    }

    addCompetition(competition: Competition) {
        this.competitions.push(competition);
    }

    static fromCompetitions(competitions: Competition[]): CompetitionSection[] {
        return competitions.reduce((acc, item) => {
            const section = acc.find((s) => s.year === item.endDate.year() && s.week === item.endDate.week());
            if (section) {
              section.addCompetition(item);
            } else {
              acc.push(new CompetitionSection(item.endDate.year(), item.endDate.week(), [item]));
            }
            return acc;
          }, [] as CompetitionSection[]);
    }
}