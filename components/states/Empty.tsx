import images from "constants/images";
import { View, Text, Image } from "react-native";
import { cn } from "utils/cn";

type EmptyProps = {
  classNames?: {
    container?: string;
    title?: string;
    subtitle?: string;
  };
  title?: string;
  subtitle?: string;
};
const Empty = (props: EmptyProps) => {
  const { classNames, title, subtitle } = props;
  return (
    <View
      className={cn("justify-center items-center px-4", classNames?.container)}
    >
      <Image
        source={images.empty}
        className="h-[215px] w-[270px]"
        resizeMode="contain"
      />
      <Text
        className={cn("text-white font-pmedium text-sm", classNames?.title)}
      >
        {title}
      </Text>
      <Text
        className={cn(
          "text-white font-psemibold text-xl",
          classNames?.subtitle
        )}
      >
        {subtitle}
      </Text>
    </View>
  );
};

export default Empty;
