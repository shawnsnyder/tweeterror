import * as React from 'react';
import { css } from 'aphrodite/no-important';
import { storiesOf } from '@storybook/react';

import { Story } from '@story';

import { styles } from './story.styles';

import { Spacers } from '.';

const stories = storiesOf('Design System|Spacers', module);

stories.add('default', () => (
  <Story>
    <Story.H1>Spacers</Story.H1>

    {Object.keys(Spacers).map(name => (
      <div className={css(styles.container)}>
        <div className={css(styles.boxContainer)}>
          <div className={css(styles.box)} style={{ width: Spacers[name], height: Spacers[name] }}>
            {Number(Spacers[name].slice(0, -3)) * 16}
          </div>
        </div>
        <span className={css(styles.label)}>{`Spacers.${name}`}</span>
      </div>
    ))}
  </Story>
));
