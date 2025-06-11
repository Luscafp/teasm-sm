import { AppButton } from 'components/button';
import { ExpandableButton } from 'components/expandableButton';
import HomeButton from 'components/home_button';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AcidoFolicoSaibaMais: React.FC = () => {
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
            Saiba mais {'\n'}Ácido Fólico
          </Text>
          <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />
        </View>

        <View className="mb-8 space-y-4">
          <ExpandableButton
            title="O que é ácido fólico?"
            content="O ácido fólico é uma vitamina hidrossolúvel (que se dissolve em água) e não é armazenada no corpo. O excesso é eliminado pela urina, por isso é necessário consumo regular através da alimentação ou suplementação."
          />

          <ExpandableButton
            title="Importância da suplementação"
            content={`• Previne defeitos no fechamento do tubo neural do feto\n• Reduz risco de malformações congênitas\n• Promove desenvolvimento saudável do feto\n\nO tubo neural:\n- Forma-se nas primeiras semanas de gestação\n- Desenvolve o sistema nervoso e cérebro\n\nProblemas no fechamento podem causar:\n- Espinha bífida\n- Mielomeningocele\n- Anencefalia\n- Fenda palatina`}
          />

          <ExpandableButton
            title="Recomendações para uso"
            content={`• Horário:\n  - Preferencialmente no mesmo horário\n  - Antes das refeições para melhor absorção\n\n• Via de administração:\n  - Comprimidos via oral\n\n• Interações medicamentosas:\n  - Evitar uso com zinco, antiácidos e alguns antibióticos\n  - Pode reduzir absorção\n\nEVITAR:\n\n• Tomar com leite ou chá\n• Exceder dose recomendada\n  - Pode mascarar deficiências de vitamina B12`}
          />

          <ExpandableButton
            title="Situações não recomendadas"
            content={`• Alergia ao ácido fólico ou componentes do suplemento\n\n• Anemia perniciosa (deficiência de vitamina B12):\n  - O ácido fólico pode mascarar sintomas\n  - Sem tratar a causa real`}
          />

          <ExpandableButton
            title="Recomendações gerais"
            content={`• Orientações importantes:\n  - Explicar a importância na prevenção de doenças\n  - Ensinar como tomar para melhor absorção\n\n• Alimentos ricos em folato:\n  - Levedo de cerveja\n  - Quiabo cozido\n  - Feijão preto\n  - Espinafre cozido\n  - Fígado (boi/galinha)\n  - Oleaginosas (avelã, castanha)\n\n• Alimentos fortificados (desde 2004):\n  - Farinha de trigo\n  - Farinha de milho\n  - Devem conter mínimo de 150mcg/100g\n\n• Efeitos colaterais:\n  - Náusea leve\n  - Alteração do apetite\n\n• Não interromper tratamento sem orientação profissional`}
          />
        </View>
      </ScrollView>

      <View className="absolute bottom-0 w-full">
        <HomeButton />
      </View>
    </SafeAreaView>
  );
};

export default AcidoFolicoSaibaMais;