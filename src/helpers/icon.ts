import { ICON_LIST } from '@/constants/icons';

export const getIcon = (value: string) => {
  try {
    const icon = ICON_LIST.find((icon) => icon.value === value);
    return icon ? icon : ICON_LIST[0];
  } catch (error) {
    return ICON_LIST[0];
  }
};
