import React from "react";
import './add-color-form.scss'
import { IColorFormProps } from "../../interfaces/IForm";
import { RGB } from "../../interfaces/IColor";

class AddColorForm extends React.Component<IColorFormProps>{

    state = {
        hex: ''
    }

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

        this.setState({hex: text})
    }

    convertToRGB(hex: string):RGB{
        let result:RegExpExecArray|null = /^#?([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})$/i.exec(hex);

        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {r: 0, g: 0, b: 0};
    }

    handleAdd = (e:React.FormEvent) =>{
        e.preventDefault();
        if(this.state.hex){

            this.state.hex = this.state.hex.toUpperCase();

            if (this.state.hex.length == 4)
                this.state.hex = this.state.hex.split("").map((s) => s.repeat(s=="#" ? 1 : 2)).join("")
            
            this.props.handleAdd({
                hex: this.state.hex, 
                rgb:this.convertToRGB(this.state.hex), 
                deletable: true}
            )
            this.setState({hex: ''})
        }
    }

    render(): React.ReactNode {
        return(
            <form onSubmit={this.handleAdd}>
                <h1>Enter HEX Code</h1>
                <br/>
                <input type="text" 
                    value={this.state.hex}
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