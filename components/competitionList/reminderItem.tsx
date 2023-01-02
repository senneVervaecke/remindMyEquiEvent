import moment from "moment";
import { View } from "react-native";
import { IconButton, List } from "react-native-paper";
import { Reminder } from "../../data/reminder";

type ReminderItemProps = {
    reminder: Reminder;
    closingDate?: moment.Moment;
};

const ReminderItem = (props: ReminderItemProps) => {
    const reminder = props.reminder;
    return (
        <List.Item
            title={reminder.getRemindText(props.closingDate)}
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