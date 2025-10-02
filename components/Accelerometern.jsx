import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Accelerometer } from "expo-sensors";
//https://docs.expo.dev/versions/latest/sdk/accelerometer/

export default function Accelerometern() {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(setData));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  return (
    <View style={styles.container}>
      <Text>Här kommer vi visa info från accelerometern</Text>
      <Text style={styles.text}>x: {x}</Text>
      <Text style={styles.text}>y: {y}</Text>
      <Text style={styles.text}>z: {z}</Text>
      <Button onPress={subscription ? _unsubscribe : _subscribe} title={subscription ? "Unsubscribe" : "Subscribe"} />
    </View>
  );
}

const styles = StyleSheet.create({});
