import { StyleSheet, Text, View } from "react-native";
//https://docs.expo.dev/versions/latest/sdk/sensors/
import * as Sensors from "expo-sensors";
import Accelerometern from "./Accelerometern";

export default function Sensorer() {
  return (
    <View style={styles.container}>
      <Text>Här kommer vi visa info från sensorer</Text>
      <Accelerometern />
    </View>
  );
}

const styles = StyleSheet.create({});
