import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Main
  container: {
    backgroundColor: "#f8f9fa",
  },

  // "Statistic"
  statisticBlock: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  statisticTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  chartPlaceholder: {
    height: 120,
    backgroundColor: "#f1f3f5",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  chartText: {
    fontSize: 14,
    color: "#868e96",
  },
  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  statItem: {
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1a1a1a",
  },
  statLabel: {
    fontSize: 12,
    color: "#868e96",
    marginTop: 4,
  },

  // "Chats"
  chatsBlock: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  chatsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  chatButton: {
    backgroundColor: "#e7f5ff",
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  chatButtonActive: {
    backgroundColor: "#d0ebff",
  },
  chatAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#a5d8ff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  chatAvatarText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1c7ed6",
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 14,
    fontWeight: "500",
    color: "#1a1a1a",
  },
  chatLastMessage: {
    fontSize: 12,
    color: "#868e96",
    marginTop: 2,
  },
  chatTime: {
    fontSize: 11,
    color: "#adb5bd",
  },
  newChatButton: {
    backgroundColor: "#40c057",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  newChatText: {
    color: "#ffffff",
    fontWeight: "600",
  },

  // "Nutrition"
  nutritionBlock: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  nutritionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  nutritionPlaceholder: {
    height: 80,
    backgroundColor: "#e7f5ff",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  nutritionPlaceholderText: {
    fontSize: 14,
    color: "#339af0",
  },
  nutritionButton: {
    backgroundColor: "#339af0",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 12,
  },
  nutritionButtonText: {
    color: "#ffffff",
    fontWeight: "600",
  },

  // "Goals"
  goalsBlock: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  goalsTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1a1a1a",
    marginBottom: 12,
  },
  goalItem: {
    backgroundColor: "#fff4e6",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  goalCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#ff922b",
    marginRight: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  goalCheckboxCompleted: {
    backgroundColor: "#ff922b",
  },
  goalCheckmark: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
  goalText: {
    flex: 1,
    fontSize: 14,
    color: "#e67700",
  },
  addGoalButton: {
    borderWidth: 1,
    borderColor: "#ffa94d",
    borderStyle: "dashed",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
  addGoalText: {
    color: "#ff922b",
  },
});

export default styles;
