import React from "react";
import {  Text } from "react-native";
import { List } from "react-native-paper";
import { Competition } from "../data/competition";

type CompetitionListItemProps = {
    competition: Competition;
};

const CompetitionListItem = (props: CompetitionListItemProps) => {
    const competition = props.competition;
    return (
        <List.Item title={competition.name} key={competition.code}></List.Item>
    );
};

export default CompetitionListItem;