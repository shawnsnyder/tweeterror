import type { AphroditeStyles } from '@present-app/types/Aphrodite';
import { TextColor } from '@present-app/styles/colors';

import * as Fonts from './fonts';

export const HeaderHeight = 72;

export const Heading: AphroditeStyles = {
  One: {
    ...Fonts.Actief.Bold,
    color: TextColor.Primary,
    fontSize: '36px',
    lineHeight: '1.2',
  },
  Two: {
    ...Fonts.Actief.Bold,
    color: TextColor.Primary,
    fontSize: '30px',
    lineHeight: '1.2',
  },
  Three: {
    ...Fonts.Actief.Bold,
    color: TextColor.Primary,
    fontSize: '24px',
    lineHeight: '1.2',
  },
  Four: {
    ...Fonts.Actief.Bold,
    color: TextColor.Primary,
    fontSize: '20px',
    lineHeight: '1.2',
  },
  Five: {
    ...Fonts.Actief.Bold,
    color: TextColor.Primary,
    fontSize: '18px',
    lineHeight: '1.2',
  },
  Six: {
    ...Fonts.Actief.Bold,
    color: TextColor.Primary,
    fontSize: '16px',
    lineHeight: '1.2',
  },
  SubHeading: {
    ...Fonts.Actief.Bold,
    color: TextColor.Primary,
    fontSize: '14px',
    letterSpacing: '1px',
    lineHeight: '20px',
    textTransform: 'uppercase',
  },
};
