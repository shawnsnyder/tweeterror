import type { StyleDeclaration } from 'aphrodite/no-important';

export const AuthForm: StyleDeclaration = {
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto', // fallback style
  maxWidth: '380px',
  padding: '0 20px',
  width: '100%',
};
