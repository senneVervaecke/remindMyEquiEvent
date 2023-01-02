import React from "react";
import { Button, List } from "react-native-paper";
import { Competition } from "../../data/competition";
import uuid from 'react-native-uuid';
import ReminderItem from "./reminderItem";


type CompetitionListItemProps = {
    competition: Competition;
};

const CompetitionItem = (props: CompetitionListItemProps) => {
    const competition = props.competition;
    return (
        <List.Accordion title={competition.name}>
            <List.Item
             left={(props) => <List.Icon {...props} icon="calendar-range" />}
             title={`${competition.startDate.format('DD/MM')} - ${competition.endDate.format('DD/MM/YYYY')}`}
             description={competition.closingDate ? `closing at: ${competition.closingDate.format('DD/MM/YYYY')}` : 'No closing date'}
             key={uuid.v4() as string}
             />
            {competition.reminders.map((reminder) => (
                <ReminderItem
                    reminder={reminder}
                    closingDate={competition.closingDate}
                    key={uuid.v4() as string}
                />
            ))}
            <Button onPress={() => console.log('Add reminder pressed')}>Add reminder</Button>
        </List.Accordion>
    );
};

export default CompetitionItem;