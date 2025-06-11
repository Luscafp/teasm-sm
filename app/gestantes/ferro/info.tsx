import { AppButton } from 'components/button';
import { useRouter } from 'expo-router';
import { Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeButton from 'components/home_button';
import 'react-native-gesture-handler';

interface ImageItem {
  id: number;
  uri: any; 
  title: string;
}

const info: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    router.push(`/gestantes/${screen}`);
  };

  const images: ImageItem[] = [
    { id: 3, uri: require('assets/ferro_gestantes.png'), title: "Ferro" }
  ];

  const handleImagePress = (image: ImageItem) => {
    router.push({ 
      pathname: '/start/imageZoom', 
      params: { id: String(image.id) }
    });
  };

  return (
    <SafeAreaView className="bg-background flex-1">
      <ScrollView 
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 80 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1">
          <View className="w-full bg-background py-4 px-4">
            <Text className="text-xl font-bold text-center text-primary uppercase">
              Ferro
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

          <View className="gap-y-4 mb-24 px-6"> 
            <AppButton onPress={() => handleNavigate('ferro/saiba_mais')}>
              <Text className="text-primary text-xl font-bold text-center">Saiba mais</Text>
            </AppButton>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 w-full">
        <HomeButton />
      </View>
    </SafeAreaView>
  );
};

export default info;