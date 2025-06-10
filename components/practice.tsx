import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const Practice: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('Ver resposta');

  const handleToggleAnswer = () => {
    if (!showAnswer) {
      setShowAnswer(true);
      setButtonLabel('Próxima questão');
    } else {
      setShowAnswer(false);
      setButtonLabel('Ver resposta');
    }
  };

  return (
    <View className="flex-1 px-4">
      {/* Título */}
      <View className="items-center justify-center" style={{ height: '14%' }}>
        <Text style={{ fontSize: 32, color: '#67A5F7', fontWeight: 'bold' }}>Praticar</Text>
        <View style={{ height: 3, width: '95%', backgroundColor: 'black', marginTop: 4 }} />
      </View>

      {/* Área de prática */}
      <View style={{ height: '75%', paddingVertical: 16, justifyContent: 'space-between' }}>
        <View>
          <TextInput
            placeholder="Digite sua resposta aqui"
            className="border border-black rounded-lg p-4 text-black"
            multiline
          />
          {showAnswer && (
            <Text className="text-black mt-2 ml-1 font-semibold">Resposta</Text>
          )}
        </View>

        {/* Botões */}
        <View className="flex-row justify-between">
          <TouchableOpacity
            onPress={handleToggleAnswer}
            className="bg-white border border-black rounded-xl shadow-lg px-4 py-3 flex-1 mr-2"
          >
            <Text className="text-black text-center font-bold">{buttonLabel}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {}}
            className="bg-[#FA3939] border border-black rounded-xl shadow-lg px-4 py-3 flex-1 ml-2"
          >
            <Text className="text-black text-center font-bold">Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Practice;
