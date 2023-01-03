import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { LocalData } from "../../dao/localData";
import { Competition, CompetitionSection } from "../../data/types";
import CustomHeader from "../general/header";
import CompetitionWeekSection from "./competitionWeekSection";
 
const CompetitionWeekList = () => {

  function competitionsToSections(competitions: Competition[]): CompetitionSection[] {
    return competitions.reduce((acc, item) => {
        const section = acc.find((s) => s.year === item.endDate.year() && s.week === item.endDate.week());
        if (section) {
          section.competitions.push(item);
        } else {
          acc.push(
            {year: item.endDate.year(), week: item.endDate.week(), competitions: [item]}
            );
        }
        return acc;
      }, [] as CompetitionSection[]);
  }
  
  const sections = competitionsToSections(LocalData.getCompetitions());
  
    return (
      <View>
        <CustomHeader title="Competition week list" />
        <ScrollView>
          <List.Section style={styles.listContainer}>
            {sections.map((section) => 
              <CompetitionWeekSection
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
