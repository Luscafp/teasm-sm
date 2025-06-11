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
            Saiba mais {'\n'}Vitamina A
          </Text>
          <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />
        </View>

        <View className="mb-8 space-y-4">
          <ExpandableButton
            title="O que é vitamina A?"
            content="A vitamina A é um nutriente essencial para o corpo, que ajuda a manter a visão saudável, fortalece o sistema imunológico, e mantém a pele e as mucosas (como a boca e o nariz) protegidas. Ajuda a combater as infecções oculares e na reparação das células que cobrem os pulmões, os intestinos e a garganta. Ela também é importante para o crescimento e desenvolvimento do corpo."
          />

          <ExpandableButton
            title="Alimentos ricos"
            content="Alimentos de fonte animal: fígado, peixes como atum e salmão, leite, queijo e ovos, especialmente a gema. 
Alimentos de fonte vegetal: Vegetais de folhas verdes como couve, brócolis, acelga, espinafre e salsa Legumes: cenoura, abobora ou jerimum, batata doce 
Frutas: manga, melão, caju, mamão, cajá, pequi, acerola,goiaba,tomate e buriti. 

RECOMENDAÇÃO: importante incluir estes alimentos na alimentação diária (almoço, jantar e nos lanches)."
          />

          <ExpandableButton
            title="Importância da suplementação"
            content="É importante que a criança receba a dose de vitamina A porque esse micronutriente desempenha um papel fundamental no crescimento e desenvolvimento saudável. A vitamina A é essencial para a manutenção da saúde ocular, ajudando a prevenir problemas de visão, como a cegueira noturna e outras complicações oculares. Além de ser fundamental para o funcionamento adequado do sistema imunológico, fortalecendo as defesas do organismo contra infecções e doenças, o que é especialmente importante em crianças, que são mais vulneráveis a infecções respiratórias e diarreicas. Portanto, a suplementação com a vitamina A é uma estratégia essencial para a saúde pública e o bem-estar das crianças."
          />

          <ExpandableButton
            title="Situações recomendadas"
            content="1. Deficiência de Vitamina A: Crianças que apresentam sinais de deficiência, como cegueira noturna ou outras complicações oculares; 
2. Áreas Endêmicas: Em regiões onde a deficiência de vitamina A é um problema de saúde pública (acima de 20% de prevalência), a suplementação em massa é recomendada, especialmente para crianças de 6 a 59 meses. No Estado do Maranhão, todas as crianças entre 6 e 59 meses devem ter acesso ao esquema de suplementação da Vitamina A; 
3. Crianças em Risco: Crianças com baixo peso e desnutridas devem receber uma dose de vitamina A independente do esquema, tendo o cuidado de administrar se a criança não recebeu nenhuma dose nos últimos 30 dias 
4. Condições de Saúde Especiais: Crianças com condições que afetam a absorção de nutrientes, como doenças gastrointestinais, podem precisar de suplementação adicional;
5. Após Doenças: Crianças que se recuperam de doenças infecciosas, como sarampo ou diarreia, podem se beneficiar da suplementação para ajudar a restaurar os níveis de vitamina A e fortalecer o sistema imunológico."
          />

          <ExpandableButton
            title="Situações não recomendadas"
            content="1. Excesso de Vitamina A: Crianças que já estão recebendo doses adequadas de vitamina A através da dieta ou de outros suplementos não devem receber suplementação adicional, pois isso pode levar a Hipervitaminose A, uma condição tóxica que pode causar sérios problemas de saúde. 
2. Condições de Acúmulo de Ferro: Crianças que têm doenças como hemocromatose, talassemia ou doença falciforme precisam de recomendação especializada. Nesses casos, a suplementação de vitamina A deve ser cuidadosamente avaliada, pois pode ser necessário ajustar a quantidade de vitamina A para evitar problemas relacionados ao excesso de ferro no organismo. 
3. Uso de Outros Suplementos: Crianças que estão recebendo sachês de micronutrientes, como os da estratégia NutriSUS, não devem receber suplementos adicionais de vitamina A, pois isso pode resultar em uma ingestão excessiva do micronutriente."
          />

        <ExpandableButton
            title="Procedimento de administração"
            content="1. Consulta de Puericultura: A administração das doses de vitamina A deve ser realizada quando das consultas de puericultura, que são momentos de acompanhamento do crescimento e desenvolvimento da criança. 
2. Registro: todas as doses de Vitamina A administradas devem ser registradas na Caderneta da Criança e no prontuário da Unidade Básica de Saúde"
          />

        <ExpandableButton
            title="Efeitos colaterais"
            content="1. Redução do Apetite: Algumas crianças podem apresentar diminuição do apetite no dia da administração da vitamina A no dia em que recebe a dose; 
2. Dor de Cabeça: Algumas crianças podem relatar dor de cabeça após a ingestão da Vitamina A. 
ATENÇÃO: caso a criança vomite logo após a administração da vitamina A o"
          />

        <ExpandableButton
            title="Recomendações"
            content="1. Importância da Suplementação: Explicar aos pais e familiares a importância da vitamina A para a saúde da criança, incluindo seu papel na prevenção de doenças e na promoção do
crescimento e desenvolvimento. 
2. Idade e Frequência: Informar sobre a idade correta para iniciar a suplementação (a partir dos 6 meses) e a frequência com que as doses devem ser administradas (a cada 6 meses). 
3. Forma de Administração: Esclareça que a vitamina A deve ser administrada por via oral. "
          />

        <ExpandableButton
            title="Cuidados durante adminstração"
            content="1. Verificar a dose de vitamina A (100.000 UI ou 200.000 UI); 
2. Verificar a data de validade antes da administração; 
3. Para abrir a cápsula, torcer a ponta da cápsula e puxar para cima. Não usar tesouras, lâminas, agulhas ou outros objetos perfurocortantes para abrir a cápsula evitando, assim, ferir os dedos e contaminar o produto. 
4. Técnica de Administração: posicione a criança no colo do familiar ou acompanhante; estimule a criança a abrir a boca; suspender levemente o seu queixo e segurar, apertando firmemente com a outra mão os lados da cápsula; deposite sobre a língua da criança todo o conteúdo da capsula. Caso a criança cuspa ou vomite o produto (vitamina A), não se deve administrar outra cápsula. Essa recomendação visa evitar o risco de superdosagem, pois não é possível determinar a quantidade que foi efetivamente ingerida antes de a criança cuspir ou vomitar. 
5. Monitoramento de Sintomas: Informe que é normal que a criança possa apresentar redução do apetite, vômitos ou dor de cabeça após a administração, mas que esses sintomas geralmente não requerem tratamento específico."
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