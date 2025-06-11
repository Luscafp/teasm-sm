import { useLocalSearchParams } from 'expo-router';
import ImageViewing from 'react-native-image-viewing';
import { useState } from 'react';
import { Image } from 'react-native';

const imageMap: Record<number, any> = {
  1: require('../../assets/micronutrientes_1.png'),
  2: require('../../assets/micronutrientes_2.png'),
  3: require('../../assets/acido_folico.png'),
  4: require('../../assets/calcio.png'),
  5: require('../../assets/ferro_gestantes.png'),
  6: require('../../assets/ferro_criancas.png'),
  7: require('../../assets/vitaminaA.png'),
  8: require('../../assets/vitaminaD.png'),
};

const ImageZoom = () => {
  const { id } = useLocalSearchParams();
  const numericId = Number(id);
  const [visible, setVisible] = useState(true);

  const imageUri = Image.resolveAssetSource(imageMap[numericId]).uri;

  return (
    <ImageViewing
      images={[{ uri: imageUri }]}
      imageIndex={0}
      visible={visible}
      onRequestClose={() => setVisible(false)}
    />
  );
};

export default ImageZoom;
