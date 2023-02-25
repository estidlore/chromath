import type { ColorFormats } from "./types";
import { mod } from "./utils";

class RGB {
  static toHSL = (color: ColorFormats["rgb"]): ColorFormats["hsl"] => {
    const r = color.r / 255;
    const g = color.g / 255;
    const b = color.b / 255;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);
    const chroma = max - min;

    const l = Math.round(50 * (max + min));
    let s = 0;
    let h = 0;

    if (chroma !== 0) {
      const achroma = 1 - Math.abs(max + min - 1);
      s = Math.round((100 * chroma) / achroma);

      switch (max) {
        case r:
          h = mod((g - b) / chroma, 6);
          break;
        case g:
          h = (b - r) / chroma + 2;
          break;
        case b:
          h = (r - g) / chroma + 4;
          break;
      }
    }
    h = Math.round(60 * h);

    return { h, s, l };
  };
}

export { RGB };
