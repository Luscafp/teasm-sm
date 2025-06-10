import { AppButton } from 'components/button';
import { useRouter } from 'expo-router';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeButton from 'components/home_button';
import 'react-native-gesture-handler';

interface ImageItem {
  id: number;
  uri: any; // ou ImageSourcePropType se importar de 'react-native'
  title: string;
}

const Suplementação: React.FC = () => {
  const router = useRouter();

  const images: ImageItem[] = [
    { id: 1, uri: require('../../assets/micronutrientes_1.png'), title: "Suplementação de Micronutrientes" },
    { id: 2, uri: require('../../assets/micronutrientes_2.png'), title: "Suplementação de Micronutrientes 2" }
  ];

  const handleImagePress = (image: ImageItem) => {
    router.push({ 
      pathname: '/start/imageZoom', 
      params: { id: String(image.id) }
    });
  };

  return (
    <SafeAreaView className="bg-background flex-1">
      <View className="flex-1">
        <View className="w-full bg-background py-4 px-4">
          <Text className="text-xl font-bold text-center text-primary uppercase">
            SUPLEMENTAÇÃO {'\n'}DE MICRONUTRIENTES
          </Text>
          <View className="h-0.5 bg-blue-500 mx-4 mt-2" />
        </View>

        <View className="flex-1 items-center justify-center p-4">
          {images.map((image) => (
            <TouchableOpacity 
              key={image.id}
              onPress={() => handleImagePress(image)}
              className="w-full mb-6 rounded-lg overflow-hidden shadow-md"
              activeOpacity={0.7}
            >
              <Image
                source={image.uri}
                className="w-full h-48"
                resizeMode="cover"
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <HomeButton />
    </SafeAreaView>
  );
};

export default Suplementação;