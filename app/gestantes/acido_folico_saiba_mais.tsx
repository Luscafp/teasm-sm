import { AppButton } from 'components/button';
import { ExpandableButton } from 'components/expandableButton';
import HomeButton from 'components/home_button';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const AcidoFolicoSaibaMais: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    router.push(`/gestantes/${screen}`);
  };

  return (
    <SafeAreaView className="bg-background flex-1">
      {/* ScrollView para todo o conteúdo rolável */}
      <ScrollView 
        contentContainerStyle={{ paddingBottom: 80 }} // Espaço para o HomeButton
        showsVerticalScrollIndicator={false}
        className="px-6 pt-4"
      >
        {/* Cabeçalho */}
        <View className="mb-4">
          <Text className="text-primary text-center text-2xl font-bold uppercase">
            Saiba mais {'\n'}Ácido Fólico
          </Text>
          <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />
        </View>

        {/* Conteúdo expansível */}
        <View className="mb-8 space-y-4">
          <ExpandableButton
            title="O que é ácido fólico?"
            content="O ácido fólico é uma vitamina hidrossolúvel, ou seja, é uma vitamina que se dissolve em água e não é armazenada no corpo. Isso significa que, após ser absorvido, o que o organismo não utiliza imediatamente é eliminado pela urina. Por essa razão, é importante consumir essa vitamina regularmente, pois o corpo não consegue mantê-la por longos períodos."
          />

          <ExpandableButton
            title="Importância da suplementação"
            content="Para prevenir defeitos no fechamento do tubo neural do feto, pois ajuda a garantir o fechamento adequado do tubo neural, reduzindo o risco de malformações congênitas e promovendo o desenvolvimento saudável do feto. O tubo neural é uma estrutura embrionária que se forma nas primeiras semanas de gestação e é responsável pelo desenvolvimento do sistema nervoso e do cérebro do feto. Quando o tubo neural não se fecha corretamente, podem ocorrer malformações congênitas, como espinha bífida, mielomeningocele, anencefalia e fenda palatina."
          />

          <ExpandableButton
            title="Recomendações para uso"
            content="Horário de administração: de preferência sempre no mesmo horário, geralmente antes das refeições para melhor absorção.\nVia de administração: via oral, em comprimidos.\nInteração com outros medicamentos: deve-se evitar a ingestão simultânea com zinco, antiácidos e alguns antibióticos, pois podem reduzir sua absorção.\n\nEVITAR:\nTomar junto com leite ou chá, pois podem interferir na absorção.\nExceder a dose recomendada, pois excesso pode mascarar deficiências de vitamina B12."
          />

          <ExpandableButton
            title="Situações não recomendadas"
            content="Gestantes com alergia ao ácido fólico ou componentes da fórmula do suplemento. Pessoas com anemia perniciosa (causada por deficiência de vitamina B12), pois o ácido fólico pode mascarar os sintomas sem tratar a causa real."
          />

          <ExpandableButton
            title="Recomendações"
            content="Orientar quanto a importância do ácido fólico na prevenção de doenças;\nOrientar como tomar corretamente para melhor absorção;\nEnfatizar alimentos ricos em folato: Levedo de cerveja, quiabo cozido, feijão preto, espinafre cozido, soja verde, macarrão, amendoim torrado sem sal, beterraba crua, fígado de boi, fígado de galinha, avelã, castanha de caju, semente de girassol e milho cozido.\n\nAlém dos alimentos naturalmente ricos em ácido fólico, desde 2004 alguns alimentos são obrigatoriamente enriquecidos com a vitamina no Brasil, como a farinha de trigo e a farinha de milho, que devem conter o mínimo de 150 mcg de ácido fólico em cada 100 g de alimento;\nOrientar quanto possíveis efeitos colaterais, como náusea leve e alteração do apetite;\nImportância de não interromper o tratamento sem orientação profissional."
          />
        </View>
      </ScrollView>

      {/* HomeButton fixo na parte inferior */}
      <View className="absolute bottom-0 w-full">
        <HomeButton />
      </View>
    </SafeAreaView>
  );
};

export default AcidoFolicoSaibaMais;