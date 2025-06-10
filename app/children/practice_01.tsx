import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import Practice from 'components/practice';
import HomeButton from 'components/home_button';

const Practic01ePage = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1">
        <Practice />
      </View>
      <HomeButton />
    </SafeAreaView>
  );
};

export default Practic01ePage;
