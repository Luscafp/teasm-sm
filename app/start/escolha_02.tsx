import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { AppButton } from 'components/button'; // Certifique-se de que esse botão esteja disponível
import HomeButton from 'components/home_button';

const Escolha02: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <StatusBar style="light" />
      <View style={{ flex: 1 }} className="bg-background flex flex-1">
        {/* Cabeçalho */}
        <View className="bg-primary h-[20%] w-full rounded-b-[36px] pb-1">
          <View className="bg-accent h-full w-full items-center justify-center rounded-b-[36px] pt-4">
            <Text className="text-center text-3xl font-black text-white">
              {'O que o usuário quer\nfazer?'}
            </Text>
          </View>
        </View>

        {/* Opções */}
        <View className="mx-auto mt-[10%] w-[40%] items-center gap-y-6">
          {/* Crianças */}
          <View className="w-full items-center gap-y-1">
            <TouchableOpacity
              onPress={() => router.push('criancas/criancas_home')}
              activeOpacity={0.8}
              className="aspect-square justify-center rounded-[15px] bg-black p-px pb-1">
              <View className="bg-accent w-full rounded-2xl">
                <Image source={require('../../assets/criancas.png')} />
              </View>
            </TouchableOpacity>
            <Text className="text-accent text-center text-lg font-bold">Crianças</Text>
          </View>

          {/* Gestantes/Puérpera */}
          <View className="w-full items-center gap-y-1">
            <TouchableOpacity
              onPress={() => router.push('gestantes/gestantes_home')}
              activeOpacity={0.8}
              className="aspect-square w-full justify-center rounded-[15px] bg-black p-px pb-1">
              <View className="bg-accent w-full h-full flex-col justify-center items-center rounded-2xl">
                <Image source={require('../../assets/gestantes.png')} className="w-[90%]" />
              </View>
            </TouchableOpacity>
            <Text className="text-accent text-center text-lg font-bold">
              {'Gestantes/\nPuérpera'}
            </Text>
          </View>
        </View>

        <HomeButton/>
        </View>
    </>
  );
};

export default Escolha02;
