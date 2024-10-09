import React from "react";
import './colors.scss';
import { IColor, IColorsProps, IOptions } from "../../interfaces/IColor";

const Colors:React.FC<IColorsProps> = ({ colors }:IColorsProps) =>{

    const sort = ():IColor[] =>{
        let sortedColors = [...colors];
        // sortedColors.sort((a,b) => {
        //     if(b.rgb.r != b.rgb.r)
        //         return b.rgb.r - a.rgb.r
        //     else if(b.rgb.g != b.rgb.g)
        //         return b.rgb.g - a.rgb.g
        //     return b.rgb.b - a.rgb.b
        //     })
        sortedColors.sort((a,b) => b.rgb.r - a.rgb.r)
        sortedColors.sort((a,b) =>{
            if(a.rgb.r == b.rgb.r)
                return b.rgb.g - a.rgb.g
            return 0;
        })
        sortedColors.sort((a,b) =>{
            if(a.rgb.r == b.rgb.r && a.rgb.g == b.rgb.g)
                return b.rgb.b - a.rgb.b
            return 0;
        })
        
        return sortedColors;
    }

    return(
        <div>
            <hr/>
            {sort().map((color, i)=>(           
                //!color.deletable ? <li className={`.data-color-${color.hex}`}></li> : <li className={`.data-color-${color.hex}`}></li>
                <div className="data-card">
                    <div style={{background: color.hex}} className="data-color"></div>
                    <span>{color.hex}</span>

                </div>
            ))}
        </div>
    );
}

export default Colors;