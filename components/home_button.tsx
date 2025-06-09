import { useRouter } from 'expo-router';
import { TouchableOpacity, Image, View } from 'react-native';

const HomeButton = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('Escolha01');
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      className="absolute bottom-0 w-full bg-accent h-[10%] rounded-t-xl justify-center items-center"
    >
      <View className="w-full h-full justify-center items-center">
        <Image source={require('../assets/home.png')} />
      </View>
    </TouchableOpacity>
  );
};

export default HomeButton;