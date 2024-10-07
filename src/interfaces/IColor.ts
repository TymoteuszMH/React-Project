export interface RGB{
    r: number;
    g: number;
    b: number;
}

export interface IOptions extends RGB{
    s: number|undefined;
}

export interface IColor{
    hex: string;
    rgb: RGB;
    deletable?:boolean;
}

export interface IColorsProps{
    colors: IColor[];
    setColors: React.Dispatch<React.SetStateAction<IColor[]>>;
}

