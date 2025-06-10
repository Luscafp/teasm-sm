import { useRouter } from 'expo-router';
import { Pressable, Image, View } from 'react-native';

const HomeButton = () => {
  const router = useRouter();

  const handlePress = () => {
    router.push('/start/escolha_01');
  };

  return (
    <Pressable 
      onPress={handlePress}
      className="w-full bg-accent h-20 rounded-t-xl justify-center items-center"
    >
      <View className="w-full h-full justify-center items-center">
        <Image source={require('../assets/home.png')} />
      </View>
    </Pressable>
  );
};

export default HomeButton;
