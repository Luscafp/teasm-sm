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
            title=""
            content=""
          />

          <ExpandableButton
            title=""
            content=""
          />

          <ExpandableButton
            title=""
            content=""
          />

          <ExpandableButton
            title=""
            content=""
          />

          <ExpandableButton
            title=""
            content=""
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