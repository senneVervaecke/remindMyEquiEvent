import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CompetitionList from '../competitionList/competitionList';
import CompetitionWeekList from '../competitionList/competitionWeekList';


const CustomFooter = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Competitions" component={CompetitionList} />
            <Tab.Screen name="Week" component={CompetitionWeekList} />
        </Tab.Navigator>
    )
}

export default CustomFooter;