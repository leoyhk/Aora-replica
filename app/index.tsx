import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="font-pblack text-3xl">This is cool!</Text>
      <Link href={"/home"}>StatusBar</Link>
      <StatusBar style="auto" />
    </View>
  );
}
