import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { List } from "react-native-paper";
import { LocalData } from "../../dao/localData";
import { CompetitionSection } from "../../data/competitionSection";
import CustomHeader from "../general/header";
import CompetitionWeekSection from "./competitionWeekSection";
import uuid from 'react-native-uuid';
 
const CompetitionWeekList = () => {
  
  const sections = CompetitionSection.fromCompetitions(LocalData.getCompetitions());
  
    return (
      <View>
        <CustomHeader title="Competition week list" />
        <ScrollView>
          <List.Section style={styles.listContainer}>
            {sections.map((section) => <CompetitionWeekSection section={section} key={uuid.v4() as string}></CompetitionWeekSection>)}
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
