import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { HeaderStatus } from "./components/status";

import styles from "./styles";
import { GeneralStatistics } from "./general-statistics";

export default function Statistical() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderStatus />
      <GeneralStatistics />
      <StatusBar backgroundColor="red" translucent />
    </SafeAreaView>
  );
}
