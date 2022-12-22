import moment from "moment";
import React from "react";
import { List } from "react-native-paper";
import { Competition } from "../data/competition";
import { CompetitionSection } from "../data/competitionSection";
import CompetitionListSection from "./section";

const testData: Competition[] = [
    {
      code: "2022_CI_1574_C_S_01",
      closingDate: null,
      discipline: "Eventing",
      endDate: moment(1670626800000),
      name: "Quillota - CCI1*-Intro",
      startDate:moment(1670454000000),
      status: "Canceled"
    },
    {
      code: "2022_CI_1574_C_S_02",
      closingDate: null,
      discipline: "Eventing",
      endDate: moment(1670626800000),
      name: "Quillota - CCI2*-S",
      startDate: moment(1670454000000),
      status: "Canceled"
    },
    {
      code: "2022_CI_0595_C_S_01",
      closingDate: null,
      discipline: "Eventing",
      endDate: moment(1670713200000),
      name: "Camperdown VIC - CCI2*-S",
      startDate: moment(1670454000000),
      status: "Canceled"
    },
    {
      code: "2022_CI_0595_C_S_02",
      closingDate: moment(1669244400000),
      discipline: "Eventing",
      endDate: moment(1670713200000),
      name: "Camperdown VIC - CCI2*-L",
      startDate: moment(1670454000000),
      status: "Canceled"
    },
    {
      code: "2022_CI_0088_C_S_01",
      closingDate: moment(1669935600000),
      discipline: "Eventing",
      endDate: moment(1670713200000),
      name: "Geneva - CIX-Arena - INVITATION OK",
      startDate: moment(1670454000000),
      status: "Upcoming"
    },
    {
      code: "2022_CI_1349_C_S_01",
      closingDate: moment(1669071600000),
      discipline: "Eventing",
      endDate: moment(1670713200000),
      name: "Puhinui - CCI4*-L",
      startDate: moment(1670454000000),
      status: "Upcoming"
    }
  ];
 
const CompetitionList = () => {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);


  const sections = testData.reduce((acc, item) => {
    const section = acc.find((s) => s.year === item.endDate.year() && s.week === item.endDate.week());
    if (section) {
      section.addCompetition(item);
    } else {
      acc.push(new CompetitionSection(item.endDate.year(), item.endDate.week(), [item]));
    }
    return acc;
  }, [] as CompetitionSection[]);
  




    return (
      <List.Section>
        <List.Subheader>Competitions 2022</List.Subheader>
        {sections.map((section) => <CompetitionListSection section={section}></CompetitionListSection>)}
    </List.Section>
    );
};

export default CompetitionList;
