import { AppButton } from 'components/button';
import HomeButton from 'components/home_button';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Gestantes: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    router.push(`/gestantes/${screen}`);
  };

  return (
    <SafeAreaView className="bg-background flex-1 px-6 pt-4">
      <Text className="text-primary text-center text-2xl font-bold uppercase">
        Gestantes e{'\n'}Puérperas
      </Text>
      <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />

      <View className="gap-y-4">
        <AppButton onPress={() => handleNavigate('acido_folico')}>
          <Text className="text-primary text-xl font-bold text-center">Ácido Fólico</Text>
        </AppButton>

        <AppButton onPress={() => handleNavigate('calcio')}>
          <Text className="text-primary text-xl font-bold text-center">Cálcio</Text>
        </AppButton>

        <AppButton onPress={() => handleNavigate('ferro')}>
          <Text className="text-primary text-xl font-bold text-center">Ferro</Text>
        </AppButton>
      </View>

      <View className="flex-row justify-end items-end mt-auto mb-4 mr-4">

        <View className="bg-danger px-4 py-2 rounded-xl relative max-w-[65%] mr-2">
            <Text className="text-white font-semibold text-sm">
            Escolha uma opção para aprender mais.
            </Text>
            <View className="absolute -bottom-2 left-4 w-4 h-4 bg-danger rotate-45" />
        </View>

        <Image
            source={require('../../assets/leonardo.png')}
            className="h-36 w-24"
            resizeMode="contain"
        />
        </View>


      <HomeButton/>
    </SafeAreaView>
  );
};

export default Gestantes;
