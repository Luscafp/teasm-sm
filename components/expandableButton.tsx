import { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronDown, ChevronUp } from 'lucide-react-native'; 
import clsx from 'clsx';

interface ExpandableButtonProps {
  title: string;
  content: string;
}

export const ExpandableButton = ({ title, content }: ExpandableButtonProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View className="w-full px-4 mb-4">
      <View
        className={clsx(
          'rounded-2xl bg-black shadow-md overflow-hidden pb-1 pr-1'
        )}
      >
        <TouchableOpacity
          onPress={() => setExpanded(!expanded)}
          activeOpacity={0.9}
          className="flex-row justify-between items-center px-4 py-3 rounded-2xl bg-cyan-300"
        >
          <Text className="text-white font-bold text-base flex-1">
            {title}
          </Text>
          {expanded ? (
            <ChevronUp color="#06b6d4" />
          ) : (
            <ChevronDown color="#06b6d4" />
          )}
        </TouchableOpacity>
      </View>

      {expanded && (
        <View className="mt-2 bg-gray-200 p-4 rounded-xl border border-gray-300">
          <Text className="text-gray-700 text-sm leading-relaxed">{content}</Text>
        </View>
      )}
    </View>
  );
};
