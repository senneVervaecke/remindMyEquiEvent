import moment from "moment";
import React from "react";
import { List } from "react-native-paper";
import { CompetitionSection } from "../../data/competitionSection";
import CompetitionItem from "./competitionItem";

type CompetitionWeekSectionProps = {
    section: CompetitionSection;
};

const CompetitionWeekSection = (props: CompetitionWeekSectionProps) => {
    const section = props.section;
    const [expanded, setExpanded] = React.useState(true);

    const weekStartDate = moment().year(section.year).week(section.week).startOf('week');
    const weekEndDate = moment().year(section.year).week(section.week).endOf('week');
    const title = `Week ${section.week} ${weekStartDate.format('DD/MM')} - ${weekEndDate.format('DD/MM/YYYY')}`;

    return (
      <List.Accordion
      title={title}
      expanded={expanded}
      onPress={() => setExpanded(!expanded)}>
        {section.competitions.map((competition) => (
          <CompetitionItem key={competition.code} competition={competition} />
        ))}
      </List.Accordion>
    )
  };

export default CompetitionWeekSection;