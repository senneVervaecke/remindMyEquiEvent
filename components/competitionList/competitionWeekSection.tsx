import moment from "moment";
import React from "react";
import { StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { CompetitionSection } from "../../data/types";
import CompetitionItem from "./competitionItem";

type CompetitionWeekSectionProps = {
    section: CompetitionSection;
};

const CompetitionWeekSection = (props: CompetitionWeekSectionProps) => {
    const section = props.section;

    const weekStartDate = moment().year(section.year).week(section.week).startOf('week');
    const weekEndDate = moment().year(section.year).week(section.week).endOf('week');
    const title = `Week ${section.week}\t\t\t${weekStartDate.format('DD/MM')} - ${weekEndDate.format('DD/MM/YYYY')}`;

    return (
      <List.Section>
        <List.Subheader style={styles.title}>{title}</List.Subheader>
        {section.competitions.map((competition) => (
          <CompetitionItem key={competition.code} competition={competition} />
        ))}
      </List.Section>
    )
  };

  const styles = StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize: 16
    }
  });

export default CompetitionWeekSection;