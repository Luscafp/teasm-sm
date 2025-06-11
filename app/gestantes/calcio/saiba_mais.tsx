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
            title="Alimentos ricos"
            content="Leite e derivados: queijo, iogurte;
Vegetais de folhas escuras: couve, espinafre; manjericão, Vinagreira e agrião
Peixes: sardinha e salmão com ossos;
Sementes e castanhas: chia, amêndoas, gergelim;
Alimentos enriquecidos: leite vegetal e cereais fortificados."
          />

          <ExpandableButton
            title="Importância da suplementação"
            content="Na prevenção de  distúrbios hipertensivos, especialmente a pré-eclâmpsia, que é uma das principais causas de morbimortalidade materna e perinatal no Brasil.
 Pré-eclâmpsia é uma complicação da gravidez caracterizada pelo aumento da pressão arterial (hipertensão) e pela presença de proteínas na urina (proteinúria), podendo levar a inchaço e danos em órgãos como fígado e rins. Se não for tratada, pode evoluir para eclampsia, uma condição grave que causa convulsões, podendo colocar em risco a vida da mãe e do bebê."
          />

          <ExpandableButton
            title="Recomendações para uso"
            content="Evitar tomar o suplemento de cálcio junto com alimentos como feijão, fígado, espinafre, acelga, couve, beterraba, batata-doce, sementes, castanhas e cereais, pois eles contêm substâncias que podem atrapalhar a absorção do cálcio. 
O consumo excessivo de cafeína e alimentos ultraprocessados também pode reduzir a absorção desse mineral.
Uma boa opção é tomar o suplemento à noite, acompanhado de um copo de leite ou suco de frutas, para ajudar na absorção do cálcio."
          />

          <ExpandableButton
            title="Quem pode prescrever?"
            content="A prescrição pode ser feita por médicos(as), enfermeiros(as) e nutricionistas das equipes da Atenção Primária à Saúde (APS)."
          />

          <ExpandableButton
            title="Recomendações"
            content="Incentivar uma alimentação saudável e equilibrada, que é essencial para a saúde da gestante e o desenvolvimento do feto;
Recomendar o consumo de alimentos naturais ou pouco processados, que são melhores para o desenvolvimento do feto e para a saúde da gestante, além de ajudar a prevenir problemas de saúde;
Alertar sobre os riscos de alimentos ultraprocessados, que podem prejudicar tanto a gestante quanto para a crianças;
Garantir não só a suplementação  com cálcio, mas também incentivando hábitos alimentares saudáveis para a gestante e para a criança;
Orientar a gestante sobre o uso correto do cálcio, quanto à dosagem e ao horário correto; 
Orientar a gestante a procurar a unidade de saúde caso apresente  algum desconforto com o uso do cálcio."
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