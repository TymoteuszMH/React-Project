//interface for rgb
export interface RGB{
    r: number;
    g: number;
    b: number;
}

//interface for options extends rgb for its properties.
export interface IOptions extends RGB{
    s?: number;
}

//interface for color
export interface IColor{
    hex: string;
    rgb: RGB;
    deletable?:boolean;
}
