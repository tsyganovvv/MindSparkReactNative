import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import mainstyles from "../styles/MainStyles";
import styles from "../styles/HomeStyle";
export default function HomeScreen() {
  return (
    <>
      <View style={mainstyles.header}>
        <Text style={mainstyles.header.text}>Home</Text>
      </View>
      <ScrollView style={styles.container}>
        {/* Statistic */}
        <View style={styles.statisticBlock}>
          <Text style={styles.statisticTitle}>Statistics</Text>
          <View style={styles.chartPlaceholder}>
            <Text style={styles.chartText}></Text>
          </View>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>1,250</Text>
              <Text style={styles.statLabel}>Steps</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>7h 30m</Text>
              <Text style={styles.statLabel}>Sleep</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statValue}>85%</Text>
              <Text style={styles.statLabel}>Focus</Text>
            </View>
          </View>
        </View>

        {/* Chats */}
        <View style={styles.chatsBlock}>
          <Text style={styles.chatsTitle}>Recent Chats</Text>
          {/* Chat 1 */}
          <TouchableOpacity
            style={[styles.chatButton, styles.chatButtonActive]}
            onPress={() => {}}
          >
            <View style={styles.chatAvatar}>
              <Text style={styles.chatAvatarText}>MS</Text>
            </View>
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>Mind Spark</Text>
              <Text style={styles.chatLastMessage}>Be the Best</Text>
            </View>
            <Text style={styles.chatTime}>10:30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.newChatButton} onPress={() => {}}>
            <Text style={styles.newChatText}>+ New Conversation</Text>
          </TouchableOpacity>
        </View>
        {/* Nutrition */}
        <View style={styles.nutritionBlock}>
          <Text style={styles.nutritionTitle}>Today's Nutrition</Text>
          <View style={styles.nutritionPlaceholder}>
            <Text style={styles.nutritionPlaceholderText}>Meals</Text>
          </View>
          <TouchableOpacity style={styles.nutritionButton} onPress={() => {}}>
            <Text style={styles.nutritionButtonText}>+ Add Food Entry</Text>
          </TouchableOpacity>
        </View>
        {/* Goals блок */}
        <View style={styles.goalsBlock}>
          <Text style={styles.goalsTitle}>Daily Goals</Text>

          {/* Цель 1 */}
          <View style={styles.goalItem}>
            <View style={styles.goalCheckbox} />
            <Text style={styles.goalText}>10,000 steps</Text>
          </View>
          <TouchableOpacity style={styles.addGoalButton} onPress={() => {}}>
            <Text style={styles.addGoalText}>+ Add New Goal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
