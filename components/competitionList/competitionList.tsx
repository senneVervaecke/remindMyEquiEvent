import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import { List } from "react-native-paper";
import { LocalData } from "../../dao/localData";
import CustomHeader from "../general/header";
import CompetitionItem from "./competitionItem";
 
const CompetitionList = () => {
  
  const competitions = LocalData.getCompetitions();
  
    return (
    <View>
      <CustomHeader title="Competition list" />  
      <ScrollView>
        <List.Section style={styles.listContainer}>
          {competitions.map((competition) => <CompetitionItem competition={competition} key={competition.code}></CompetitionItem>)}
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
    

export default CompetitionList;
