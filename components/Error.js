import { View, Text, Pressable, StyleSheet } from 'react-native';
import { COLOR_BLUE, COLOR_RED } from '../config'
export default function Error() {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Error</Text>
        <Pressable  style={styles.retryButton}>
          <Text style={styles.retryText}>Home</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  errorText: {
    color: COLOR_RED,
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 16,
  },
  retryButton: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: COLOR_BLUE,
    borderRadius: 8,
    minWidth: 120,
  },
  retryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});