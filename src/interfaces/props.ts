import { IColor, IOptions } from "./interfaces";

//props interfaces

export interface IColorsProps{
    colors: IColor[];
    setColors: React.Dispatch<React.SetStateAction<IColor[]>>;
    handleRemove: (color: IColor) => void;
}

export interface IFilterProps{
    colors: IColor[];
    filterOptions: IOptions;
    setFilteredColors: React.Dispatch<React.SetStateAction<IColor[]>>;
    setFilteredOptions: React.Dispatch<React.SetStateAction<IOptions>>;
}

export interface IColorFormProps{
    hex: string;
    addColor: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (color: IColor) => void;
}