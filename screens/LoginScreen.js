import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/LoginStyle';

export default function LoginScreen({ navigation }) {
    return(
        <View style={ styles.container }>
            <Text style={styles.title}>Mind-Spark</Text>
            <TextInput
                placeholder='Email'
                style={ styles.input }
            />
            <TextInput
                placeholder='Password'
                secureTextEntry={ true }
                style={ styles.input }
            />
            <TouchableOpacity style={ styles.button } onPress={ () => navigation.navigate('Main') } >
                <Text style={{ color: 'white', fontSize: 16}}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}