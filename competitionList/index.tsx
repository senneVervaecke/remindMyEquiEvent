import moment from "moment";
import React from "react";
import { SafeAreaView, SectionList, Text } from "react-native";
import { Competition } from "../data/competition";
import CompetitionListItem from "./item";
import CompetitionListSectionHeader from "./sectionHeader";

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

  const sections = testData.reduce((acc, item) => {
    const section = acc.find((s) => s.year === item.endDate.year() && s.week === item.endDate.week());
    if (section) {
      section.data.push(item);
    } else {
      acc.push({year: item.endDate.year(), week: item.endDate.week(), data: [item] });
    }
    return acc;
  }, [] as {year: number; week: number; data: Competition[] }[]);


    return (
            <SectionList
                sections={sections }
                keyExtractor={(item) => item.code}
                renderItem={({ item }) => <CompetitionListItem name={item.name}></CompetitionListItem>}
                renderSectionHeader={({ section }) => (
                    <CompetitionListSectionHeader year={section.year} week={section.week}></CompetitionListSectionHeader>
                )}
            />
    );
};

export default CompetitionList;
