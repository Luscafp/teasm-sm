import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { QuestionCard } from 'components/QuestionCard';
import { questions } from './questions';
import HomeButton from 'components/home_button';
import { SafeAreaView } from 'react-native-safe-area-context';

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
      <SafeAreaView className="flex-1 bg-background">
        <View className="px-6 pt-4 mb-4">
          <Text className="text-primary text-center text-2xl font-bold uppercase">
            Praticar
          </Text>
          <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />
        </View>

        <View className="p-6 items-center justify-center flex-1">
          <Text className="text-lg font-semibold mb-4 text-center">Você concluiu todas as perguntas!</Text>
          <TouchableOpacity onPress={handleBack} className="mt-6 bg-red-500 px-6 py-2 rounded-full">
            <Text className="text-white">Voltar</Text>
          </TouchableOpacity>
        </View>

        <View className="absolute bottom-0 w-full">
          <HomeButton />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="px-6 pt-4 mb-4">
        <Text className="text-primary text-center text-2xl font-bold uppercase">
          Praticar
        </Text>
        <View className="h-0.5 bg-blue-400 mt-2 mb-6 mx-6" />
      </View>

      <QuestionCard
        questionData={questions[current]}
        showAnswer={showAnswer}
        onShowAnswer={() => setShowAnswer(true)}
        onNextQuestion={handleNext}
        onGoBack={handleBack}
        isLast={current === questions.length - 1}
      />

      <View className="absolute bottom-0 w-full">
        <HomeButton />
      </View>
    </SafeAreaView>
  );
};

export default PraticarScreen;
