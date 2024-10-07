import { IColor, IOptions } from "./IColor";

export interface IFilterProps{
    colors: IColor[];
    setFilteredColors: React.Dispatch<React.SetStateAction<IColor[]>>;
    handleFilter: (o: IColor[]) => void;
}

export enum EOptions{
    r='r',
    g='g',
    b='b',
}