import Touchable from "components/Touchable";
import images from "constants/images";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className=" bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="flex-1 items-center w-full px-4">
          <Image
            source={images.logo}
            className=" w-32 h-40"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className=" w-full max-w-sm h-80"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="font-psemibold text-3xl text-white text-center">
              Discover Endless Possibilities with
              <Text className="font-psemibold text-3xl text-secondary-200">
                {" "}
                Aora
              </Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -right-8 -bottom-1"
              resizeMode="contain"
            />
          </View>
          <Text className="font-pregular text-sm text-gray-100 text-center mt-7">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
          <Touchable
            classNames={{ container: "w-full mt-7 border" }}
            onPress={() => {
              router.push("/home");
            }}
          >
            <Text className=" font-psemibold">Continue with Email</Text>
          </Touchable>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
