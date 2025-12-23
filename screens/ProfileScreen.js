import { Text, View, Image} from 'react-native';
import mainstyles from '../styles/MainStyles';
import styles from '../styles/ProfileStyle';

export default function ProfileScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.profileHeader}>
            <Image 
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&s' }} 
            style={styles.profileImage}
            />
            <Text style={styles.profileName}>Vladimir Tsyganov</Text>
            <Text style={styles.profileEmail}>tsyganov.vv0228@gmail.com</Text>
        </View>
      </View>
    </>
  );
}