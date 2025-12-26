import { Text, View } from 'react-native';
import mainstyles from '../styles/MainStyles';

export default function HomeScreen(){
    return(
    <>
      <View style={ mainstyles.header }>
        <Text style={ mainstyles.header.text }>Home</Text>
      </View>
    </>
    )
}