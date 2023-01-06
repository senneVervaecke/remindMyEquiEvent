import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper";


const SettingsPage = () => {

    return (
        <View style={styles.settingContainer}>
            <Text style={{fontSize: 25}}>Settings page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    settingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SettingsPage