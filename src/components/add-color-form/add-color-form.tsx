import React from "react";
import { ColorFormProps } from "../../interfaces/ColorFormProps";

class AddColorForm extends React.Component<ColorFormProps>{

    validHex:boolean = false;
    block:RegExp = new RegExp("^#[A-Fa-f0-9]{0,6}$");
    regex:RegExp = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");

    typing(event: React.ChangeEvent<HTMLInputElement>):void|boolean{
        let text: string = event.target.value;

        if(text[0] != '#' && text.length >=1)
            text = `#${text}`

        if(!this.block.test(text) && text.length >=1){
            event.preventDefault()
            return false;
        }
        
        this.validHex = this.regex.test(text)
        this.props.addColor(text);
    }

    render(): React.ReactNode {
        return(
            <form onSubmit={this.props.handleAdd}>
                <label>Enter HEX Code</label>
                <input type="text" 
                    value={this.props.hex}
                    onChange={(e)=>{
                        this.typing(e)}
                    }
                    placeholder="#"
                />
                <button disabled={!this.validHex} className="data-add-button" type="submit">Add</button>
            </form>
        )
    }

}

export default AddColorForm;