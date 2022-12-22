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
}