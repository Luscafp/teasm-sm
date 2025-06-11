import { AppButton } from 'components/button';
import HomeButton from 'components/home_button';
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ferro: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    router.push(`/gestantes/${screen}`);
  };

  return (
    <SafeAreaView className="bg-background flex-1 pt-4">
      <Text className="text-primary text-center text-2xl font-bold uppercase">
        Ferro
      </Text>
      <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />

      <View className="flex-1 justify-center mt-8 gap-y-4 px-6">
        <View className="gap-y-4">
          <AppButton onPress={() => handleNavigate('ferro/info')}>
            <Text className="text-primary text-xl font-bold text-center">Informações</Text>
          </AppButton>

          <AppButton onPress={() => handleNavigate('ferro/praticar')}>
            <Text className="text-primary text-xl font-bold text-center">Testando {'\n'}Conhecimento</Text>
          </AppButton>
        </View>
      </View>
      <View className="relative items-end px-4 pb-4">
        <View className="absolute -top-2 left-4 bg-danger rounded-xl p-3 max-w-[60%] z-10">
          <Text className="text-sm font-bold text-white">
            Aprenda mais sobre e teste seu conhecimnento aqui!
          </Text>
        </View>
        <Image
          source={require('assets/leonardo_2.png')}
          className="w-64 h-96"
          resizeMode="contain"
        />
      </View>
        <HomeButton/>
    </SafeAreaView>
  );
};

export default ferro;
