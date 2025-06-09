import { Image, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ImageZoom() {
  const params = useLocalSearchParams();
  const image = JSON.parse(params.image as string);

  return (
    <View className="flex-1 bg-black justify-center">
      <Image
        source={image.uri}
        className="w-full h-80"
        resizeMode="contain"
      />
      <Text className="text-white text-center mt-4">{image.title}</Text>
    </View>
  );
}