import React from "react";
import { Color } from "../../interfaces/Color";
import { ColorFormProps } from "../../interfaces/ColorFormProps";

class AddColorForm extends React.Component<ColorFormProps>{

    validHex:boolean = false;
    regex:RegExp = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");

    typing(text:string):void{

        if(text[0] != '#')
            text = `#${text}`
        this.validHex = this.regex.test(text)
        this.props.addColor(text);
    }

    render(): React.ReactNode {
        return(
            <form onSubmit={this.props.handleAdd}>
                <label>Enter HEX Code</label>
                <input type="text" 
                    value={this.props.hex}
                    onChange={(e)=>{this.typing(e.target.value)}}
                    placeholder="#"
                />
                <button disabled={!this.validHex} className="data-add-button" type="submit">Add</button>
            </form>
        )
    }

}

export default AddColorForm;