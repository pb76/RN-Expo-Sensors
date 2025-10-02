import { StyleSheet, Text, View } from "react-native";
//https://docs.expo.dev/versions/latest/sdk/sensors/
import * as Sensors from "expo-sensors";

export default function Sensorer() {
  return (
    <View style={styles.container}>
      <Text>Här kommer vi visa info från sensorer</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
