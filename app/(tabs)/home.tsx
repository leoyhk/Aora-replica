import { View, Text, FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LogoSmall from "assets/images/logo-small.png";
import SearchField from "components/SearchField";
import Carousel from "components/Carousel";
import Empty from "components/states/Empty";

const Home = () => {
  return (
    <SafeAreaView className="flex h-full w-full bg-primary">
      <FlatList
        // data={[{ id: 1 }, { id: 2 }, { id: 3 }]}
        data={[]}
        keyExtractor={(item: { id: string }) => `${item.id}`}
        ListHeaderComponent={() => (
          <View className="my-6 px-4 space-y-6 ">
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
            <SearchField
              textInputProps={{
                placeholder: "Search for a video topic",
                placeholderTextColor: "#CDCDE0",
              }}
            />
            <View>
              <Text className=" text-gray-100 font-pregular text-sm">
                Trending Videos
              </Text>
            </View>
            <View className="items-center">
              <Carousel items={[{ id: 1 }, { id: 2 }, { id: 3 }] ?? []} />
            </View>
          </View>
        )}
        renderItem={({ item }) => <Text>{item.id}</Text>}
        ListEmptyComponent={() => (
          <Empty
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
