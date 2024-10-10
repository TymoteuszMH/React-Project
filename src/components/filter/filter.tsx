import React from "react";
import './filter.scss';
import { IOptions } from "../../interfaces/interfaces";
import { EOptions } from "../../interfaces/enums";
import { IFilterProps } from "../../interfaces/props";
import { defaultOptions } from "../../interfaces/defaults";
import { checkFilterOptions } from "../../interfaces/service";

class Filter extends React.Component<IFilterProps>{

    //multiplier values
    multipliers: IOptions = {
        r: 100,
        g: 100,
        b: 100,
    }

    //changing filter value - type is used for reusebility, it contains options from option enum
    changeValue(type: EOptions, value: string): void{
        let newFilteredOptions = this.props.filterOptions;

        this.multipliers[type] = parseInt(value) //setting multiplier
        newFilteredOptions[type] = Math.round(defaultOptions[type] * (this.multipliers[type]/100)) //setting option by calculating option by getting default value and multiply it by it's multiplier

        this.props.setFilteredColors([...this.props.colors].filter(color=>checkFilterOptions(newFilteredOptions, color))); //setting filtered options and sending it

        this.props.setFilteredOptions(newFilteredOptions) //sending options to app
    }

    render(): React.ReactNode {
        return(
            <div>
                <form>
                    <div className="data-rgb-filter">
                        <div className="data-filter-element data-border">
                            <div className="data-name">Red</div>
                            <div className="data-value">{this.multipliers.r}%</div>
                            <input type="range" 
                            min="0" 
                            max="100"
                            defaultValue="100"
                            onChange={(e)=>{
                                this.changeValue(EOptions.r, e.target.value)}
                            }
                            />
                            
                        </div>
                        <div className="data-filter-element data-border">
                            <div className="data-name">Green</div>
                            <div className="data-value">{this.multipliers.g}%</div>
                            <input type="range" 
                                min="0" 
                                max="100"
                                defaultValue="100"
                                onChange={(e)=>{
                                    this.changeValue(EOptions.g, e.target.value)}
                                }
                            />
                        </div>
                        <div className="data-filter-element data-border">
                            <div className="data-name">Blue</div>
                            <div className="data-value">{this.multipliers.b}%</div>
                            <input type="range" 
                            min="0" 
                            max="100"
                            defaultValue="100"
                            onChange={(e)=>{
                                this.changeValue(EOptions.b, e.target.value)}
                            }
                            />                        
                        </div>
                    </div>
                </form>
            </div>
        )
    }

}

export default Filter;

