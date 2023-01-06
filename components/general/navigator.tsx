import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import CompetitionList from '../competitionList/competitionList';
import CompetitionMonthList from '../competitionList/competitionMonthList';
import CompetitionWeekList from '../competitionList/competitionWeekList';
import SettingsPage from '../settings/settings';


const CustomNavigator = () => {
    const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'competitionList', title: 'Competition list', focusedIcon: 'view-list', unfocusedIcon: 'view-list-outline'},
    { key: 'weekList', title: 'Competition week list', focusedIcon: 'view-week', unfocusedIcon: 'view-week-outline' },
    { key: 'monthList', title: 'Competition month list', focusedIcon: 'view-agenda', unfocusedIcon: 'view-agenda-outline' },
    { key: 'settings', title: 'Settings', focusedIcon: 'cog', unfocusedIcon: 'cog-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    competitionList: CompetitionList,
    weekList: CompetitionWeekList,
    monthList: CompetitionMonthList,
    settings: SettingsPage,
  });

  return (
    <BottomNavigation style={{height: 50}}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

export default CustomNavigator;