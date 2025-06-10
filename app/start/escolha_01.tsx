import { AppButton } from 'components/button';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const Escolha01: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1 }} className="bg-background flex flex-1">
        <View className="bg-primary h-[20%] w-full rounded-b-[36px] pb-1">
          <View className="bg-accent h-full w-full items-center justify-center rounded-b-[36px] pt-4">
            <Text className="text-center text-3xl font-black text-white">
              {'O que o usuário quer\nfazer?'}
            </Text>
          </View>
        </View>

        <View className="mx-auto mt-[10%] w-[40%] items-center gap-y-6">
          <View className="w-full items-center gap-y-1">
            <TouchableOpacity
              activeOpacity={0.8}
              className="aspect-square justify-center rounded-[15px] bg-black p-px pb-1">
              <View className="bg-accent w-full rounded-2xl">
                <Image source={require('../../assets/micronutrientes.png')} />
              </View>
            </TouchableOpacity>
            <Text className="text-accent text-center text-lg font-bold">
              {'Suplementação\nMicronutrientes'}
            </Text>
          </View>

          <View className="w-full items-center gap-y-1">
            <TouchableOpacity
              activeOpacity={0.8}
              className="aspect-square w-full justify-center rounded-[15px] bg-black p-px pb-1">
              <View className="bg-accent w-full flex-col items-center rounded-2xl">
                <Image className="h-1/2 w-1/2" source={require('../../assets/criancas.png')} />
                <Image className="h-1/2 w-1/2" source={require('../../assets/gestantes.png')} />
              </View>
            </TouchableOpacity>
            <Text className="text-accent text-center text-lg font-bold">
              {'Escolha o grupo\npopulacional'}
            </Text>
          </View>
        </View>

        <View className="mb-[20%] mt-auto items-center justify-center">
          <AppButton
            onPress={() => router.push('/start/sobre')}
            buttonClassName="bg-white py-0">
            <Text className="text-primary text-center text-xl font-bold">
              {'Sobre o\naplicativo'}
            </Text>
          </AppButton>
        </View>
      </View>
    </>
  );
};

export default Escolha01;
