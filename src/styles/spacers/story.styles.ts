import { StyleSheet } from 'aphrodite/no-important';

import * as Colors from '@present-app/styles/colors';

export const styles = StyleSheet.create({
  box: {
    background: Colors.Background.Purple,
    color: Colors.TextColor.Highlight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.5rem',
  },
  container: {
    marginBottom: '1.25rem',
    display: 'flex',
    alignItems: 'center',
    width: '18rem',
    justifyContent: 'space-between',
  },
  label: {
    width: '10rem',
    fontSize: 12,
  },
  boxContainer: {
    width: '5rem',
    display: 'flex',
    justifyContent: 'flex-end',
  },
});
