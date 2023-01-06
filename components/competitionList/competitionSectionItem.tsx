import moment from "moment";
import React from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { CompetitionSection } from "../../data/types";
import CompetitionItem from "./competitionItem";

type CompetitionWeekSectionProps = {
    section: CompetitionSection;
};

const CompetitionSectionItem = (props: CompetitionWeekSectionProps) => {
    const section = props.section;

    return (
      <List.Section>
        <List.Subheader style={styles.title}>{section.title}</List.Subheader>
        {section.competitions.map((competition) => (
          <CompetitionItem key={competition.code} competition={competition} />
        ))}
      </List.Section>
    )
  };

  const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      backgroundColor: '#F5F5F5'
    }
  });

export default CompetitionSectionItem;