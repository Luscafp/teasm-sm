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
            content="● Regulação do cálcio e do fósforo, minerais fundamentais para a formação e manutenção de ossos e dentes saudáveis; 
● Está envolvida na função muscular, ajudando a manter a força e a função muscular adequadas."
          />

          <ExpandableButton
            title="Alimentos ricos"
            content="● Peixes gordurosos, como salmão, atum e sardinha (melhores fontes de vitamina D); ● Óleo de fígado de bacalhau, fígado bovino, queijos e gemas de ovo. 
● Leite, sucos e cereais, são frequentemente fortificados com vitamina D para ajudar a aumentar a ingestão dessa vitamina na população. 

IMPORTANTE: a vitamina D pode ser encontrada em diversas fontes, sendo a principal delas a exposição à luz solar. Quando a pele é exposta à radiação ultravioleta B (UVB), ela sintetiza vitamina D de forma natural. Por isso, a quantidade de vitamina D que uma pessoa produz pode variar de acordo com fatores como a localização geográfica, a estação do ano, a hora do dia e a pigmentação da pele. No entanto, não é recomendado banho de sol para essas crianças."
          />

          <ExpandableButton
            title="Importância da suplementação  "
            content="A vitamina D é essencial para o crescimento saudável, pois ajuda na absorção de cálcio e fortalece os ossos e dentes. A falta dessa vitamina pode causar cansaço, fraqueza e, em casos graves, raquitismo, deixando os ossos frágeis e deformados e diminuir a imunidade. Por isso, a suplementação é recomendada para garantir o desenvolvimento adequado e prevenir problemas de saúde."
          />

          <ExpandableButton
            title="Recomendações"
            content="● Informar aos pais que sigam rigorosamente a dose prescrita, evitando superdosagens; 
● Orientar aos pais que a criança tenha uma alimentação equilibrada;
● Orientar aos pais que guardem o frasco com a Vitamina D em local fresco e arejado e fora do alcance de crianças."
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