import { Text, View, Pressable, ActivityIndicator } from "react-native";
import styles from "../styles/SettingsStyle";
import mainstyles from "../styles/MainStyles";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { API_URL } from "../config";
import Error from "../components/Error";
import Loading from "../components/Loading";

export default function SettingsScreen() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    handleData();
  }, []);

  const handleData = async () => {
    try {
      const authToken = await AsyncStorage.getItem("auth_token");
      if (!authToken) {
        setError("No auth token");
        return;
      }
      const response = await fetch(API_URL + "/v1/sessions/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
      } else {
        setError("Error while load data");
      }
    } catch (error) {
      setError("Error connection" + error.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <>
      <View style={mainstyles.header}>
        <Text style={mainstyles.header.text}>Settings</Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>{userData.fullname[0]}</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{userData.fullname}</Text>
          <Text style={styles.profileEmail}>{userData.email}</Text>
        </View>
      </View>
      <View>
        <View style={{ margin: 5 }}>
          <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons name="person-outline" size={24} color="black" />
            <Text style={styles.buttonText}>My Profile</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons name="stats-chart-outline" size={24} color="black" />
            <Text style={styles.buttonText}>My Statistics</Text>
          </Pressable>
        </View>
        <View style={{ margin: 5 }}>
          <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons name="lock-closed-outline" size={24} color="black" />
            <Text style={styles.buttonText}>Privacy and Security</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons name="color-palette-outline" size={24} color="black" />
            <Text style={styles.buttonText}>Appearance</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons name="language-outline" size={24} color="black" />
            <Text style={styles.buttonText}>Language</Text>
          </Pressable>
        </View>
        <View style={{ margin: 5 }}>
          <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons name="help-circle-outline" size={24} color="black" />
            <Text style={styles.buttonText}>Ask a Question</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="black"
            />
            <Text style={styles.buttonText}>MindSpark FAQ</Text>
          </Pressable>
          <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons name="flash-outline" size={24} color="black" />
            <Text style={styles.buttonText}>MindSpark Features</Text>
          </Pressable>
        </View>
        <View style={{ margin: 5, marginBottom: 10 }}>
          <Pressable onPress={() => {}} style={styles.button}>
            <Ionicons name="log-out-outline" size={24} color="red" />
            <Text style={[styles.buttonText, { color: "red" }]}>logout</Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
