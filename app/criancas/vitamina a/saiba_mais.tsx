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
            content={`Alimentos de fonte animal:\n\n• Fígado\n• Peixes como atum e salmão\n• Leite\n• Queijo\n• Ovos (especialmente a gema)\n\nAlimentos de fonte vegetal:\n\n• Vegetais de folhas verdes:\n  - Couve\n  - Brócolis\n  - Acelga\n  - Espinafre\n  - Salsa\n\n• Legumes:\n  - Cenoura\n  - Abóbora ou jerimum\n  - Batata doce\n\n• Frutas:\n  - Manga\n  - Melão\n  - Caju\n  - Mamão\n  - Cajá\n  - Pequi\n  - Acerola\n  - Goiaba\n  - Tomate\n  - Buriti\n\nRECOMENDAÇÃO: importante incluir estes alimentos na alimentação diária (almoço, jantar e nos lanches).`}
          />

          <ExpandableButton
            title="Importância da suplementação"
            content="É importante que a criança receba a dose de vitamina A porque esse micronutriente desempenha um papel fundamental no crescimento e desenvolvimento saudável.\n\nA vitamina A é essencial para:\n\n• Manutenção da saúde ocular\n• Prevenção de problemas de visão (como cegueira noturna)\n• Funcionamento adequado do sistema imunológico\n• Fortalecimento das defesas contra infecções\n\nIsso é especialmente importante em crianças, que são mais vulneráveis a infecções respiratórias e diarreicas. Portanto, a suplementação com a vitamina A é uma estratégia essencial para a saúde pública e o bem-estar das crianças."
          />

          <ExpandableButton
            title="Situações recomendadas"
            content={`1. Deficiência de Vitamina A:\n   - Crianças com sinais de deficiência (cegueira noturna ou outras complicações oculares)\n\n2. Áreas Endêmicas:\n   - Regiões com deficiência de vitamina A como problema de saúde pública (acima de 20% de prevalência)\n   - No Estado do Maranhão, todas as crianças entre 6 e 59 meses devem receber suplementação\n\n3. Crianças em Risco:\n   - Baixo peso e desnutridas (desde que não tenham recebido dose nos últimos 30 dias)\n\n4. Condições de Saúde Especiais:\n   - Doenças que afetam a absorção de nutrientes (doenças gastrointestinais)\n\n5. Após Doenças:\n   - Recuperação de doenças infecciosas (sarampo ou diarreia)`}
          />

          <ExpandableButton
            title="Situações não recomendadas"
            content={`1. Excesso de Vitamina A:\n   - Crianças com ingestão adequada através da dieta\n   - Risco de Hipervitaminose A (condição tóxica)\n\n2. Condições de Acúmulo de Ferro:\n   - Hemocromatose\n   - Talassemia\n   - Doença falciforme\n   (Necessitam avaliação especializada)\n\n3. Uso de Outros Suplementos:\n   - Crianças recebendo sachês de micronutrientes (como NutriSUS)\n   - Risco de ingestão excessiva`}
          />

          <ExpandableButton
            title="Procedimento de administração"
            content={`1. Consulta de Puericultura:\n   - Administrar durante as consultas de acompanhamento\n\n2. Registro:\n   - Anotar na Caderneta da Criança\n   - Registrar no prontuário da Unidade Básica de Saúde`}
          />

          <ExpandableButton
            title="Efeitos colaterais"
            content={`1. Redução do Apetite:\n   - Pode ocorrer no dia da administração\n\n2. Dor de Cabeça:\n   - Algumas crianças podem relatar após a ingestão\n\nATENÇÃO:\n- Se a criança vomitar logo após a administração, não repetir a dose`}
          />

          <ExpandableButton
            title="Recomendações"
            content={`1. Importância da Suplementação:\n   - Explicar aos pais o papel da vitamina A na prevenção de doenças\n   - Destacar a importância para crescimento e desenvolvimento\n\n2. Idade e Frequência:\n   - Iniciar aos 6 meses\n   - Administrar a cada 6 meses\n\n3. Forma de Administração:\n   - Via oral`}
          />

          <ExpandableButton
            title="Cuidados durante administração"
            content={`1. Verificação:\n   - Conferir dose (100.000 UI ou 200.000 UI)\n   - Checar data de validade\n\n2. Abertura da Cápsula:\n   - Torcer a ponta e puxar para cima\n   - Não usar objetos cortantes\n\n3. Técnica de Administração:\n   - Posicionar a criança no colo\n   - Estimular a abrir a boca\n   - Suspender levemente o queixo\n   - Depositar conteúdo sobre a língua\n\n4. Em caso de vômito:\n   - Não administrar outra cápsula\n   - Evitar risco de superdosagem\n\n5. Monitoramento:\n   - Sintomas comuns:\n     - Redução do apetite\n     - Vômitos\n     - Dor de cabeça\n   - Geralmente não requerem tratamento`}
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