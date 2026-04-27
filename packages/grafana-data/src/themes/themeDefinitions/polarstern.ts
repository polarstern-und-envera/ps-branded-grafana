import { NewThemeOptions } from '../createTheme';

const polarsternTheme: NewThemeOptions = {
  name: 'Polarstern',
  colors: {
    mode: 'light',
    border: {
      weak: 'rgba(0, 0, 0, 0.12)',
      medium: 'rgba(0, 0, 0, 0.20)',
      strong: 'rgba(0, 0, 0, 0.30)',
    },
    text: {
      primary: '#142828',
      secondary: 'rgba(20, 40, 40, 0.75)',
      disabled: 'rgba(20, 40, 40, 0.65)',
      link: '#1A82E2',
      maxContrast: '#000000',
    },
    primary: {
      main: '#142828',
      text: '#142828',
      border: '#E55B4D',
      name: 'primary',
      shade: '#E55B4D',
      transparent: '#FF6F6126',
      contrastText: '#FFFFFF',
      borderTransparent: '#FF6F6140',
    },
    secondary: {
      main: '#FFFFFF',
      text: '#695f53',
      border: '#d9cec0',
      name: 'secondary',
      shade: '#d9cec0',
      transparent: '#FFFFFF26',
      contrastText: '#4c4339',
      borderTransparent: '#FFFFFF40',
    },
    info: {
      main: '#1A82E2',
    },
    error: {
      main: '#F07D69',
      text: '#F07D69',
    },
    success: {
      main: '#B4CD91',
      text: '#C8DCB4',
    },
    warning: {
      main: '#E6C814',
      text: '#F0D75A',
    },
    background: {
      canvas: '#FFFFFF',
      primary: '#FFFFFF',
      secondary: '#f9f3e8',
      elevated: '#FFFFFF',
    },
    action: {
      hover: 'rgba(0, 220, 185, 0.12)',
      selected: 'rgba(0, 220, 185, 0.08)',
      selectedBorder: '#E6C814',
      focus: 'rgba(0, 220, 185, 0.12)',
      hoverOpacity: 0.08,
      disabledText: 'rgba(168, 156, 134, 0.5)',
      disabledBackground: 'rgba(168, 156, 134, 0.06)',
      disabledOpacity: 0.38,
    },
    gradients: {
      brandHorizontal: 'linear-gradient(270deg,rgba(255, 111, 97, 1) 0%, rgba(255, 167, 58, 1) 100%)',
      brandVertical: 'linear-gradient(0deg, rgba(255, 111, 97, 1) 0%, rgba(255, 167, 58, 1) 100%)',
    },
    contrastThreshold: 3,
    hoverFactor: 0.03,
    tonalOffset: 0.15,
  },
};

export default polarsternTheme;
