import moment from "moment";
import React from "react";
import { View, Text } from "react-native";

type CompetitionListSectionHeaderProps = {
    week: number;
    year: number;
};

const CompetitionListSectionHeader = (props: CompetitionListSectionHeaderProps) => {
    const weekStartDate = moment().year(props.year).week(props.week).startOf('week');
    const weekEndDate = moment().year(props.year).week(props.week).endOf('week');
    
    return (
        <View>
            <Text style={{fontWeight: "bold"}}>Week {props.week} {weekStartDate.format('DD/MM')} - {weekEndDate.format('DD/MM/YYYY')}</Text>
        </View>
    );
};

export default CompetitionListSectionHeader;