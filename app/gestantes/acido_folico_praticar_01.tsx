import { AppButton } from 'components/button';
import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeButton from 'components/home_button';

const AcidoFolicoPraticar01 = () => {
  const router = useRouter();

  const handleNext = () => {
    router.push('/gestantes/praticar_perguntas');
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Cabeçalho */}
      <View className="w-full px-4 py-4">
        <Text className="text-xl font-bold text-center text-primary">Praticar</Text>
        <View className="h-0.5 bg-blue-500 mx-4 mt-2" />
      </View>

      {/* Container principal */}
      <View className="flex-1 justify-center items-start px-4 pb-4">
        {/* Container do boneco e balão */}
        <View className="flex-row items-end w-full">
          {/* Leonardo - tamanho aumentado */}
          <View className="z-10" style={{ marginBottom: 30 }}>
            <Image
              source={require('../../assets/leonardo.png')}
              className="w-64 h-96"  // Aumentei de w-48 h-72 para w-64 h-96
              resizeMode="contain"
            />
          </View>

          {/* Balão - ajustado proporcionalmente */}
          <View className="ml-4 bg-danger rounded-xl p-4 flex-1" style={{ marginBottom: 120 }}>
            <Text className="text-base font-bold text-white">
              Vamos Praticar? Agora que você está familiarizado com o assunto, já posso te fazer algumas perguntas, né?
            </Text>
          </View>
        </View>
      </View>

      {/* Botão centralizado */}
      <View className="items-center mb-4 px-6">
        <AppButton onPress={handleNext}>
          <Text className="text-primary text-xl font-bold text-center">Vamos lá!</Text>
        </AppButton>
      </View>

      <HomeButton />
    </SafeAreaView>
  );
};

export default AcidoFolicoPraticar01;