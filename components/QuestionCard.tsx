import { Text, View, TouchableOpacity } from 'react-native';

type Question = {
  question: string;
  answer: string;
};

type QuestionCardProps = {
  questionData: Question;
  showAnswer: boolean;
  isLast: boolean;
  onShowAnswer: () => void;
  onNextQuestion: () => void;
  onGoBack: () => void;
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  questionData,
  showAnswer,
  onShowAnswer,
  onNextQuestion,
  onGoBack,
  isLast,
}) => (
  <View className="p-4">

    <View className="my-4 rounded-lg border p-4 bg-white shadow">
      <Text className="font-semibold">{questionData.question}</Text>

      {showAnswer && (
        <Text className="mt-4 text-justify text-sm">
          <Text className="font-bold">Resposta: </Text>
          {questionData.answer}
        </Text>
      )}
    </View>

    <View className="flex flex-col items-center gap-y-3">
      {!showAnswer && (
        <TouchableOpacity onPress={onShowAnswer} className="rounded-full bg-white px-6 py-2 border">
          <Text className="text-black font-semibold">Ver resposta</Text>
        </TouchableOpacity>
      )}

      {showAnswer && !isLast && (
        <TouchableOpacity onPress={onNextQuestion} className="rounded-full bg-white px-6 py-2 border">
          <Text className="text-black font-semibold">Próxima questão</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={onGoBack} className="rounded-full bg-red-500 px-6 py-2">
        <Text className="text-white font-semibold">Voltar</Text>
      </TouchableOpacity>
    </View>
  </View>
);
