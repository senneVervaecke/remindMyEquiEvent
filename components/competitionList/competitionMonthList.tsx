import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { LocalData } from "../../dao/localData";
import { Competition, CompetitionMonthSection } from "../../data/types";
import CustomHeader from "../general/header";
import CompetitionSectionItem from "./competitionSectionItem";
 
const CompetitionMonthList = () => {

  function competitionsToMonthSections(competitions: Competition[]): CompetitionMonthSection[] {
    return competitions.reduce((acc, item) => {
        const section = acc.find((s) => s.year === item.startDate.year() && s.month === item.startDate.month());
        if (section) {
          section.competitions.push(item);
        } else {
          acc.push(
            {year: item.startDate.year(), month: item.startDate.month(), title: item.startDate.format('MMMM YYYY'), competitions: [item]}
            );
        }
        return acc;
      }, [] as CompetitionMonthSection[]);
  }
  
  const sections = competitionsToMonthSections(LocalData.getCompetitions());
  
    return (
      <View>
        <CustomHeader title="Competition month list" />
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

export default CompetitionMonthList;
