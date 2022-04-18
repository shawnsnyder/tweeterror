import type { AphroditeStyles } from '@present-app/types/Aphrodite';
import { TextColor } from '@present-app/styles/colors';

import * as Fonts from './fonts';

export const Body: AphroditeStyles = {
  Large: {
    ...Fonts.Actief.Regular,
    color: TextColor.Secondary,
    fontSize: '16px',
    lineHeight: '1.5',
  },
  LargeEmphasized: {
    ...Fonts.Actief.Bold,
    color: TextColor.Secondary,
    fontSize: '16px',
    lineHeight: '1.5',
  },
  Small: {
    ...Fonts.Actief.Regular,
    color: TextColor.Secondary,
    fontSize: '14px',
    lineHeight: '1.4',
  },
  SmallEmphasized: {
    ...Fonts.Actief.Bold,
    color: TextColor.Secondary,
    fontSize: '14px',
    lineHeight: '1.4',
  },
  Caption: {
    ...Fonts.Actief.Regular,
    color: TextColor.Tertiary,
    fontSize: '12px',
    lineHeight: '1.333',
  },
};
