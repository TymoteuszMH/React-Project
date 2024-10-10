import React from "react";
import './colors.scss';
import { IColor } from "../../interfaces/interfaces";
import { IColorsProps } from "../../interfaces/props";

const Colors:React.FC<IColorsProps> = ({ colors, handleRemove }:IColorsProps) =>{

    //sorting array so: first goes highest red value if same, next goes green values and then blue values and return sorted array
    const sort = ():IColor[] =>{
        let sortedColors = [...colors];

        sortedColors.sort((a,b) => b.rgb.r - a.rgb.r) //sorting by red value
        
        sortedColors.sort((a,b) =>{
            if(a.rgb.r === b.rgb.r)
                return b.rgb.g - a.rgb.g
            return 0;
        }) //sorting by green values if red values are the same

        sortedColors.sort((a,b) =>{
            if(a.rgb.r === b.rgb.r && a.rgb.g === b.rgb.g)
                return b.rgb.b - a.rgb.b
            return 0; 
        }) //sorting by blue values if red and blue values are the same
        
        return sortedColors;
    }

    return(
        <div className="colors">
            {sort().map((color, i)=>(           
                <div key={i} className="data-card data-border">
                    <div style={{background: color.hex}} className="data-color"></div>
                    <button className="data-delete" hidden={!color.deletable} onClick={() => handleRemove(color)}>x</button>
                    <span className="data-name">{color.hex}</span>
                </div>
            ))}
        </div>
    );
}

export default Colors;