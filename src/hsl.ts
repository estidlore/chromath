import { ColorFormats } from "./types";
import { mod } from "./utils";

class HSL {
  static toRGB = (color: ColorFormats["hsl"]): ColorFormats["rgb"] => {
    const h = color.h / 60;
    const s = color.s / 100;
    const l = color.l / 100;

    const c = s * (1 - Math.abs(2 * l - 1));
    const x = c * (1 - Math.abs(mod(h, 2) - 1));
    const m = l - c / 2;

    let res: ColorFormats["rgb"];
    switch (Math.floor(h)) {
      case 0:
        res = { b: 0, g: x, r: c };
        break;
      case 1:
        res = { b: 0, g: c, r: x };
        break;
      case 2:
        res = { b: x, g: c, r: 0 };
        break;
      case 3:
        res = { b: c, g: x, r: 0 };
        break;
      case 4:
        res = { b: c, g: 0, r: x };
        break;
      case 5:
        res = { b: x, g: 0, r: c };
        break;
      default:
        throw new Error("Unexpected hue");
    }

    const getChannel = (raw: number): number => {
      return Math.round(255 * (raw + m));
    };

    return {
      b: getChannel(res.b),
      g: getChannel(res.g),
      r: getChannel(res.r)
    };
  };
}

export { HSL };
