import { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import {
  generateRandomRGBColor,
  generateTrueRandomColor,
} from "../utils/generateRandomColor";

export default function Index() {
  const [color, setColor] = useState<string | null>(null);

  const touchHandler = () => {
    setColor(generateRandomRGBColor());
    // generateTrueRandomColor().then((color) => setColor(color));
  };

  return (
    <TouchableWithoutFeedback onPress={touchHandler}>
      <View style={[styles.container, color && { backgroundColor: color }]}>
        <Text style={styles.title}>Hello there</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
});
