import { FC, PropsWithChildren } from 'react';
import { TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

export const AppButton: FC<
  PropsWithChildren<
    {
      backgroundClassName?: string;
      buttonClassName?: string;
    } & TouchableOpacityProps
  >
> = ({ backgroundClassName = 'bg-primary', buttonClassName = 'bg-white', children, ...rest }) => {
  return (
    <View
      className={`pb-[3.5px] pl-[1px] pr-[3px] pt-[1px] ${backgroundClassName} overflow-hidden rounded-full`}>
      <TouchableOpacity
        {...rest}
        activeOpacity={0.9}
        className={`px-14 py-3 justify-center ${buttonClassName} overflow-hidden rounded-full`}>
        {children}
      </TouchableOpacity>
    </View>
  );
};
