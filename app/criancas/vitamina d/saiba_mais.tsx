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
            Saiba mais {'\n'}Vitamina D
          </Text>
          <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />
        </View>

        <View className="mb-8 space-y-4">
          <ExpandableButton
            title="Funções da vitamina D"
            content={`• Regulação do cálcio e do fósforo:\n  - Minerais fundamentais para formação e manutenção de ossos e dentes saudáveis\n\n• Função muscular:\n  - Ajuda a manter a força e função muscular adequadas`}
          />

          <ExpandableButton
            title="Alimentos ricos"
            content={`Fontes animais:\n\n• Peixes gordurosos (melhores fontes):\n  - Salmão\n  - Atum\n  - Sardinha\n\n• Óleo de fígado de bacalhau\n• Fígado bovino\n• Queijos\n• Gemas de ovo\n\nAlimentos fortificados:\n\n• Leite\n• Sucos\n• Cereais\n\nIMPORTANTE:\n\nA principal fonte de vitamina D é a exposição à luz solar. Quando a pele é exposta à radiação UVB, ela sintetiza vitamina D naturalmente. A produção varia conforme:\n\n• Localização geográfica\n• Estação do ano\n• Hora do dia\n• Pigmentação da pele\n\nObservação: Não é recomendado banho de sol para crianças.`}
          />

          <ExpandableButton
            title="Importância da suplementação"
            content={`A vitamina D é essencial para:\n\n• Crescimento saudável\n• Absorção de cálcio\n• Fortalecimento de ossos e dentes\n\nConsequências da deficiência:\n\n• Cansaço e fraqueza\n• Raquitismo (ossos frágeis e deformados)\n• Diminuição da imunidade\n\nA suplementação garante:\n\n• Desenvolvimento adequado\n• Prevenção de problemas de saúde`}
          />

          <ExpandableButton
            title="Recomendações"
            content={`• Dosagem:\n  - Seguir rigorosamente a dose prescrita\n  - Evitar superdosagens\n\n• Alimentação:\n  - Manter dieta equilibrada\n\n• Armazenamento:\n  - Guardar o frasco em local fresco e arejado\n  - Manter fora do alcance de crianças`}
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