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
            content="️Formação da hemoglobina (proteína responsável pelo transporte de oxigênio para todas as células do corpo)
Contribui positivamente para o sistema imunológico defendendo a gestante de infecções 
Aumento da produção de glóbulos vermelhos, pois  durante a gestação há uma aumento na necessidade de oxigênio."
          />

          <ExpandableButton
            title="Alimentos ricos"
            content="O ferro pode ser encontrado em uma variedade de alimentos, tanto de origem animal quanto vegetal. 

Alimentos de origem Animal: 
Carnes vermelhas como carne de boi, cordeiro e porco.
Aves como frango e peru, especialmente as partes escuras.
Peixes e frutos do mar como atum, sardinha, sururu, e ostras.

Alimentos de Origem  vegetal: 
Leguminosas (fava feijão, lentilha, grão-de-bico e ervilhas);
Vegetais de folhas verdes escuras  (couve e brócolis); 
Sementes e nozes (sementes de abóbora, gergelim e amêndoas); 
Grãos integrais (aveia e arroz integral.)"
          />

          <ExpandableButton
            title="Importância da suplementação"
            content="Durante a gravidez, as necessidades de ferro aumentam muito porque o corpo precisa produzir mais sangue para a mãe e a criança. Porém, muitas mulheres não conseguem obter ferro suficiente apenas pela alimentação. Por isso, a suplementação é essencial para prevenir e tratar a deficiência de ferro.
ATENÇÃO:
Não fazer suplementação de ferro em mulheres portadoras de anemia falciforme, talassemias e hemacromatose e aquelas que são alérgicas ao ferro"
          />

          <ExpandableButton
            title="Recomendações"
            content="Esclarecer sobre a importância da suplementação para a mãe e para a criança;
Esclarecer sobre a dose, o horário a ser tomado e o tempo de duração da suplementação;
Corrigir  hábitos alimentares para aumentar o consumo de ferro;
Orientar sobre os possíveis efeitos colaterais ( náusea, dor abdominal, diarreia ou constipação) e como aliviá-los;
Orientar sobre os alimentos ricos em ferro, os que facilitam ou dificultam a absorção do ferro."
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