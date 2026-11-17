import FoldLayout, { VERSION } from "@majornutcracker/react-native-fold-layout";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>react-native-fold-layout</Text>
        <Text>JS version: {VERSION}</Text>
        <Text>
          Native version: {FoldLayout?.version ?? "not in this binary"}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: "center" },
  title: { fontSize: 20, fontWeight: "600", marginBottom: 8 },
});
