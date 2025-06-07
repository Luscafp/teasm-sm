import { AppButton } from 'components/button';
import { useRouter } from 'expo-router';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Finalidades: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-background flex flex-1 flex-row">
      <View className="bg-accent h-full w-[16%] rounded-r-3xl" />

      <View style={{ flex: 1 }} className="h-full flex-1 pb-3 pt-10">
        <Text className="text-accent text-center text-3xl font-black italic">
          {'FINALIDADES DO\nAPLICATIVO'}
        </Text>

        <View className="mt-[16%] flex w-full flex-col gap-y-4">
          <View className="-left-[14%] flex w-[100%] flex-row">
            <Text className="text-4xl font-bold text-white">1º</Text>
            <Text className="text-accent ml-[8%] text-justify text-xl font-bold">
              Apoiar a prática profissional com informações atualizadas sobre a suplementação de
              micronutrientes para gestantes, crianças e puérperas.
            </Text>
          </View>

          <View className="-left-[14%] flex w-[100%] flex-row">
            <Text className="text-4xl font-bold text-white">2º</Text>
            <Text className="text-accent ml-[8%] text-justify text-xl font-bold">
              Aprimorar a educação em saúde e promover condutas baseadas em evidências.
            </Text>
          </View>

          <View className="-left-[14%] flex w-[100%] flex-row">
            <Text className="text-4xl font-bold text-white">3º</Text>
            <Text className="text-accent ml-[8%] text-justify text-xl font-bold">
              Oferecer uma ferramenta prática e interativa de apoio à decisão clínica
            </Text>
          </View>
        </View>

        <View className="relative ml-[5%] mt-auto w-[60%] flex-row pb-4">
          <View className="justify-around">
            <View className="bg-danger rounded-xl p-4 pb-16">
              <Text className="text-sm font-bold text-white">
                Olá, meu nome é Leonardo! Irei lhe ajudar com suas dúvidas e questionamentos
              </Text>
            </View>
            <AppButton onPress={() => router.push('/start/escolha_01')}>
              <Text className="text-primary text-center text-xl font-bold">Próximo</Text>
            </AppButton>
          </View>

          <Image className="" source={require('../../assets/leonardo.png')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Finalidades;
