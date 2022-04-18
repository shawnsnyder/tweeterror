# Colors

## Semantic Colors

```ts
import { StyleSheet } from 'aphrodite/no-important';
import * as Colors from '@present-app/styles/colors';

export default StyleSheet.create({
  colorExample: {
    color: Colors.TextColor.Primary,
  },
});
```

Semantic colors are separated by categories. Make sure you use the right category for your needs:

```ts
export default StyleSheet.create({
  colorExample: {
    color: Colors.TextColor.Primary, // Right
    color: Colors.Backgroud.Grey, // Wrong: background color is used for text color
  },
});
```

## Raw Colors

Use Semantic colors preferably and refer to Raw colors only if there is no alternative color defined in semantic groups.

```ts
import { StyleSheet } from 'aphrodite/no-important';
import { RawColors } from '@present-app/styles/colors';

export default StyleSheet.create({
  colorExample: {
    color: RawColors.Purple.Base,
  },
});
```
