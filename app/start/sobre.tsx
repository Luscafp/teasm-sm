import { useRouter } from 'expo-router';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeButton from 'components/home_button';
import 'react-native-gesture-handler';

const Sobre: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-background flex-1">
      {/* Cabeçalho */}
      <View className="w-full bg-background py-4 px-4">
        <Text className="text-xl font-bold text-center text-primary uppercase">
          SOBRE
        </Text>
        <View className="h-0.5 bg-blue-500 mx-4 mt-2" />
      </View>

      {/* Conteúdo principal com scroll */}
      <View className="flex-1 items-center px-4">
        {/* Container das imagens */}
        <View className="items-center my-4">
          <Image 
            className="w-48 h-48 mb-6" 
            source={require('../../assets/ufma.png')} 
            resizeMode="contain"
          />
          <Image 
            className="w-48 h-48" 
            source={require('../../assets/gepsfca.png')} 
            resizeMode="contain"
          />
        </View>

        {/* Textos formatados */}
        <View className="w-full mb-8">
          <Text className="text-lg font-bold text-center text-gray-800 mb-2">
            FRANCISCA GEORGINA MACEDO DE SOUSA
          </Text>
          <Text className="text-base text-center text-gray-600">
            Enfermeira, Mestre e Doutora em Enfermagem{'\n'}
            Docente UFMA, Líder do GEPSFCA/UFMA
          </Text>
        </View>

        <View className="w-full mb-8">
          <Text className="text-lg font-bold text-center text-gray-800 mb-2">
            LEONARDO SILVA MELO
          </Text>
          <Text className="text-base text-center text-gray-600">
            Estudante do curso de Graduação em Enfermagem da{'\n'}
            Universidade Federal do Maranhão, Membro do Grupo{'\n'} 
            de Estudo de Pesquisa na Saúde da Família, Criança e{'\n'}
            Adolescente - GEPSFCA/UFMA
          </Text>
        </View>
      </View>

      <HomeButton />
    </SafeAreaView>
  );
};

export default Sobre;