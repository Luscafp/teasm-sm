import { useRouter } from 'expo-router';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeButton from 'components/home_button';
import 'react-native-gesture-handler';

const Sobre: React.FC = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="bg-background flex-1">
        <View className="flex-1">
            <View className="w-full bg-background py-4 px-4">
            <Text className="text-xl font-bold text-center text-primary uppercase">
                SOBRE
            </Text>
            <View className="h-0.5 bg-blue-500 mx-4 mt-2" />
            </View>
        </View>

        <Image className="" source={require('../../assets/ufma.png')} />
        <Image className="" source={require('../../assets/gepsfca.png')} />

        <Text className="">
            FRANCISCA GEORGINA MACEDO DE SOUSA {'/n'}
            Enfermeira, Mestre e Doutora em Enfermagem
            Docente UFMA, Líder do GEPSFCA/UFMA
        </Text>

        <Text className="">
            LEONARDO SILVA MELO {'/n'}
            Estudante do curso de Graduação em Enfermagem da
            Universidade Federal do Maranhão, Membro do Grupo 
            de Estudo de Pesquisa na Saúde da Família, Criança e
            Adolescente - GEPSFCA/UFMA  
        </Text>
        
        <HomeButton></HomeButton>
    </SafeAreaView>
    
  );
};

export default Sobre;