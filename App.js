import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CompetitionList from './competitionList';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CompetitionList></CompetitionList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
