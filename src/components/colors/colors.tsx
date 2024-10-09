import React from "react";
import './colors.scss';
import { IColorsProps, IOptions } from "../../interfaces/IColor";

const Colors:React.FC<IColorsProps> = ({ colors }:IColorsProps) =>{

    return(
        <div>
            <hr/>
            {colors.map((color, i)=>(           
                //!color.deletable ? <li className={`.data-color-${color.hex}`}></li> : <li className={`.data-color-${color.hex}`}></li>
                <li key={i} style={{background: color.hex}} className="data-color"></li>
            ))}
        </div>
    );
}

export default Colors;