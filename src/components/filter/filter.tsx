import React from "react";
import './filter.scss';
import { EOptions, IFilterProps } from "../../interfaces/IFilter";
import { IColor, IOptions } from "../../interfaces/IColor";

class Filter extends React.Component<IFilterProps>{

    multipliers: IOptions = {
        r: 100,
        g: 100,
        b: 100,
        s: 100
    }

    defaultOptions:IOptions = {
        r: 255,
        g: 255,
        b: 255,
        s: 100
    }

    filteredOptions:IOptions = {
        r: 255,
        g: 255,
        b: 255,
        s: undefined
    }

    changeValue(type: EOptions, event: React.ChangeEvent<HTMLInputElement>){
        let filtredColors:IColor[] = [];
        this.multipliers[type] = parseInt(event.target.value)
        this.filteredOptions[type] = Math.round(this.defaultOptions.r * (this.multipliers[type]/100))

        this.props.colors.forEach((color)=>{
            if(this.filteredOptions.r>=color.rgb.r && this.filteredOptions.g>=color.rgb.g && this.filteredOptions.b>=color.rgb.b)
                filtredColors.push(color)
        })

        this.props.setFilteredColors(filtredColors);
    }

    render(): React.ReactNode {
        return(
            <form>
                <div className="data-rgb-filter">
                    <div className="data-filter-element">
                        <div>
                            <label>Red</label>
                            <span>{this.multipliers.r}%</span>
                        </div>
                        <input type="range" 
                        min="0" 
                        max="100"
                        defaultValue="100"
                        onChange={(e)=>{
                            this.changeValue(EOptions.r, e)}
                        }
                        />
                        
                    </div>
                    <div className="data-filter-element">
                        <div>
                            <label>Green</label>
                            <span>{this.multipliers.g}%</span>
                        </div>
                        <input type="range" 
                            min="0" 
                            max="100"
                            defaultValue="100"
                            onChange={(e)=>{
                                this.changeValue(EOptions.g, e)}
                            }
                        />
                    </div>
                    <div className="data-filter-element">
                        <div>
                            <label>Blue</label>
                            <span>{this.multipliers.b}%</span>
                        </div>
                        <input type="range" 
                        min="0" 
                        max="100"
                        defaultValue="100"
                        onChange={(e)=>{
                            this.changeValue(EOptions.b, e)}
                        }
                        />                        
                    </div>
                </div>
                {/* <input type="range" 
                min="0" 
                max="100"
                defaultValue="100"
                onChange={(e)=>{
                    this.changeValue(EOptions.s, e)}
                }
                /> */}
            </form>
        )
    }

}

export default Filter;

