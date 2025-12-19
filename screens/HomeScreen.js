import { Text, View } from 'react-native';
import styles from '../styles/HomeStyle';

export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>Home</Text>
        </View>
    )
}