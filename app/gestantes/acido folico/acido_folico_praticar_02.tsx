import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { QuestionCard }  from 'components/QuestionCard';
import { questions } from './questions';
import { Home } from 'lucide-react-native';
import HomeButton from 'components/home_button';

const PraticarScreen: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    setShowAnswer(false);
    setCurrent((prev) => prev + 1);
  };

  const handleBack = () => router.back();

  if (current >= questions.length) {
    return (
      <View className="p-6 items-center justify-center flex-1">
        <Text className="text-center text-xl font-bold">Parabéns! Você finalizou todas as questões.</Text>
        <TouchableOpacity onPress={handleBack} className="mt-6 bg-red-500 px-6 py-2 rounded-full">
          <Text className="text-white">Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <QuestionCard
      questionData={questions[current]}
      showAnswer={showAnswer}
      onShowAnswer={() => setShowAnswer(true)}
      onNextQuestion={handleNext}
      onGoBack={handleBack}
      isLast={current === questions.length - 1}
    />
  );

};

export default PraticarScreen;
