import { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoSmall from "assets/images/logo-small.png";

const Home = () => {
  return (
    <SafeAreaView className="flex h-full w-full bg-primary">
      <FlatList
        data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        keyExtractor={(item) => `${item.id}`}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6">
            <View className="flex-row justify-between items-start mb-6">
              <View>
                <Text className="text-gray-100 font-pmedium text-sm">
                  Welcome Back
                </Text>
                <Text className="text-white font-psemibold text-2xl">User</Text>
              </View>
              <View className="mt-1.5">
                <Image
                  source={LogoSmall}
                  className="w-9 h-10"
                  resizeMode="contain"
                ></Image>
              </View>
            </View>
          </View>
        )}
        renderItem={({ item }) => <Text>{item.id}</Text>}
      ></FlatList>
    </SafeAreaView>
  );
};

export default Home;
