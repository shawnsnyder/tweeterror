/* eslint-disable max-classes-per-file */
// font faces declared in web-fonts.styl
// NOTE: before changing this do a search for its VALUE because it is also copied to some .styl files
// NOTE: Slides are by default using Avenir, even after the brand update to Actief, please leave Avenir in this stack
export const FALLBACK_FONTS = 'Avenir Next, Avenir, Helvetica, Arial, sans-serif';

export interface Font {
  fontFamily: string;
  color?: string;
  fontWeight?:
    | 'initial'
    | 'inherit'
    | 'unset'
    | 'normal'
    | 'bold'
    | 'bolder'
    | 'lighter'
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  letterSpacing?: string | number;
  fontFeatureSettings?: string;
  fontStyle?: 'normal' | 'italic';
}

export const createFont = ({
  fontStyle = 'normal',
  fontFamily,
  fontWeight = 'normal',
  ...rest
}: Font): Font => {
  return {
    fontStyle,
    fontFamily: `${fontFamily}, ${FALLBACK_FONTS}`,
    fontWeight,
    ...rest,
  };
};

export class Avenir {
  public static readonly Regular = createFont({
    fontFamily: 'AvenirNext-Regular',
    fontWeight: 'normal',
  });

  public static readonly Demi = createFont({
    fontFamily: 'AvenirNext-DemiBold',
    fontWeight: 'normal',
  });

  public static readonly Bold = createFont({
    fontFamily: 'AvenirNext-Bold',
    fontWeight: 'normal',
  });

  public static readonly Medium = createFont({
    fontFamily: 'AvenirNext-Medium',
    fontWeight: 'normal',
  });
}

export class GTSuperWT {
  public static readonly Regular = createFont({
    fontFamily: 'GT-Super-WT-Regular',
    fontWeight: 'normal',
  });

  public static readonly Bold = createFont({
    fontFamily: 'GT-Super-WT-Bold',
    fontWeight: 'normal',
  });
}

const actiefFontFeatures = [
  '"ss01" 1', // contains alternate characters (namely the lower case 'a')
].join(', ');

export class Actief {
  public static readonly Light = createFont({
    fontFamily: 'ActiefGrotesque-Light',
    fontFeatureSettings: actiefFontFeatures,
    fontWeight: 'normal',
  });

  public static readonly Regular = createFont({
    fontFamily: 'ActiefGrotesque-Regular',
    fontFeatureSettings: actiefFontFeatures,
    fontWeight: 'normal',
  });

  public static readonly Medium = createFont({
    fontFamily: 'ActiefGrotesque-Medium',
    fontFeatureSettings: actiefFontFeatures,
    fontWeight: 'normal',
  });

  public static readonly Bold = createFont({
    fontFamily: 'ActiefGrotesque-Bold',
    fontFeatureSettings: actiefFontFeatures,
    fontWeight: 'normal',
  });

  public static readonly ExtraBold = createFont({
    fontFamily: 'ActiefGrotesque-ExtraBold',
    fontFeatureSettings: actiefFontFeatures,
    fontWeight: 'normal',
  });

  public static readonly LightItalic = createFont({
    fontFamily: 'ActiefGrotesque-LightItalic',
    fontFeatureSettings: actiefFontFeatures,
    fontWeight: 'normal',
  });

  public static readonly Italic = createFont({
    fontFamily: 'ActiefGrotesque-Italic',
    fontFeatureSettings: actiefFontFeatures,
    fontWeight: 'normal',
  });

  public static readonly MediumItalic = createFont({
    fontFamily: 'ActiefGrotesque-MediumItalic',
    fontFeatureSettings: actiefFontFeatures,
    fontWeight: 'normal',
  });

  public static readonly BoldItalic = createFont({
    fontFamily: 'ActiefGrotesque-BoldItalic',
    fontFeatureSettings: actiefFontFeatures,
    fontWeight: 'normal',
  });
}
