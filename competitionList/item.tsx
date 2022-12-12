import React from "react";
import {  Text } from "react-native";

type CompetitionListItemProps = {
    name: string;
};

const CompetitionListItem = (props: CompetitionListItemProps) => {
    
    return (
            <Text>{props.name}</Text>
    );
};

export default CompetitionListItem;