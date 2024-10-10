import { IColor, IOptions } from "./interfaces"

export const checkFilterOptions = (options: IOptions, color:IColor):IColor | false =>{
    if(options.r>=color.rgb.r && options.g>=color.rgb.g && options.b>=color.rgb.b)
        return color
    return false
}