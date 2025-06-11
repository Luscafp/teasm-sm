import { AppButton } from 'components/button';
import { ExpandableButton } from 'components/expandableButton';
import HomeButton from 'components/home_button';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const saiba_mais: React.FC = () => {
  const router = useRouter();

  const handleNavigate = (screen: string) => {
    router.push(`/criancas/${screen}`);
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
            title="O que é ferro?"
            content="O ferro é um mineral essencial para o corpo humano, em especial como componente essencial para a
 formação da hemoglobina e de muitas enzimas. Ele também é importante para o crescimento celular e
para o transporte de oxigênio.
"
          />

          <ExpandableButton
            title="Alimentos ricos em ferro"
            content="Alimentos de origem Animal:

● Carnes vermelhas (carne de boi, cordeiro e porco);
● Aves (frango e peru, especialmente as partes escuras);
● Peixes e frutos do mar (atum, sardinha, sururu, e ostras)

Alimentos de origem vegetal:

● leguminosas( feijão, lentilha, grão-de-bico e ervilhas);
● Vegetais de folhas verdes escuras (couve, Fava e brócolis);
● Sementes e nozes (sementes de abóbora, gergelim e amêndoas)
● Grãos integrais (aveia e arroz integral)
"
          />

          <ExpandableButton
            title="Deficiência de ferro"
            content="Durante o período da gestação, a criança recebe da mãe quantidade de ferro relativamente constante que é estocado no fígado. Esta reserva da mãe durante a gestação e a oferta do leite materno, garantirão aporte suficiente para os recém-nascidos a termo (que nasceram com 37 ou mais semanas e idade gestacional) até os 6 meses de vida. A partir dessa idade devido ao crescimento rápido da criança e pela ingestão inadequada de alimentos ricos em ferro pela criança, aumenta os ricos de depleção de ferro. 

Desse modo, as quantidades extremamente pobres de ferro na alimentação infantil associada a capacidade limitada do organismo em absorver o ferro, a necessidade desse mineral para o crescimento da criança e a alta incidência de infestações por parasitas (vermes), tornam as crianças um grupo vulnerável à carência de ferro. 

A instalação da deficiência de ferro na infância é gradual e os sintomas surgem lentamente. Quando há redução de ferro no organismo, a criança pode apresentar dois quadros: o da insuficiência de ferro e o da anemia sendo este o quadro mais grave da carência nutricional desse mineral.
 "
          />

          <ExpandableButton
            title="Dose e esquema"
            content="1. Idade da Criança para fazer Suplementação de ferro: 6 a 24 meses:
2. Dose recomendada: 10,0 (8 gotas ou 0,4 ml) – 12,5 mg (10 gotas ou 0,5 ml) de ferro
elementar por dia
3. Esquema para suplementação: é feito em 2 ciclos de 3 meses de administração diária
de sulfato ferroso, seguidos por uma pausa de 3 meses.

Exemplo: Fará ferro em Janeiro; Fevereiro e Março
Suspender o ferro em Abril, Maio e Junho
Voltar a fazer mais 3 meses: Julho, Agosto e Setembro.
Suspender por mais 3 meses: outubro, novembro e dezembro

Se o ferro disponível na Unidade de Saúde for a solução de 25 mg/ml:

a) 10 mg/dia – corresponde a 8 gotas ou 0,4 ml
b) 12,5 mg – corresponde a 10 gotas

Observação:

O profissional deverá fazer a dose mínima de 10 mg/dia nos casos em que a criança mamou exclusivamente ao seio até os 6 meses; a introdução alimentar foi feita em tempo oportuno e foi classificada com peso adequado para a idade;

fazer a dose máxima de 12,5mg/dia se: a mãe teve anemia durante a gestação mesmo que tratada; se a criança não mamou no peito ou recebeu alimentação mista (formula e leite materno); tem peso baixo para a idade ou problemas de alimentação (introdução tardia de alimentos complementares; uso de fórmulas; mingaus e papas).

Se o ferro disponível na Unidade de Saúde for o xarope de 5 mg/ml:

se a dose for de 10mg/dia – a criança deve receber 2 ml de ferro
se a dose for de 12,5mg/dia – a criança deve receber 2,5 ml
"
          />

          <ExpandableButton
            title="Recomendações"
            content="● Explicar aos pais a importância da suplementação de ferro para prevenir a deficiência de ferro e a anemia, especialmente em crianças de 6 a 24 meses, que estão em fase de crescimento e desenvolvimento;
● Informar aos pais sobre a dosagem correta do sulfato ferroso;
● Certificar-se de que os pais compreenderam as orientações e a quantidade correta do ferro;
● Reforçar que a suplementação deve ser feita diária e durante o ciclo de 3 meses, seguido de
uma pausa de 3 meses;
● Recomendar que o suplemento seja administrado antes da refeição principal para melhorar a
absorção;
● Evitar a administração junto com leite ou produtos lácteos, pois o cálcio pode interferir na
absorção do ferro.
● Orientar os pais a ficarem atentos a possíveis efeitos colaterais, como vômitos, diarreia,
constipação intestinal e dor abdominal;
● Informar que as crianças podem apresentar alteração do apetite e as fezes ficarão escuras;
● Orientar os pais a manter o frasco de ferro em local fresco e seco e longe do alcance de
crianças;
● Reforçar a importância de uma alimentação saudável e equilibrada, rica em alimentos que
contenham ferro, como carnes, feijões, lentilhas, vegetais de folhas verdes e cereais
fortificados.
"
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