import { FlatList, Text } from "react-native";
type CarouselProps = {
  items: { id: string | number }[];
  headerComponent?: React.JSX.Element;
};

const Carousel = (props: CarouselProps) => {
  const { items, headerComponent } = props;
  return (
    <FlatList
      data={items}
      ListHeaderComponent={headerComponent}
      renderItem={({ item }) => <Text className="text-white">{item.id}</Text>}
      horizontal
    />
  );
};

export default Carousel;
