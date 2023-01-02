import moment from "moment";
import uuid from "react-native-uuid"


export class Reminder {
    id: string;
    remindAmount: number;
    remindUnit: moment.unitOfTime.DurationConstructor;
    remindTime: string;
    remindedUser: boolean;

    constructor(remindAmount: number, remindUnit: moment.unitOfTime.DurationConstructor, remindTime: string) {
        this.id = uuid.v4() as string;
        this.remindAmount = remindAmount;
        this.remindUnit = remindUnit;
        this.remindTime = remindTime;
        this.remindedUser = false;
    }

    getRemindDate(dueDate: moment.Moment): moment.Moment {
        const remindDate = dueDate.subtract(this.remindAmount, this.remindUnit);
        remindDate.set({hour: parseInt(this.remindTime.split(":")[0]), minute: parseInt(this.remindTime.split(":")[1])});
        return remindDate;
    }

    getRemindText(dueDate?: moment.Moment): string {
        if(!dueDate){
            return `${this.remindAmount} ${this.remindUnit} before at ${this.remindTime}`;
        }
        const remindDate = this.getRemindDate(dueDate);
        return `${remindDate.fromNow()} at ${this.remindTime}`;
    }
}