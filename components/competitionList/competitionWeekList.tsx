import moment from "moment";
import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { LocalData } from "../../dao/localData";
import { Competition, CompetitionWeekSection } from "../../data/types";
import CustomHeader from "../general/header";
import CompetitionSectionItem from "./competitionSectionItem";
 
const CompetitionWeekList = () => {

  function createTitle(endDate: moment.Moment): string {
    const weekStartDate = endDate.clone().startOf('week');
    const weekEndDate = endDate.clone().endOf('week');
    return `Week ${endDate.week()}\t\t\t${weekStartDate.format('DD/MM')} - ${weekEndDate.format('DD/MM/YYYY')}`;
  }

  function competitionsToWeekSections(competitions: Competition[]): CompetitionWeekSection[] {
    return competitions.reduce((acc, item) => {
        const section = acc.find((s) => s.year === item.endDate.year() && s.week === item.endDate.week());
        if (section) {
          section.competitions.push(item);
        } else {
          acc.push(
            {year: item.endDate.year(), week: item.endDate.week(), title: createTitle(item.endDate), competitions: [item]}
            );
        }
        return acc;
      }, [] as CompetitionWeekSection[]);
  }
  
  const sections = competitionsToWeekSections(LocalData.getCompetitions());
  
    return (
      <View>
        <CustomHeader title="Competition week list" />
        <ScrollView>
          <List.Section style={styles.listContainer}>
            {sections.map((section) => 
              <CompetitionSectionItem
                section={section}
                key={section.competitions.map(c => c.code).reduce((prev, current) => `${prev}_${current}`)}
              />
            )}
          </List.Section>
        </ScrollView>
      </View>
    );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 100
  }
});

export default CompetitionWeekList;
