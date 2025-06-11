import { AppButton } from 'components/button';
import { ExpandableButton } from 'components/expandableButton';
import HomeButton from 'components/home_button';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const saiba_mais: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    router.push(`/gestantes/${screen}`);
  };

  return (
    <SafeAreaView className="bg-background flex-1">
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 80 }} 
        showsVerticalScrollIndicator={false}
        className="px-6 pt-4"
      >

        <View className="mb-4">
          <Text className="text-primary text-center text-2xl font-bold uppercase">
            Saiba mais {'\n'}Cálcio
          </Text>
          <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />
        </View>

        <View className="mb-8 space-y-4">
          <ExpandableButton
            title="Alimentos ricos em cálcio"
            content={`• Leite e derivados:\n  - Queijo\n  - Iogurte\n\n• Vegetais de folhas escuras:\n  - Couve\n  - Espinafre\n  - Manjericão\n  - Vinagreira\n  - Agrião\n\n• Peixes:\n  - Sardinha (com ossos)\n  - Salmão (com ossos)\n\n• Sementes e castanhas:\n  - Chia\n  - Amêndoas\n  - Gergelim\n\n• Alimentos enriquecidos:\n  - Leite vegetal fortificado\n  - Cereais fortificados`}
          />

          <ExpandableButton
            title="Importância da suplementação"
            content={`• Prevenção de distúrbios hipertensivos:\n  - Principalmente pré-eclâmpsia\n  - Redução de morbimortalidade materna e perinatal\n\nO que é pré-eclâmpsia?\n\n- Complicação da gravidez caracterizada por:\n  • Pressão arterial elevada (hipertensão)\n  • Presença de proteínas na urina (proteinúria)\n\nRiscos:\n\n• Pode causar inchaço e danos a órgãos (fígado, rins)\n• Pode evoluir para eclampsia (convulsões)\n• Risco de vida para mãe e bebê`}
          />

          <ExpandableButton
            title="Recomendações para uso"
            content={`• Evitar consumir com:\n  - Feijão\n  - Fígado\n  - Vegetais: espinafre, acelga, couve, beterraba\n  - Batata-doce\n  - Sementes e castanhas\n  - Cereais\n  (Contêm substâncias que prejudicam absorção)\n\n• Reduzir:\n  - Cafeína\n  - Alimentos ultraprocessados\n\n• Melhor horário:\n  - À noite\n  - Acompanhado de leite ou suco de frutas\n  (Ajuda na absorção do cálcio)`}
          />

          <ExpandableButton
            title="Quem pode prescrever?"
            content="Profissionais da Atenção Primária à Saúde (APS):\n\n• Médicos(as)\n• Enfermeiros(as)\n• Nutricionistas"
          />

          <ExpandableButton
            title="Recomendações gerais"
            content={`• Alimentação:\n  - Incentivar dieta saudável e equilibrada\n  - Priorizar alimentos naturais ou pouco processados\n  - Alertar sobre riscos dos ultraprocessados\n\n• Suplementação:\n  - Orientar sobre dosagem correta\n  - Explicar horário ideal de consumo\n\n• Acompanhamento:\n  - Orientar procurar unidade de saúde em caso de desconforto\n  - Garantir hábitos alimentares saudáveis para gestante e criança`}
          />
        </View>
      </ScrollView>

      <View className="absolute bottom-0 w-full">
        <HomeButton />
      </View>
    </SafeAreaView>
  );
};

export default saiba_mais;