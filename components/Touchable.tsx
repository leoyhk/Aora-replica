import React from "react";
import { TouchableOpacity } from "react-native";
import { cn } from "utils/cn";

interface TouchableProps extends React.ComponentProps<typeof TouchableOpacity> {
  classNames?: { container?: string };
  isLoading?: boolean;
}
const Touchable = (props: TouchableProps) => {
  const { classNames, children, onPress, isLoading, disabled } = props;

  return (
    <TouchableOpacity
      className={cn(
        `bg-secondary rounded-xl min-h-[62px] justify-center items-center ${
          isLoading ? "opacity-50" : ""
        }`,
        classNames?.container
      )}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={disabled || isLoading}
    >
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;
