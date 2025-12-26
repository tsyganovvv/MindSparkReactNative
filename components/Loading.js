import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { COLOR_BLUE } from '../config';
export default function Loading({ size = 'large', color = COLOR_BLUE }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});