import { IColor } from "./IColor";

export interface IColorFormProps{
    hex: string;
    addColor: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (color: IColor) => void;
}