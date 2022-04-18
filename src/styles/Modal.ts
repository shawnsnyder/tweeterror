import * as Typography from '@present-app/styles/typography';
import { Background, FunctionalColors, RawColors, TextColor } from '@present-app/styles/colors';
import { pxToEm } from '@present-app/utils/Font';
import type { AphroditeStyles } from '@present-app/types/Aphrodite';
import { Fonts, Heading } from '@present-app/styles/typography';
import { legacyInputStyles } from '@present-app/components/legacy/legacy-input-styles';

export const BaseModal: AphroditeStyles = {
  component: {
    position: 'relative',
    color: TextColor.Primary,
  },
  textAlignCenter: {
    textAlign: 'center',
  },
  title: {
    ...Typography.Heading.SubHeading,
    margin: '0 0 25px 0',
    padding: 0,
    lineHeight: '15px',
  },
  message: {
    fontSize: '14px',
    color: TextColor.Secondary,
    margin: '0 auto 24px',
    padding: 0,
    lineHeight: '20px',
  },
  noMarginTop: {
    marginTop: 0,
  },
  noMarginLeft: {
    marginLeft: 0,
  },
  noMarginRight: {
    marginRight: 0,
  },
  columnFieldset: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    ...Typography.Heading.One,
    ...legacyInputStyles,
    height: '50px',
    width: '100%',
    margin: '0 0 8px',
  },
  inputError: {
    border: `1px solid ${FunctionalColors.Error}`,
  },
  largeInput: {
    ...legacyInputStyles,
    ...Heading.One,
    margin: '20px 0 40px',
    border: 0,
    textAlign: 'center',
    ':focus': {
      border: 0,
      outline: 0,
    },
  },
};
