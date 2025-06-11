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
            Saiba mais {'\n'}Ferro
          </Text>
          <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />
        </View>

        <View className="mb-8 space-y-4">
          <ExpandableButton
            title="Funções do ferro na gestação"
            content={`• Formação da hemoglobina:\n  - Proteína responsável pelo transporte de oxigênio\n  - Leva oxigênio para todas as células do corpo\n\n• Fortalecimento imunológico:\n  - Protege a gestante contra infecções\n\n• Produção de glóbulos vermelhos:\n  - Aumenta durante a gestação\n  - Atende maior necessidade de oxigênio`}
          />

          <ExpandableButton
            title="Alimentos ricos em ferro"
            content={`Fontes animais:\n\n• Carnes vermelhas:\n  - Carne de boi\n  - Cordeiro\n  - Porco\n\n• Aves:\n  - Frango (partes escuras)\n  - Peru (partes escuras)\n\n• Peixes e frutos do mar:\n  - Atum\n  - Sardinha\n  - Sururu\n  - Ostras\n\nFontes vegetais:\n\n• Leguminosas:\n  - Fava\n  - Feijão\n  - Lentilha\n  - Grão-de-bico\n  - Ervilhas\n\n• Vegetais:\n  - Couve\n  - Brócolis\n\n• Sementes e nozes:\n  - Sementes de abóbora\n  - Gergelim\n  - Amêndoas\n\n• Grãos integrais:\n  - Aveia\n  - Arroz integral`}
          />

          <ExpandableButton
            title="Importância da suplementação"
            content={`• Necessidades aumentadas:\n  - Produção de mais sangue para mãe e bebê\n  - Dificuldade em obter ferro suficiente apenas pela alimentação\n\n• Benefícios:\n  - Previne deficiência de ferro\n  - Trata anemia ferropriva\n\nATENÇÃO:\n\nContraindicações:\n- Anemia falciforme\n- Talassemias\n- Hemocromatose\n- Alergia ao ferro`}
          />

          <ExpandableButton
            title="Recomendações"
            content={`• Educação:\n  - Explicar importância para mãe e bebê\n  - Orientar sobre dose e horário\n  - Esclarecer duração do tratamento\n\n• Alimentação:\n  - Aumentar consumo de alimentos ricos em ferro\n  - Identificar alimentos que ajudam ou atrapalham absorção\n\n• Efeitos colaterais:\n  - Náusea\n  - Dor abdominal\n  - Diarreia ou constipação\n  - Orientar como aliviar sintomas`}
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