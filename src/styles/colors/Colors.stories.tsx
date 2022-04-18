/* eslint-disable no-restricted-syntax */
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { css } from 'aphrodite/no-important';

import { Story, normalizeName } from '@story';

import * as Colors from './colors';
import { styles } from './story.styles';
import readme from './README.md';

interface ColorSampleProps {
  color: string;
  name: string;
  path?: string;
}

const ColorSample: React.FC<ColorSampleProps> = ({ color, name, path }) => (
  <>
    <div
      className={css(styles.colorSample)}
      style={{
        background: color,
        borderColor: name === 'White' ? Colors.RawColors.Gray.Lighter : color,
      }}
    />
    <p style={{ textAlign: 'center' }}>
      <strong>{name}</strong>
      <br />
      {color}
      {path && (
        <small className={css(styles.path)}>
          {path}.{name}
        </small>
      )}
    </p>
  </>
);

const stories = storiesOf('Design System|Colors', module).addParameters({
  options: { showPanel: true },
  readme: { sidebar: readme },
});

stories.add('Semantic Colors', () => (
  <Story>
    {Object.keys(Colors)
      .filter(c => c !== 'RawColors')
      .map(colorSet => (
        <>
          <Story.H1>{normalizeName(colorSet)}</Story.H1>
          <Story.Collection>
            {Object.keys(Colors[colorSet]).map(colorName => (
              <ColorSample color={Colors[colorSet][colorName]} name={colorName} path={colorSet} />
            ))}
          </Story.Collection>
        </>
      ))}
  </Story>
));

stories.add('Raw Colors', () => (
  <Story>
    {Object.keys(Colors.RawColors).map(colorSet => (
      <>
        <Story.H1>{normalizeName(colorSet)}</Story.H1>
        <Story.Collection>
          {typeof Colors.RawColors[colorSet] === 'object' ? (
            Object.keys(Colors.RawColors[colorSet]).map(colorName => (
              <ColorSample
                color={Colors.RawColors[colorSet][colorName]}
                name={colorName}
                path={`RawColors.${colorSet}`}
              />
            ))
          ) : (
            <ColorSample color={Colors.RawColors[colorSet]} name={colorSet} path="RawColors" />
          )}
        </Story.Collection>
      </>
    ))}
  </Story>
));
