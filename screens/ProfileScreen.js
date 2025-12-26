import { Text, View } from "react-native";
import mainstyles from "../styles/MainStyles";

export default function ProfileScreen() {
  return (
    <>
      <View style={mainstyles.header}>
        <Text style={mainstyles.header.text}>Profile</Text>
      </View>
    </>
  );
}
