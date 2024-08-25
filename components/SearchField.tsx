import icons from "constants/icons";
import { ComponentProps } from "react";
import { View, TextInput, TouchableOpacity, Image } from "react-native";
import { cn } from "utils/cn";

type SearchFieldProps = {
  textInputProps?: ComponentProps<typeof TextInput>;
  classNames?: { container?: string; textInput: string };
};

const SearchField = (props: SearchFieldProps) => {
  const { textInputProps, classNames } = props;
  return (
    <View
      className={cn(
        ` bg-black-100 rounded-2xl border-2 w-full border-black-200 h-16 px-4 space-x-4 focus:border-secondary items-center flex-row`,
        classNames?.container
      )}
    >
      <TextInput
        {...textInputProps}
        className={cn(
          "flex-1 text-base mt-0.5 text-white font-pregular",
          classNames?.textInput
        )}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchField;
