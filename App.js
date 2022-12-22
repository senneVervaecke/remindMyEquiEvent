import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CompetitionList from './competitionList';
import { Provider as PaperProvider } from 'react-native-paper';


export default function App() {
  return (
    <PaperProvider style={styles.container}>
      <StatusBar style="auto" />
      <CompetitionList></CompetitionList>
    </PaperProvider>
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
