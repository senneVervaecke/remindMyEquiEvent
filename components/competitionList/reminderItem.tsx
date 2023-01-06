import moment from "moment";
import { View } from "react-native";
import { IconButton, List } from "react-native-paper";
import { Reminder } from "../../data/types";

type ReminderItemProps = {
    reminder: Reminder;
    closingDate?: moment.Moment;
};

const ReminderItem = (props: ReminderItemProps) => {

    function getRemindDate(reminder: Reminder, dueDate: moment.Moment): moment.Moment {
        const remindDate = dueDate.subtract(reminder.remindAmount, reminder.remindUnit);
        remindDate.set({hour: parseInt(reminder.remindTime.split(":")[0]), minute: parseInt(reminder.remindTime.split(":")[1])});
        return remindDate;
    }

    function getRemindText(reminder: Reminder, dueDate?: moment.Moment): string {
        if(!dueDate){
            return `${reminder.remindAmount} ${reminder.remindUnit} before at ${reminder.remindTime}`;
        }
        const remindDate = getRemindDate(reminder, dueDate);
        return `${remindDate.fromNow()} at ${reminder.remindTime}`;
    }

    const reminder = props.reminder;
    return (
        <List.Item
            title={getRemindText(reminder, props.closingDate)}
            key={reminder.id} 
            left={(props) => <List.Icon {...props} icon="bell-circle" />}
            onPress={() => console.log('Reminder pressed')}
            right={
                (props) => (
                <View style={[ {flexDirection: 'row'}]} > 
                    <IconButton {...props} icon="lead-pencil" onPress={() => console.log('Edit reminder pressed')}  />   
                    <IconButton {...props} icon="close-circle" onPress={() => console.log('Remove reminder pressed')} />
                </View>
                )
            }
        />
    );
};

export default ReminderItem;