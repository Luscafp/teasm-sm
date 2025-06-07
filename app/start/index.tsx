import { AppButton } from 'components/button';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomePage: React.FC = () => {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#3C86E7', '#7DB5FF']}
      style={{
        flex: 1,
      }}>
      <SafeAreaView className="flex flex-1 justify-center">
        <View className="my-auto flex-col items-center justify-center gap-y-8">
          <Image source={require('../../assets/logo.png')} />
          <Text className="text-4xl font-bold text-white">Bem-vindo!</Text>
          <Text className="w-10/12 text-center text-white">
            Ficamos felizes em termos você aqui conosco! A Tecnologia de Aprendizagem para
            Suplementação de Micronutrientes em Saúde Materno Infantil te trará informações
            importantes sobre...
          </Text>
        </View>

        <View className="bottom-[10%] items-center justify-center">
          <AppButton onPress={() => router.push('/start/finalidades')}>
            <Text className="text-primary text-xl font-bold">Continuar</Text>
          </AppButton>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default WelcomePage;
