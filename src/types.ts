interface ColorFormatRGB {
  b: number;
  g: number;
  r: number;
}

interface ColorFormatHSL {
  h: number;
  l: number;
  s: number;
}

interface ColorFormats {
  hsl: ColorFormatHSL;
  rgb: ColorFormatRGB;
}

export type { ColorFormats };
