import React from "react";
import { EOptions, IFilterProps } from "../../interfaces/IFilter";
import { IColor, IOptions } from "../../interfaces/IColor";

class Filter extends React.Component<IFilterProps>{

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
        console.log(this.props.colors)
        let filtredColors:IColor[] = [];
        this.filteredOptions[type] = Math.round(this.defaultOptions.r * (parseInt(event.target.value)/100))

        this.props.colors.forEach((color)=>{
            if(this.filteredOptions.r>=color.rgb.r && this.filteredOptions.g>=color.rgb.g && this.filteredOptions.b>=color.rgb.b)
                filtredColors.push(color)
        })

        this.props.setFilteredColors(filtredColors);
    }

    handleOptions = (event: React.BaseSyntheticEvent) =>{
        event.preventDefault();

        //this.props.handleFilter()
    }

    render(): React.ReactNode {
        return(
            <form onSubmit={this.handleOptions}>
                <input type="range" 
                min="0" 
                max="100"
                defaultValue="100"
                onChange={(e)=>{
                    this.changeValue(EOptions.r, e)}
                }
                />
                <input type="range" 
                min="0" 
                max="100"
                defaultValue="100"
                onChange={(e)=>{
                    this.changeValue(EOptions.g, e)}
                }
                />
                <input type="range" 
                min="0" 
                max="100"
                defaultValue="100"
                onChange={(e)=>{
                    this.changeValue(EOptions.b, e)}
                }
                />
                {/* <input type="range" 
                min="0" 
                max="100"
                defaultValue="100"
                onChange={(e)=>{
                    this.changeValue(EOptions.s, e)}
                }
                /> */}
                <button type="submit">Set</button>
                <button type="reset">Reset</button>
            </form>
        )
    }

}

export default Filter;

