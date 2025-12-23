import { Text, View, Pressable } from 'react-native';
import styles from '../styles/SettingsStyle';
import mainstyles from '../styles/MainStyles';
import { Ionicons } from '@expo/vector-icons';

export default function SettingsScreen() {
  return (
    <>
      <View style={ mainstyles.header }>
        <Text style={{ fontSize: 30 }}>Settings</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>V</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Vladimir Tsyganov</Text>
          <Text style={styles.profileEmail}>tsyganov.vv0228@gmail.com</Text>
        </View>
      </View>
      <View>
        <View style={{margin:5}}>
          <Pressable onPress={() => {}} style={ styles.button }>
            <Ionicons name="person-outline" size={24} color="black" />
            <Text style={ styles.buttonText }>My Profile</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={ styles.button }>
            <Ionicons name="stats-chart-outline" size={24} color="black" />
            <Text style={ styles.buttonText }>My Statistics</Text>
          </Pressable>
        </View>
        <View style={{ margin: 5 }}>
          <Pressable onPress={() => {}} style={ styles.button }>
            <Ionicons name="lock-closed-outline" size={24} color="black" />
            <Text style={ styles.buttonText }>Privacy and Security</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={ styles.button }>
            <Ionicons name="color-palette-outline" size={24} color="black" />
            <Text style={ styles.buttonText }>Appearance</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={ styles.button }>
            <Ionicons name="language-outline" size={24} color="black" />
            <Text style={ styles.buttonText }>Language</Text>
          </Pressable>
        </View>
        <View style={{ margin: 5 }}>
          <Pressable onPress={() => {}} style={ styles.button }>
            <Ionicons name="help-circle-outline" size={24} color="black" />
            <Text style={ styles.buttonText }>Ask a Question</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={ styles.button }>
            <Ionicons name="information-circle-outline" size={24} color="black" />
            <Text style={styles.buttonText}>MindSpark FAQ</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={ styles.button }>
            <Ionicons name="flash-outline" size={24} color="black" />
            <Text style={styles.buttonText}>MindSpark Features</Text>
          </Pressable>
        </View>
        <View style={{ margin: 5, marginBottom: 10 }}>
          <Pressable onPress={() => {}} style={ styles.button }>
            <Ionicons name="log-out-outline" size={24} color="red" />
            <Text style={[styles.buttonText, { color: 'red' }]}>logout</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}