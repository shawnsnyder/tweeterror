import { withAlpha } from './helpers';

// use Semantic groups first and only refer to RawColors when
// there are no semantic alternative.
export const RawColors = {
  White: '#FFFFFF',
  Black: '#000000',
  Gray: {
    Lightest: '#F9F9F9',
    Lighter: '#E9EBED',
    Light: '#A9ABAE',
    Base: '#76797C',
    Dark: '#5C5E61',
    Darker: '#2A2B2E',
    Darkest: '#17181A',
  },
  Purple: {
    Lighter: '#EEEBFD',
    Light: '#CFC5F7',
    Base: '#5115AA',
    Dark: '#41097A',
    Darker: '#2C0447',
  },
  Blue: {
    Base: '#5268FF',
  },
  Red: {
    Light: '#FFF2F2',
    Base: '#D43030',
    Dark: '#AC1D1D',
  },
  Functional: {
    Red: '#D43030',
    Yellow: '#D49B21',
    Green: '#32B163',
    Blue: '#6276FF',
  },
  Avatars: {
    Red40: '#FDA9A9',
    Red55: '#F36464',
    Blue40: '#96ACFF',
    Blue55: '#6276FF',
    Green40: '#92DDAB',
    Green70: '#15964D',
    Yellow50: '#F9C346',
    Yellow70: '#B17D14',
    Orange50: '#FF904B',
    Purple50: '#A08DED',
  },
};

export const BaseColors = {
  Primary: RawColors.Purple.Base,
  Alternative: RawColors.Purple.Dark,
  White: RawColors.White,
  AlmostBlack: RawColors.Gray.Darkest,
};

export const TextColor = {
  Primary: RawColors.Gray.Darker,
  Secondary: RawColors.Gray.Dark,
  Tertiary: RawColors.Gray.Base,
  Placeholder: RawColors.Gray.Light,
  Disabled: RawColors.Gray.Light,
  Pending: RawColors.Gray.Light,
  Highlight: RawColors.Purple.Base,
  HighlightHover: RawColors.Purple.Dark,
  White: RawColors.White,
  Black: RawColors.Black,
  Blue: RawColors.Blue.Base,
};

export const IconColor = {
  Light: RawColors.Gray.Lighter,
  Base: RawColors.Gray.Dark,
  Dark: RawColors.Gray.Darker,
  Active: RawColors.Purple.Base,
};

export const AvatarColors = {
  RedLight: RawColors.Avatars.Red40,
  Red: RawColors.Avatars.Red55,
  BlueLight: RawColors.Avatars.Blue40,
  Blue: RawColors.Avatars.Blue55,
  GreenLight: RawColors.Avatars.Green40,
  Green: RawColors.Avatars.Green70,
  Yellow: RawColors.Avatars.Yellow50,
  YellowDark: RawColors.Avatars.Yellow70,
  Orange: RawColors.Avatars.Orange50,
  Purple: RawColors.Avatars.Purple50,
};

export const Background = {
  Destructive: RawColors.Red.Light,
  Disabled: RawColors.Gray.Light,
  White: RawColors.White,
  Gray: RawColors.Gray.Lightest,
  Purple: RawColors.Purple.Lighter,
  ModalOverlay: withAlpha(RawColors.Gray.Darkest, 0.2),
  DarkGray: RawColors.Gray.Darkest,
  Hover: RawColors.Gray.Lighter,
  Blue: RawColors.Blue.Base,
};

export const BorderColor = {
  Input: RawColors.Gray.Light,
  InputFocus: RawColors.Gray.Darkest,
  Divider: RawColors.Gray.Lighter,
};

export const FunctionalColors = {
  Error: RawColors.Functional.Red,
  Warning: RawColors.Functional.Yellow,
  Success: RawColors.Functional.Green,
  Info: RawColors.Functional.Blue,
};
