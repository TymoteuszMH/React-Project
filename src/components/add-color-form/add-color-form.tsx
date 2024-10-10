import React from "react";
import './add-color-form.scss'
import { RGB } from "../../interfaces/interfaces";
import { IColorFormProps } from "../../interfaces/props";

class AddColorForm extends React.Component<IColorFormProps>{

    //hex state
    state = {
        hex: ''
    }

    //variable for enabling add button
    validHex:boolean = false;

    //regexs for validation
    block:RegExp = new RegExp("^#[A-Fa-f0-9]{0,6}$");
    regex:RegExp = new RegExp("^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$");

    //checking text if it's valid, checking regex, adding # if not typed and blocking non-hex characters
    typing(event: React.ChangeEvent<HTMLInputElement>):void|boolean{
        let text: string = event.target.value;

        if(text[0] !== '#' && text.length >=1)
            text = `#${text}` //adding # if not there only on first position

        if(!this.block.test(text) && text.length >=1){
            event.preventDefault()
            return false; //blocking non-hex characters
        }
        
        this.validHex = this.regex.test(text) //validating hex

        this.setState({hex: text})
    }

    //converting hex to rgb using regex
    convertToRGB(hex: string):RGB{
        let result:RegExpExecArray|null = /^#?([A-F\d]{2})([A-F\d]{2})([A-F\d]{2})$/i.exec(hex);

        return result ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16)
        } : {r: 0, g: 0, b: 0}; //parsing to rgb if posible, if not, setting 0 0 0
    }

    //setting up done hex, turning it to upper case, setting to whole 6 letter hex code and setting up color
    handleAdd = (e:React.FormEvent) =>{
        e.preventDefault();
        if(this.state.hex){
            this.state.hex = this.state.hex.toUpperCase(); //turning hex to upper case

            if (this.state.hex.length === 4) 
                this.state.hex = this.state.hex.split("").map((s) => s.repeat(s==="#" ? 1 : 2)).join(""); //if hex is 3 letters long, turning it to 6 letter code
            
            this.props.handleAdd({
                hex: this.state.hex, 
                rgb:this.convertToRGB(this.state.hex), 
                deletable: true},
            ) //setting up color
            this.validHex = false
            this.setState({hex: ''}) //returning form to 0
        }
    }

    render(): React.ReactNode {
        return(
            <div className="data-add">
                <form onSubmit={this.handleAdd}>
                    <h1>Enter HEX Code</h1>
                    <input type="text" 
                        value={this.state.hex}
                        onChange={(e)=>{
                            this.typing(e)}
                        }
                        placeholder="#"
                    />
                    <button disabled={!this.validHex} className="data-add-button" type="submit">Add</button>
                </form>
            </div>
        )
    }

}

export default AddColorForm;