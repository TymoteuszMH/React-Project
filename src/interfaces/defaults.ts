import { IColor, IOptions } from "./interfaces";

//deafult filter options
export const defaultOptions:IOptions = {
  r: 255,
  g: 255,
  b: 255,
  s: 100
}

//default colors
export const defaultColors:IColor[] = [
    {
      hex: "#FF0000",
      rgb: { r: 255, g: 0, b: 0 },
      deletable: false
    },
    {
      hex: "#00FF00",
      rgb: { r: 0, g: 255, b: 0 },
      deletable: false
    },
    {
      hex: "#0000FF",
      rgb: { r: 0, g: 0, b: 255 },
      deletable: false
    },
    {
      hex: "#FFFF00",
      rgb: { r: 255, g: 255, b: 0 },
      deletable: false
    },
    {
      hex: "#000000",
      rgb: { r: 0, g: 0, b: 0 },
      deletable: false
    },
    {
      hex: "#FFFFFF",
      rgb: { r: 255, g: 255, b: 255 },
      deletable: false
    },
    {
      hex: "#FFA500",
      rgb: { r: 255, g: 165, b: 0 },
      deletable: false
    },
    {
      hex: "#800080",
      rgb: { r: 128, g: 0, b: 128 },
      deletable: false
    }
]