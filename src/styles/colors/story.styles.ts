import { StyleSheet } from 'aphrodite/no-important';

import * as Colors from './colors';

export const styles = StyleSheet.create({
  colorSample: {
    width: '9rem',
    height: '7rem',
    borderRadius: '50%',
    border: '2px solid',
  },
  path: {
    display: 'block',
    color: Colors.TextColor.Tertiary,
  },
});
