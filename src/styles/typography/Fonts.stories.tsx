import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { storiesOf } from '@storybook/react';

import { Story, normalizeName } from '@story';

import { styles } from './story.styles';

import { Body, Fonts, Heading } from '.';

const stories = storiesOf('Design System|Typography', module);

stories.add('Fonts', () => (
  <Story>
    <Story.H1>Fonts</Story.H1>
    {Object.keys(Fonts)
      .filter(f => f !== 'FALLBACK_FONTS')
      .map(fontName => (
        <>
          <Story.H2>{fontName}</Story.H2>
          {Object.getOwnPropertyNames(Fonts[fontName])
            .filter(f => !['length', 'name', 'prototype'].includes(f))
            .map(f => (
              <div className={css(styles.group)}>
                <span className={css(styles.name)}>{`Fonts.${fontName}.${f}`}</span>
                <br />
                <span style={{ ...Fonts[fontName][f] }}>
                  Say hello to your dedicated slide designer
                </span>
              </div>
            ))}
        </>
      ))}
  </Story>
));

stories.add('Heading', () => (
  <Story>
    <Story.H1>Heading</Story.H1>
    {Object.keys(Heading).map(headingName => (
      <h1 style={{ ...Heading[headingName] }}>
        <span className={css(styles.name)}>{`Heading.${headingName}`}</span>
        <br /> Say hello to your dedicated slide designer
      </h1>
    ))}
  </Story>
));

stories.add('Body', () => (
  <Story>
    <Story.H1>Body text</Story.H1>
    {Object.keys(Body).map(bodyName => (
      <h1 style={{ ...Body[bodyName] }}>
        <span className={css(styles.name)}>{`Body.${bodyName}`}</span>
        <br /> Say hello to your dedicated slide designer
      </h1>
    ))}
  </Story>
));
